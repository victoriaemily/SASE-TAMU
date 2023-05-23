import React from 'react';

interface CardProps {
  imageSrc: string;
  altText: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ imageSrc, altText, text }) => {
  return (
    <div className="flex flex-col items-center rounded-lg p-4 mb-4 w-100">
      <img src={imageSrc} alt={altText} className="w-20 h-20 mb-4 md:w-32 md:h-auto" />
      <p className="text-gray-800">{text}</p>
    </div>
  );
};

export default Card;


