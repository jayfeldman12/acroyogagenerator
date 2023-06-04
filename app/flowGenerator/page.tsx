'use client';

import { useEffect, useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
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
  const [categories, setCategories] = useState<Category[]>(savedCategories ?? allCategories);
  const filteredPoses = useMemo(() => filterByCategories(poses, categories), [categories]);
  const [activeFlow, setActiveFlow] = useState(savedFlow ?? startFlow());
  const [error, setError] = useState('');

  const dimensions = useWindowSizeContext();
  const finalIndex = activeFlow.length - 1;

  const regenerateCurrentPose = () => {
    setActiveFlow((currentFlow) => [
      ...currentFlow.slice(0, finalIndex),
      getNextPoseInFlow(activeFlow[finalIndex], filteredPoses),
    ]);
  };

  const addNewPose = () => {
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

  useEffect(() => {
    return () => {
      savedFlow = activeFlow;
      savedCategories = categories;
    };
  }, [activeFlow, categories]);

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
        {activeFlow.map((pose, index) => {
          return (
            <div id="Pose" key={`id${pose.id}index${index}`}>
              <PoseImage pose={pose} scale={getScale(0.5, dimensions)} />
            </div>
          );
        })}
      </div>
      {error ? <p className="error">{error}</p> : null}
      <FlowControls
        regenerate={regenerateCurrentPose}
        next={addNewPose}
        clear={() => setActiveFlow(startFlow())}
      />
    </div>
  );
};

export default FlowGenerator;
