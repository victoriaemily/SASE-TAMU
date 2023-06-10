import React from 'react';

interface Image {
  link: string;
  alt: string;
  path: string;
}

interface LogoList {
  images: Image[];
}


const LogoList: React.FC<LogoList> = ({ images }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {images.map((image: Image, index: number) => (
        <a href={image.link} key={index}>
        <img
          src={image.path}
          alt={image.alt}
          className="h-36 p-4"
        />
        </a>
      ))}
    </div>
  );
};

export default LogoList;
