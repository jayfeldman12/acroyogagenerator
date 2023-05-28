'use client';

import { useMemo, useState } from 'react';
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

const FlowGenerator = () => {
  const [categories, setCategories] = useState<Category[]>(allCategories);
  const filteredPoses = useMemo(() => filterByCategories(poses, categories), [categories]);
  const [activeFlow, setActiveFlow] = useState(startFlow());
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
    let newPose: Pose;
    let counter = 0;
    const maxCounter = 20;
    do {
      newPose = getNextPoseInFlow(activeFlow[finalIndex], filteredPoses);
      counter++;
    } while (counter < maxCounter && (!newPose || newPose === activeFlow[finalIndex - 1]));
    if (newPose) {
      setActiveFlow((currentFlow) => [...currentFlow, newPose]);
      return newPose;
    } else {
      return false;
    }
  };

  const onPressNext = () => {
    const newPose = addNewPose();
    if (newPose) {
      setError('');
    } else {
      setError('No transition possible with current filters');
    }
  };

  return (
    <div className="FlowGenerator">
      <div className="TextContainer">
        <h1>ACRO FLOW GENERATOR</h1>
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
        next={onPressNext}
        clear={() => setActiveFlow(startFlow())}
      />
    </div>
  );
};

export default FlowGenerator;
