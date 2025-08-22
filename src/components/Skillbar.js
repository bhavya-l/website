import React, { useEffect, useState } from "react";

interface SkillBarProps {
  skill: string;
  level: number; // percentage (0–100)
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, level }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Trigger animation after mount
    const timer = setTimeout(() => {
      setProgress(level);
    }, 200); // small delay for smoother effect

    return () => clearTimeout(timer);
  }, [level]);

  return (
    <div className="w-full max-w-xl mb-4">
      <p className="text-lg font-semibold mb-2">{skill}</p>
      <div className="w-full bg-white rounded-full h-5 shadow-inner overflow-hidden">
        <div
          className="bg-teal-600 h-5 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
};

export default SkillBar;
