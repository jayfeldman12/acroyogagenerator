import React, { useState } from 'react';
import './App.css';

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

function App() {
  const [activePose, setActivePose] = useState(getRandomPose());

  const setNewPose = () => {
    let newPose = getRandomPose();
    while (newPose === activePose) {
      // Ensures that the new image doesn't happen to be the same as the old image
      newPose = getRandomPose();
    }
    setActivePose(newPose);
  };

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
        style={{ marginTop: 20, cursor: 'pointer' }}
        alt="Reload pose"
        onClick={setNewPose}
      />
      <br />
      <img src={activePose} alt="Pose" style={{ marginTop: 20 }} />
    </div>
  );
}

export default App;
