'use client';

import { useEffect, useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import PoseImage from '../components/PoseImage';
import { Category, allCategories } from '../components/models/categories';
import { Pose, filterByCategories, poses } from '../components/models/poses';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScale, getScaledDimensions } from '../utils/scale';
import { imagePath } from '../utils/url';
import './PoseGenerator.css';

const reloadButtonUrl = `${imagePath}/ClickForNewPose.png`;

const getRandomPose = (potentialPoses = poses): Pose => {
  return potentialPoses[Math.floor(Math.random() * potentialPoses.length)];
};

const defaultReloadWidth = 300;
const defaultReloadHeight = 50;

let initialPose = getRandomPose();
let initialCategories = allCategories;

const PoseGenerator = () => {
  const [activePose, setActivePose] = useState(initialPose);
  const [categories, setCategories] = useState<Category[]>(initialCategories);
  const filteredPoses = useMemo(() => filterByCategories(poses, categories), [categories]);
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

  useEffect(() => {
    return () => {
      initialPose = activePose;
      initialCategories = categories;
    };
  }, [activePose, categories]);

  return (
    <div className="PoseGenerator">
      <div className="TextContainer">
        <h1>ACRO YOGA POSE GENERATOR</h1>
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
