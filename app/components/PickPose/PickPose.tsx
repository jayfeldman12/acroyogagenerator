import { useCallback, useMemo, useState } from 'react';
import { useWindowSizeContext } from '../../context/WindowSizeContext';
import { cleanText } from '../../utils/cleanText';
import { getScale } from '../../utils/scale';
import PoseImage from '../PoseImage';
import SearchBar from '../SearchBar/SearchBar';
import { Pose } from '../models/poses';
import './PickPose.css';

interface PickPoseProps {
  onDismiss: () => void;
  onPressPose: (pose: Pose) => void;
  possiblePoses: Pose[];
  recommendedPoseIds: number[];
}

const PickPose: React.FC<PickPoseProps> = ({
  onPressPose,
  possiblePoses,
  recommendedPoseIds,
  onDismiss,
}) => {
  const dimensions = useWindowSizeContext();
  const [searchText, setSearchText] = useState('');

  const { recommendedPoses, otherPoses } = useMemo(() => {
    return possiblePoses.reduce(
      (acc, curr) => {
        if (recommendedPoseIds.includes(curr.id)) {
          acc.recommendedPoses.push(curr);
        } else {
          acc.otherPoses.push(curr);
        }
        return acc;
      },
      { recommendedPoses: [] as Pose[], otherPoses: [] as Pose[] }
    );
  }, [possiblePoses, recommendedPoseIds]);

  const cleanSearchText = useMemo(() => cleanText(searchText), [searchText]);

  const filterOnText = useCallback(
    (pose: Pose) => {
      return cleanText(pose.name).includes(cleanSearchText);
    },
    [cleanSearchText]
  );

  const { filteredRecommendedPoses, filteredOtherPoses } = useMemo(() => {
    const filteredRecommendedPoses = cleanSearchText
      ? recommendedPoses.filter(filterOnText)
      : recommendedPoses;
    const filteredOtherPoses = cleanSearchText ? otherPoses.filter(filterOnText) : otherPoses;
    return { filteredRecommendedPoses, filteredOtherPoses };
  }, [cleanSearchText, filterOnText, otherPoses, recommendedPoses]);

  return (
    <div className="Container">
      <div className="SearchBarContainer">
        <SearchBar searchText={searchText} onChangeSearchText={setSearchText} />
      </div>
      <div className="ButtonContainer">
        <button className="Button" id="CloseButton" onClick={onDismiss}>
          Close
        </button>
      </div>
      {filteredRecommendedPoses.length ? (
        <div>
          <div className="SectionLabelContainer">
            <p className="SectionLabel">Recommended poses</p>
          </div>
          <div className="PoseContainer">
            {filteredRecommendedPoses.map((pose) => (
              <span onClick={() => onPressPose(pose)} key={pose.id}>
                <PoseImage key={pose.id} pose={pose} scale={getScale(0.4, dimensions)} />
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {filteredOtherPoses.length ? (
        <div>
          <div className="SectionLabelContainer">
            <p className="SectionLabel">Other Poses</p>
          </div>
          <div className="PoseContainer">
            {filteredOtherPoses.map((pose) => (
              <span key={pose.id} onClick={() => onPressPose(pose)}>
                <PoseImage key={pose.id} pose={pose} scale={getScale(0.4, dimensions)} />
              </span>
            ))}
          </div>
        </div>
      ) : null}

      {filteredRecommendedPoses.length === 0 && filteredOtherPoses.length === 0 ? (
        <div className="EmptySearch">
          <p>No matching poses!</p>
        </div>
      ) : null}
    </div>
  );
};

export default PickPose;
