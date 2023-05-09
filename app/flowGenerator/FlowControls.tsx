import { useRef } from 'react';
import './FlowControls.css';

interface FlowControlProps {
  regenerate: () => void;
  next: () => void;
  clear: () => void;
}

const FlowControls: React.FC<FlowControlProps> = ({ clear, regenerate, next }) => {
  const clearRef = useRef<HTMLButtonElement>(null);

  const onNextPosePress = () => {
    next();
    window.requestAnimationFrame(() => {
      // Pressing this will sometimes make enough content so the new pose is not visible,
      // so after next render, scroll to bottom button
      clearRef.current?.scrollIntoView({ behavior: 'smooth' });
    });
  };

  return (
    <div>
      <button className="FlowControl" id="Regenerate" onClick={regenerate}>
        Change Last Pose
      </button>
      <button className="FlowControl" id="Next" onClick={onNextPosePress}>
        Get Next Pose
      </button>
      <br />
      <br />
      <div>
        <button className="FlowControl" id="Next" onClick={clear} ref={clearRef}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default FlowControls;
