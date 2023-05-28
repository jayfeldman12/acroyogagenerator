'use client';

import { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import PoseImage from '../components/PoseImage';
import { Category, allCategories } from '../components/models/categories';
import { Pose, filterByCategories, poses } from '../components/models/poses';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScale, getScaledDimensions } from '../utils/scale';
import { imagePath } from '../utils/url';
import './PoseGenerator.css';

const reloadButtonUrl = `${imagePath}/ClickForNewPose.png`;

const actualPoses = poses.slice(1);

const getRandomPose = (poses = actualPoses): Pose => {
  return poses[Math.floor(Math.random() * poses.length)];
};

const defaultReloadWidth = 300;
const defaultReloadHeight = 50;

const PoseGenerator = () => {
  const [activePose, setActivePose] = useState(getRandomPose());
  const [categories, setCategories] = useState<Category[]>(allCategories);
  const filteredPoses = useMemo(() => filterByCategories(actualPoses, categories), [categories]);
  const dimensions = useWindowSizeContext();
  const { windowWidth } = dimensions;

  const setNewPose = () => {
    if (filteredPoses.length) {
      let newPose: Pose;
      do {
        newPose = getRandomPose(filteredPoses);
      } while (newPose === activePose);
      setActivePose(newPose);
    }
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
      <CategoryFilter categories={categories} setCategories={setCategories} />
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
