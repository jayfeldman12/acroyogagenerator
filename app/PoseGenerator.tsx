'use client';

import { useCallback, useState } from 'react';
import './PoseGenerator.css';
import { useWindowSizeContext } from './context/WindowSizeContext';

const baseUrl = 'https://acroyoga757.com';
const imagesPath = `${baseUrl}/acroimages`;
const reloadButtonUrl = 'ClickForNewPose.png';

const poses = Array(76)
  .fill('')
  .map((_, index) => {
    const imageNumber = index.toString().padStart(3, '0'); // Converts 4 => 004, 34 => 034 etc
    return `${imagesPath}/image-${imageNumber}.jpg`;
  });

const getRandomPose = (): string => {
  return poses[Math.floor(Math.random() * poses.length)];
};

const defaultPoseWidth = 500;
const defaultPoseHeight = 625;

const defaultReloadWidth = 300;
const defaultReloadHeight = 50;

const PoseGenerator = () => {
  const [activePose, setActivePose] = useState(getRandomPose());
  const { windowWidth } = useWindowSizeContext();

  const getScaledDimensions = useCallback(
    (defaultWidth: number, defaultHeight: number) => {
      const width = Math.min(defaultWidth, windowWidth - 30);
      const height = (width / defaultWidth) * defaultHeight;
      return { width, height };
    },
    [windowWidth]
  );

  const setNewPose = () => {
    let newPose = getRandomPose();
    while (newPose === activePose) {
      // Ensures that the new image doesn't happen to be the same as the old image
      newPose = getRandomPose();
    }
    setActivePose(newPose);
  };

  const { width: poseWidth, height: poseHeight } = getScaledDimensions(
    defaultPoseWidth,
    defaultPoseHeight
  );
  const { width: reloadWidth, height: reloadHeight } = getScaledDimensions(
    defaultReloadWidth,
    defaultReloadHeight
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
        src={`${imagesPath}/${reloadButtonUrl}`}
        width={reloadWidth}
        height={reloadHeight}
        style={{ marginTop: 20, cursor: 'pointer' }}
        alt="Reload pose"
        onClick={setNewPose}
      />
      <br />
      <img
        src={activePose}
        alt="Pose"
        style={{ marginTop: 20, width: poseWidth, height: poseHeight }}
      />
    </div>
  );
};

export default PoseGenerator;
