import React from "react";
import { SiWakatime } from "react-icons/si";
import {
  RxGithubLogo,
  RxInstagramLogo,
  RxLinkedinLogo,
  RxEnvelopeClosed,
  RxFileText,
} from "react-icons/rx";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[24px]">Comunidad</div>

            <a
              href="https://github.com/AlexRosa16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxGithubLogo />
              <span className="text-[15px] ml-[6px]">Github</span>
            </a>

            <a
              href="https://wakatime.com/@AlexRosa16"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <SiWakatime />
              <span className="text-[15px] ml-[6px]">Wakatime</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[24px]">Redes Sociales</div>

            <a
              href="https://www.instagram.com/alex_rosa16/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxInstagramLogo />
              <span className="text-[15px] ml-[6px]">Instagram</span>
            </a>

            <a
              href="https://linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxLinkedinLogo />
              <span className="text-[15px] ml-[6px]">Linkedin</span>
            </a>
          </div>

          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <div className="font-bold text-[24px]">Sobre mí</div>

            <a
              href="mailto:alexrosainfo@gmail.com"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxEnvelopeClosed />
              <span className="text-[15px] ml-[6px]">alexrosainfo@gmail.com</span>
            </a>

            <a
              href="/CV_RosaGarcia_Alex.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-row items-center my-[15px] cursor-pointer"
            >
              <RxFileText />
              <span className="text-[15px] ml-[6px]">Curriculum</span>
            </a>
          </div>
        </div>

        <div className="mt-[40px] mb-[20px]text-[15px] text-center">
          &copy; Alex Rosa Garcia 2025 Inc.
        </div>
      </div>
    </div>
  );
};

export default Footer;
