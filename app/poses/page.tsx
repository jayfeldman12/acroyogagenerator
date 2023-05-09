'use client';

import { useMemo, useState } from 'react';
import PoseImage from '../components/PoseImage';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { poses } from '../utils/poses';
import { getScale } from '../utils/scale';
import './Page.css';

const actualPoses = poses.filter((pose) => pose.path);

// Util that takes text in, lowercases, and takes out all non-alphanumeric characters
const cleanText = (text: string): string => {
  return text.toLowerCase().replace(/[^a-z0-9]/g, '');
};

const AllPoses = () => {
  const dimensions = useWindowSizeContext();
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

        <span
          id="Cancel"
          onClick={() => setSearchText('')}
          role="button"
          aria-label="Reset search text"
        >
          ⊗
        </span>
      </div>
      <br />
      <br />
      <div className="PoseContainer">
        {filteredPoses.map((pose) => (
          <PoseImage pose={pose} scale={getScale(0.4, dimensions)} />
        ))}
      </div>
    </div>
  );
};

export default AllPoses;
