import PoseGenerator from './PoseGenerator';
import { WindowSizeContext } from './context/WindowSizeContext';

const Page = () => {
  return (
    <WindowSizeContext>
      <PoseGenerator />
    </WindowSizeContext>
  );
};

export default Page;
