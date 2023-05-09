'use client';

import { useState } from 'react';
import PoseImage from '../components/PoseImage';
import { Pose, poseFlows, posePathToUrl, startingPoses } from '../utils/poses';
import './FlowGenerator.css';

const startFlow = () => {
  return poseFlows[startingPoses[Math.floor(Math.random() * startingPoses.length)]];
};

const getNextPoseInFlow = (pose: Pose): Pose => {
  return poseFlows[pose.transitions[Math.floor(Math.random() * pose.transitions.length)]];
};

const FlowGenerator = () => {
  const [activeFlow, setActiveFlow] = useState([startFlow()]);

  console.log('flow', startFlow());
  console.log('path', startFlow().path);

  return (
    <div className="FlowGenerator">
      <div className="TextContainer">
        <h1>ACRO FLOW GENERATOR</h1>
        <p>
          <strong>"MATCH THE FLOW" ACRO GAME</strong>
        </p>
        <em>Start in one pose, click NEXT POSE, and try to get to the next pose</em>
      </div>
      <br />
      <br />
      {activeFlow.map((pose) => (
        <PoseImage src={posePathToUrl(pose.path)} scale={0.5} />
      ))}
    </div>
  );
};

export default FlowGenerator;
