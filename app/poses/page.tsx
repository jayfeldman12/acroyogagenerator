'use client';

import { useMemo, useState } from 'react';
import PoseImage from '../components/PoseImage';
import { poses } from '../utils/poses';
import './Page.css';

const actualPoses = poses.filter((pose) => pose.path);

// Util that takes text in, lowercases, and takes out all non-alphanumeric characters
const cleanText = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const AllPoses = () => {
  const [searchText, setSearchText] = useState('');

  const filteredPoses = useMemo(() => {
    const cleanSearchText = cleanText(searchText);
    if (cleanSearchText) {
      return poses.filter((pose) => cleanText(pose.name).includes(cleanSearchText));
    }
    return actualPoses;
  }, [searchText]);

  const onChangeSearchText = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  return (
    <div className="AllPoses">
      <div className="TextContainer">
        <h1>ALL POSES</h1>
      </div>
      <div id="InputContainer">
        <input
          id="SearchInput"
          type="text"
          placeholder="Search pose"
          onChange={onChangeSearchText}
          value={searchText}
        />

        <span id="Cancel" onClick={() => setSearchText('')}>
          ⊗
        </span>
      </div>
      <br />
      <br />
      <div className="PoseContainer">
        {filteredPoses.map((pose) => (
          <PoseImage pose={pose} scale={0.3} />
        ))}
      </div>
    </div>
  );
};

export default AllPoses;
