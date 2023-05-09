'use client';

import { useState } from 'react';
import PoseImage from '../components/PoseImage';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { Pose, poses } from '../utils/poses';
import { getScale, getScaledDimensions } from '../utils/scale';
import { imagePath } from '../utils/url';
import './PoseGenerator.css';

const reloadButtonUrl = `${imagePath}/ClickForNewPose.png`;

const actualPoses = poses.slice(1);

const getRandomPose = (): Pose => {
  return actualPoses[Math.floor(Math.random() * actualPoses.length)];
};

const defaultReloadWidth = 300;
const defaultReloadHeight = 50;

const PoseGenerator = () => {
  const [activePose, setActivePose] = useState(getRandomPose());
  const dimensions = useWindowSizeContext();
  const { windowWidth } = dimensions;

  const setNewPose = () => {
    let newPose = getRandomPose();
    while (newPose === activePose) {
      // Ensures that the new image doesn't happen to be the same as the old image
      newPose = getRandomPose();
    }
    setActivePose(newPose);
  };

  const { width: reloadWidth, height: reloadHeight } = getScaledDimensions(
    defaultReloadWidth,
    defaultReloadHeight,
    windowWidth
  );

  return (
    <div className="PoseGenerator">
      <div className="TextContainer">
        <h1>ACRO POSE GENERATOR</h1>
        <p>
          <strong>"FLOOR IS LAVA" ACRO GAME</strong>
        </p>
        <em>
          Start in one pose, click NEW POSE, and try to go to new pose in the fewest transitions (2,
          1, 0) without touching the floor.
        </em>
      </div>
      <br />
      <img
        src={reloadButtonUrl}
        width={reloadWidth}
        height={reloadHeight}
        style={{ marginTop: 20, cursor: 'pointer' }}
        alt="Reload pose"
        onClick={setNewPose}
      />
      <br />
      <div style={{ marginTop: 20 }} />
      <PoseImage pose={activePose} scale={getScale(0.8, dimensions)} />
    </div>
  );
};

export default PoseGenerator;
