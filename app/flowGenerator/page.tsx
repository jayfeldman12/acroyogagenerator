'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Sheet from 'react-modal-sheet';
import CategoryFilter from '../components/CategoryFilter';
import PickPose from '../components/PickPose/PickPose';
import PoseImage from '../components/PoseImage';
import { Category, allCategories } from '../components/models/categories';
import { Pose, filterByCategories, poses, startingPoses } from '../components/models/poses';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScale } from '../utils/scale';
import FlowControls from './FlowControls';
import './FlowGenerator.css';

const getPoseById = (possiblePoses: Pose[], id: number): Pose => {
  return possiblePoses.find((pose) => pose.id === id)!;
};

const startFlow = () => {
  return [getPoseById(poses, startingPoses[Math.floor(Math.random() * startingPoses.length)])];
};

const getNextPoseInFlow = (pose: Pose, filteredPoses: Pose[]): Pose => {
  return getPoseById(
    filteredPoses,
    pose.transitions[Math.floor(Math.random() * pose.transitions.length)]
  );
};

// Saves state when navigating back and forth
let savedFlow: Pose[];
let savedCategories: Category[] = allCategories;

const FlowGenerator = () => {
  // Get encoded Flow from URL
  const [categories, setCategories] = useState<Category[]>(savedCategories ?? allCategories);
  const filteredPoses = useMemo(() => filterByCategories(poses, categories), [categories]);
  const [activeFlow, setActiveFlow] = useState(savedFlow ?? startFlow());
  const bottomPageRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [posePickerVisible, setPosePickerVisible] = useState(false);

  const dimensions = useWindowSizeContext();
  const finalIndex = activeFlow.length - 1;
  console.log('activ', activeFlow);
  useEffect(() => {
    if (!savedFlow?.length) {
      const urlFlow = new URLSearchParams(window.location.search).get('flow');
      console.log('flow', urlFlow);
      if (urlFlow) {
        console.log('setting');
        try {
          const flow = urlFlow.split(',');
          const urlPoses = flow.map((poseId) => getPoseById(poses, parseInt(poseId)));
          setActiveFlow(urlPoses);
        } catch {
          console.warn('Failed to get flow from URL');
        }
      }
    }
  }, []);

  const regenerateCurrentPose = () => {
    setActiveFlow((currentFlow) => [
      ...currentFlow.slice(0, finalIndex),
      getNextPoseInFlow(activeFlow[finalIndex], filteredPoses),
    ]);
  };

  const addNewPose = () => {
    if (!activeFlow.length) {
      setActiveFlow(startFlow());
      return;
    }
    // Creates a temporary transitions array using the current valid transitions
    const currentPose = {
      ...activeFlow[finalIndex],
      transitions: [...activeFlow[finalIndex].transitions],
    };
    currentPose.transitions = currentPose.transitions.filter((transition) =>
      filteredPoses.find((pose) => pose.id === transition)
    );

    // If there are other valid transitions, filters out poses you just come from
    if (activeFlow.length > 1 && currentPose.transitions.length > 1) {
      const previousPoseIndex = currentPose.transitions.indexOf(activeFlow[finalIndex - 1].id);
      if (previousPoseIndex > -1) {
        currentPose.transitions.splice(previousPoseIndex, 1);
      }
    }
    // Make transitions you haven't gone to 4 times as likely
    currentPose.transitions = currentPose.transitions.reduce<number[]>((acc, transitionId) => {
      if (activeFlow.some((previousPose) => previousPose.id === transitionId)) {
        return [...acc, transitionId];
      }
      return [...acc, transitionId, transitionId, transitionId, transitionId];
    }, []);

    const newPose = getNextPoseInFlow(currentPose, filteredPoses);

    if (newPose) {
      setError('');
      setActiveFlow((currentFlow) => [...currentFlow, newPose]);
    } else {
      setError('No transition possible with current filters');
    }
  };

  const deleteCurrentPose = () => {
    setActiveFlow((currentFlow) => [...currentFlow.slice(0, finalIndex)]);
  };

  const pickNewPose = () => {
    setPosePickerVisible(true);
  };

  const onSelectPose = (newPose: Pose) => {
    setPosePickerVisible(false);
    setActiveFlow((currentFlow) => [...currentFlow, newPose]);
    window.requestAnimationFrame(() => {
      bottomPageRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  useEffect(() => {
    return () => {
      savedFlow = activeFlow;
      savedCategories = categories;
    };
  }, [activeFlow, categories]);

  const onSharePose = async () => {
    const url = new URL(window.location.href);
    url.searchParams.set('flow', activeFlow.map((pose) => pose.id).join(','));
    try {
      await navigator.clipboard.writeText(url.toString());
    } catch (e) {
      setError('Could not copy to clipboard');
      console.warn('Could not copy to clipboard', e);
    }
  };

  return (
    <div className="FlowGenerator">
      <div className="TextContainer">
        <h1>ACRO YOGA FLOW GENERATOR</h1>
        <p>
          <strong>"MATCH THE FLOW" ACRO GAME</strong>
        </p>
        <em>Start in one pose, click NEXT POSE, and try to get to the next pose</em>
      </div>
      <CategoryFilter categories={categories} setCategories={setCategories} />
      <br />
      <br />
      <div id="Flow">
        {activeFlow.length ? (
          activeFlow.map((pose, index) => {
            console.log('have a pose?', pose);
            return (
              <div id="Pose" key={`id${pose.id}index${index}`}>
                <PoseImage pose={pose} scale={getScale(0.5, dimensions)} />
              </div>
            );
          })
        ) : (
          <div>
            <p className="EmptyPage">
              Start your flow by "Generate Next Pose" or "Pick Next Pose" below!
            </p>
            <br />
            <br />
          </div>
        )}
      </div>
      {error ? <p className="error">{error}</p> : null}
      <FlowControls
        clear={() => setActiveFlow([])}
        deletePose={deleteCurrentPose}
        next={addNewPose}
        pick={pickNewPose}
        regenerate={regenerateCurrentPose}
        share={onSharePose}
      />
      <Sheet
        isOpen={posePickerVisible}
        onClose={() => setPosePickerVisible(false)}
        detent="content-height"
        springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
      >
        <Sheet.Container>
          <Sheet.Content>
            <Sheet.Header />
            <div className="Sheet">
              <PickPose
                onDismiss={() => setPosePickerVisible(false)}
                onPressPose={onSelectPose}
                possiblePoses={filteredPoses}
                recommendedPoseIds={
                  activeFlow.length ? activeFlow[finalIndex].transitions : startingPoses
                }
              />
            </div>
          </Sheet.Content>
        </Sheet.Container>
      </Sheet>
      <div ref={bottomPageRef} />
    </div>
  );
};

export default FlowGenerator;
