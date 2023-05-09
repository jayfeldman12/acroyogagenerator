import { useWindowSizeContext } from '../context/WindowSizeContext';
import { getScaledDimensions } from '../utils/getScaledDimensions';
import { defaultPoseHeight, defaultPoseWidth } from '../utils/poses';

interface PoseImageProps {
  src: string;
  scale?: number;
}

const PoseImage: React.FC<PoseImageProps> = ({ src, scale = 1 }) => {
  const { windowWidth } = useWindowSizeContext();

  const { width: poseWidth, height: poseHeight } = getScaledDimensions(
    defaultPoseWidth * scale,
    defaultPoseHeight * scale,
    windowWidth
  );
  return <img src={src} alt="Pose" style={{ width: poseWidth, height: poseHeight }} />;
};

export default PoseImage;
