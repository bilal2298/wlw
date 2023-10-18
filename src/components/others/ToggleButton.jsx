import React, { useState } from 'react';
const ToggleButton = () => {
  const [isToggled, setToggled] = useState(false);
  const handleToggle = () => {
    setToggled(!isToggled);
  };
  return (
    <div className="flex items-center space-x-4 cursor-pointer">
      <div
        className={`w-10 h-6 rounded-full p-1 ${
          isToggled ? 'bg-[#4FD1C5]' : 'bg-gray-300'}`}
        onClick={handleToggle}
      >
        <div
          className={`w-4 h-4 bg-white rounded-full shadow-md transform ${
            isToggled ? 'translate-x-full' : 'translate-x-0'
          } transition-transform`}
        ></div>
      </div>
      <div className="text-sm">Remember Me</div>
    </div>
  );
};
export default ToggleButton;