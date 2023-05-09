import { useWindowSizeContext } from '../context/WindowSizeContext';
import { Pose, defaultPoseHeight, defaultPoseWidth, posePathToUrl } from '../utils/poses';
import { getScaledDimensions } from '../utils/scale';

interface PoseImageProps {
  pose: Pose;
  scale?: number;
}

const PoseImage: React.FC<PoseImageProps> = ({ pose, scale = 1 }) => {
  const { windowWidth } = useWindowSizeContext();
  const path = posePathToUrl(pose);

  const { width: poseWidth, height: poseHeight } = getScaledDimensions(
    defaultPoseWidth * scale,
    defaultPoseHeight * scale,
    windowWidth
  );
  return <img src={path} alt={pose.name} style={{ width: poseWidth, height: poseHeight }} />;
};

export default PoseImage;
