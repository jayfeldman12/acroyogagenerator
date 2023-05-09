'use client';

import { useState } from 'react';
import PoseImage from '../components/PoseImage';
import { Pose, poses, startingPoses } from '../utils/poses';
import FlowControls from './FlowControls';
import './FlowGenerator.css';

const startFlow = () => {
  return poses[startingPoses[Math.floor(Math.random() * startingPoses.length)]];
};

const getNextPoseInFlow = (pose: Pose): Pose => {
  return poses[pose.transitions[Math.floor(Math.random() * pose.transitions.length)]];
};

const FlowGenerator = () => {
  const [activeFlow, setActiveFlow] = useState([startFlow()]);
  const finalIndex = activeFlow.length - 1;

  const regenerateCurrentPose = () => {
    setActiveFlow((currentFlow) => [
      ...currentFlow.slice(0, finalIndex),
      getNextPoseInFlow(activeFlow[finalIndex]),
    ]);
  };

  const addNewPose = () => {
    setActiveFlow((currentFlow) => [...currentFlow, getNextPoseInFlow(activeFlow[finalIndex])]);
  };

  return (
    <div className="FlowGenerator">
      <div className="TextContainer">
        <h1>ACRO FLOW GENERATOR</h1>
        <p>
          <strong>"MATCH THE FLOW" ACRO GAME</strong>
        </p>
        <em>Start in one pose, click NEXT POSE, and try to get to the next pose</em>
        <p style={{ fontSize: 30, fontWeight: 'bold' }}>In Progress!</p>
      </div>
      <br />
      <br />
      <div id="Flow">
        {activeFlow.map((pose, index) => {
          return (
            <div id="Pose">
              <PoseImage pose={pose} scale={0.3} />
            </div>
          );
        })}
      </div>
      <FlowControls regenerate={regenerateCurrentPose} next={addNewPose} />
    </div>
  );
};

export default FlowGenerator;
