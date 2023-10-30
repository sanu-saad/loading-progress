import { useState } from "react";
import ProgressBar from "./components/ProgressBar";
import { useEffect } from "react";

const App = () => {
  const [value, setValue] = useState(0);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setInterval(() => {
      setValue((val) => val + 1);
    }, 100);
  }, []);
  return (
    <div className="app">
      <h3>Progress Bar</h3>
      <ProgressBar value={value} onComplete={() => setSuccess(true)} />
      <span>{success ? "Complete" : "Loading......"}</span>
    </div>
  );
};

export default App;
