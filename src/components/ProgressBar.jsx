import { useEffect, useState } from "react";

const ProgressBar = ({ value = 0, onComplete = () => {} }) => {
  const [percent, setPercent] = useState(value);

  useEffect(() => {
    setPercent(Math.min(100, Math.max(value, 0)));

    if (value >= 100) {
      onComplete();
    }
  }, [value]);
  return (
    <div className="progress">
      <span>{percent.toFixed()}%</span>
      <div style={{ width: `${percent}%` }} />
    </div>
  );
};

export default ProgressBar;
