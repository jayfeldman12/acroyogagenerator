import { useRef } from 'react';
import './FlowControls.css';

interface FlowControlProps {
  clear: () => void;
  deletePose: () => void;
  next: () => void;
  regenerate: () => void;
  pick: () => void;
}

const FlowControls: React.FC<FlowControlProps> = ({
  clear,
  deletePose,
  regenerate,
  next,
  pick,
}) => {
  const clearRef = useRef<HTMLButtonElement>(null);

  const onNextPosePress = () => {
    window.requestAnimationFrame(() => {
      // Pressing this will sometimes make enough content so the new pose is not visible,
      // so after next render, scroll to bottom button
      clearRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
    next();
  };

  return (
    <div>
      <button className="Button" id="Regenerate" onClick={regenerate}>
        Regenerate Last Pose
      </button>
      <button className="Button" id="Next" onClick={onNextPosePress}>
        Generate Next Pose
      </button>
      <button className="Button" id="Pick" onClick={pick}>
        Pick Next Pose
      </button>
      <br />
      <br />
      <br />
      <div>
        <button className="Button DeleteButton" id="Delete" onClick={deletePose}>
          Delete Current Pose
        </button>
        <button className="Button DeleteButton" id="Clear" onClick={clear} ref={clearRef}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default FlowControls;
