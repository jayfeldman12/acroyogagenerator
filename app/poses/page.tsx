'use client';

import { useMemo, useState } from 'react';
import CategoryFilter from '../components/CategoryFilter';
import PoseImage from '../components/PoseImage';
import SearchBar from '../components/SearchBar/SearchBar';
import { Category, allCategories } from '../components/models/categories';
import { filterByCategories, poses } from '../components/models/poses';
import { useWindowSizeContext } from '../context/WindowSizeContext';
import { cleanText } from '../utils/cleanText';
import { getScale } from '../utils/scale';
import './Page.css';

const AllPoses = () => {
  const dimensions = useWindowSizeContext();
  const [searchText, setSearchText] = useState('');
  const [debugPressCount, setDebugPressCount] = useState(0);
  const debugEnabled = debugPressCount >= 5;
  const [categories, setCategories] = useState<Category[]>(allCategories);

  const categoryFilteredPoses = useMemo(() => {
    return filterByCategories(poses, categories);
  }, [categories]);

  const filteredPoses = useMemo(() => {
    const cleanSearchText = cleanText(searchText);
    if (cleanSearchText) {
      return categoryFilteredPoses.filter((pose) => cleanText(pose.name).includes(cleanSearchText));
    }
    return categoryFilteredPoses;
  }, [searchText, categoryFilteredPoses]);

  return (
    <div className="AllPoses">
      <div className="TextContainer">
        <h1 onClick={() => setDebugPressCount((count) => count + 1)}>ALL ACRO YOGA POSES</h1>
      </div>
      {debugEnabled ? <p id="Debug">ID mode enabled</p> : null}
      <SearchBar onChangeSearchText={setSearchText} searchText={searchText} />
      <CategoryFilter categories={categories} setCategories={setCategories} />
      <br />
      <br />
      <div className="PoseContainer">
        {filteredPoses.map((pose) => (
          <span key={pose.id}>
            <PoseImage key={pose.id} pose={pose} scale={getScale(0.4, dimensions)} />
            {debugEnabled ? <p>{pose.id}</p> : null}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AllPoses;
