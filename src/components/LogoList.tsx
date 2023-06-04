import React from 'react';

interface LogoProps {
  logoPaths: string[];
}

const LogoList: React.FC<LogoProps> = ({ logoPaths }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {logoPaths.map((path, index) => (
        <img
          key={index}
          src={path}
          alt={`Logo ${index + 1}`}
          className="h-36"
        />
      ))}
    </div>
  );
};

export default LogoList;
