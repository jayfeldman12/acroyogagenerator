import React, { useState } from 'react';
import './App.css';

const baseUrl = 'https://acroyoga757.com';
const imagesPath = `${baseUrl}/acroimages`;
const reloadButtonUrl = 'ClickForNewPose.png';

// Takes 4 => 004, 34 => 034, 944 => 944
const fillIndexToThreeDigits = (index: number): string => {
  const stringified = index.toString();
  if (stringified.length > 2) {
    return stringified;
  } else if (stringified.length === 2) {
    return `0${stringified}`;
  }
  return `00${stringified}`;
};

const poses = Array(76)
  .fill('')
  .map((_, index) => `${imagesPath}/image-${fillIndexToThreeDigits(index)}.jpg`);

const getRandomPose = (): string => {
  return poses[Math.floor(Math.random() * poses.length)];
};

function App() {
  const [activePose, setActivePose] = useState(getRandomPose());

  return (
    <div className="App">
      <h1>ACRO POSE GENERATOR</h1>
      <p>
        <strong>"FLOOR IS LAVA" ACRO GAME</strong>
      </p>
      <em>
        Start in one pose, click NEW POSE, and try to go to new pose in the fewest transitions (2,
        1, 0) without touching the floor.
      </em>
      <br />
      <img
        src={`${imagesPath}/${reloadButtonUrl}`}
        width="300"
        height="50"
        style={{ marginTop: 20 }}
        alt="Reload pose"
        onClick={() => setActivePose(getRandomPose())}
      />
      <br />
      <img src={activePose} alt="Pose" style={{ marginTop: 20 }} />
    </div>
  );
}

export default App;
