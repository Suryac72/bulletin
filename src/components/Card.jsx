import Image from "next/image";
import React from "react";
import noImage from '../../public/no-image.png';

/**
 * Card component
 * @param {*} param0 
 * @returns 
 */

const Card = ({ heading, date, imageUrl, description }) => {
  return (
    <div className="rounded overflow-hidden shadow-lg p-4 font-montserrat bg-[#F2EFE5]">
      <div className="heading flex justify-between mb-4 md:mb-8 items-center">
        <h2 className="font-bold text-xl md:text-2xl lg:text-xl">
          {heading}
        </h2>
        <p className="text-sm md:text-base lg:text-lg text-gray-400 font-bold-600">
          {date}
        </p>
      </div>

        <div className="aspect-w-16 aspect-h-9 mb-4 md:mb-8 flex justify-center items-center">
          <Image
            className="rounded-md"
            src={imageUrl ? imageUrl : noImage}
            alt="Image"
            width={500}
            height={200}
            priority={true}
          />
        </div>
    
      <div className="description text-base md:text-lg lg:text-xl">
        {description}
      </div>
    </div>
  );
};

export default Card;
