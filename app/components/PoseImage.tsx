import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScaledDimensions } from '../utils/getScaledDimensions';
import { Pose, defaultPoseHeight, defaultPoseWidth, posePathToUrl } from '../utils/poses';

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
