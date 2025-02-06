import Image from "next/image";
import Link from "next/link";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  href: string;
}

const ProjectCard = ({ src, title, description, href }: Props) => {  
  return (
    <Link href={href} passHref>
      <div className="relative w-100 h-110 overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] cursor-pointer">
        
        <Image
          src={src}
          alt={title}
          width={1000}
          height={1000}
          className="w-full object-contain"
        />
        <div className="relative p-4">
          <h1 className="text-2xl font-semibold text-white text-center">{title}</h1>
          <p className="text-gray-300 text-center mt-4 ">{description}</p>
          </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
