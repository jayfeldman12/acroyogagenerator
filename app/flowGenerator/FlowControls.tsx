import './FlowControls.css';

interface FlowControlProps {
  regenerate: () => void;
  next: () => void;
  clear: () => void;
}

const FlowControls: React.FC<FlowControlProps> = ({ clear, regenerate, next }) => {
  return (
    <div>
      <button className="FlowControl" id="Regenerate" onClick={regenerate}>
        Change Last Pose
      </button>
      <button className="FlowControl" id="Next" onClick={next}>
        Get Next Pose
      </button>
      <br />
      <br />
      <div>
        <button className="FlowControl" id="Next" onClick={clear}>
          Clear all
        </button>
      </div>
    </div>
  );
};

export default FlowControls;
