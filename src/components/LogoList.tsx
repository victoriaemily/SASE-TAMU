import React from 'react';

interface LogoProps {
  link: string;
  alt: string;
  path: string;
}

const LogoList: React.FC<LogoProps> = ({ logoPaths }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {logoPaths.map((item, index) => (
        <a href={item.link} key={index}>
        <img
          src={item.path}
          alt={item.alt}
          className="h-36 p-4"
        />
        </a>
      ))}
    </div>
  );
};

export default LogoList;
