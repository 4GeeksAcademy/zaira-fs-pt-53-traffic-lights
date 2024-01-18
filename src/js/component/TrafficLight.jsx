import React, { useState, useEffect } from 'react';
import '../../styles/index.css';

const TrafficLight = () => {
  const [color, setColor] = useState(null);

  // useEffect(() => {
  //   // logic for handling light glow effect
  //   // 'color' determines which light should glow
  // }, [color]);

  const handleLightClick = (selectedColor) => {
    setColor(selectedColor);
  };

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === 'red' ? 'glow' : ''}`}
        onClick={() => handleLightClick('red')}
      ></div>
      <div
        className={`light yellow ${color === 'yellow' ? 'glow' : ''}`}
        onClick={() => handleLightClick('yellow')}
      ></div>
      <div
        className={`light green ${color === 'green' ? 'glow' : ''}`}
        onClick={() => handleLightClick('green')}
      ></div>
    </div>
  );
};

export default TrafficLight;
