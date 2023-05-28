import ReactSwitch from 'react-switch';

interface ToggleProps {
  value: boolean;
  setValue: (newValue: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ value, setValue }) => {
  return <ReactSwitch checked={value} onChange={setValue} />;
};

export default Toggle;
