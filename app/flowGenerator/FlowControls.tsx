import './FlowControls.css';

interface FlowControlProps {
  regenerate: () => void;
  next: () => void;
}

const FlowControls: React.FC<FlowControlProps> = ({ regenerate, next }) => {
  return (
    <div>
      <button className="FlowControl" id="Regenerate" onClick={regenerate}>
        Change Last Pose
      </button>
      <button className="FlowControl" id="Next" onClick={next}>
        Get Next Pose
      </button>
    </div>
  );
};

export default FlowControls;
