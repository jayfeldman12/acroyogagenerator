'use client';

import { useState } from 'react';
import PoseImage from '../components/PoseImage';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScaledDimensions } from '../utils/getScaledDimensions';
import { poses } from '../utils/poses';
import { imagePath } from '../utils/url';
import './PoseGenerator.css';

const reloadButtonUrl = `${imagePath}/ClickForNewPose.png`;

const getRandomPose = (): string => {
  return poses[Math.floor(Math.random() * poses.length)];
};

const defaultReloadWidth = 300;
const defaultReloadHeight = 50;

const PoseGenerator = () => {
  const [activePose, setActivePose] = useState(getRandomPose());
  const { windowWidth } = useWindowSizeContext();

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
      <PoseImage src={activePose} />
    </div>
  );
};

export default PoseGenerator;
