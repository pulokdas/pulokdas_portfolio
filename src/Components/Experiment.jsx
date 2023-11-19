import React from 'react';

const Experiment = () => {
  const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="relative">
        <div className="absolute h-52 w-52 rounded-full bg-gray-500 flex items-center justify-center">
          <span className="text-white">Center</span>
        </div>
        {letters.map((letter, index) => (
          <div
            key={index}
            className="absolute  rounded-full bg-gray-500 flex items-center justify-center"
            style={{
              transform: `rotate(${(index / letters.length) * 360}deg) translateX(70px) rotate(-${(index / letters.length) * 360}deg)`,
            }}
          >
            <span className="text-white">{letter}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Experiment;
