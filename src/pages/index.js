import React, { useState, useEffect } from "react";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const texts = [
    "Welcome to Yogi's Portfolio Website",
    "But sorry, this website is actually under construction 🙏",
    "Yogi is still figuring out how to build an epic website :D",
    "About to use this technology on this website",
    "See you again when all things are packed up",
    "Yet still, you can keep in touch with Yogi",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animationDirection, setAnimationDirection] = useState(null);

  const handleClick = () => {
    if (currentIndex < texts.length - 1) {
      setAnimationDirection("up"); // Trigger the slide-up animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => prevIndex + 1);
        setAnimationDirection("down"); // Trigger the slide-down animation
      }, 500); // Adjust this delay to match your animation duration
    }
  };

  const renderImageSection = () => {
    if (currentIndex === 3) {
      return (
        <div className="mt-5 text-center justify-between">
          <div className="flex gap-4 items-center justify-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png" alt="Javascript Logo" className="h-8 sm:h-16 sm:mr-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="Typescript Logo" className="h-10 sm:h-16 sm:mr-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png" alt="React Logo" className="h-8 sm:h-16 sm:mr-4" />
            <img src="https://devtop.io/wp-content/uploads/2022/11/Next-JS.png" alt="Next.JS Logo" className="h-8 sm:h-16 sm:mr-4" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="Tailwind CSS Logo" className="h-8 sm:h-16 sm:mr-4" />
          </div>
          <div className="text-[#525252] text-[10px] sm:text-xs block justify-center items-center mt-5 ">JAVASCRIPT | TYPESCRIPT | REACT | NEXT.JS | TAILWINDCSS</div>
        </div>
      );
    }
    return null;
  };

  const renderContactSection = () => {
    if (currentIndex === 5) {
      return (
        <div className="mt-[-260px] sm:mt-[-320px] text-center">
          <div className="flex">
            <a href="https://www.linkedin.com/in/yogiifr/" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png" alt="LinkedIn Logo" className="h-10 mr-4 transition ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.instagram.com/yogiifr" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png" alt="Instagram Logo" className="h-10 mr-4 transition ease-in-out hover:scale-110" />
            </a>
            <a href="https://github.com/yogiifr" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn0.iconfinder.com/data/icons/font-awesome-brands-vol-1/512/github-square-64.png" alt="Github Logo" className="h-10 mr-4 transition ease-in-out hover:scale-110" />
            </a>
            <a href="https://www.behance.net/yogifr" target="_blank" rel="noopener noreferrer">
              <img src="https://cdn3.iconfinder.com/data/icons/social-round-corner/512/behance__social__media-64.png" alt="Behance Logo" className="h-10 mr-4 transition ease-in-out hover:scale-110" />
            </a>
            <a href="mailto:yogiffrr@gmail.com">
              <img src="https://cdn3.iconfinder.com/data/icons/social-rounded-2/72/Email-64.png" alt="Email Logo" className="h-10 transition ease-in-out hover:scale-110" />
            </a>
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-10 bg-white ${inter.className}`}>
      <div className="text-[#525252] text-xs">FRONT END DEVELOPER</div>
      <div className={`text-black text-2xl cursor-pointer transition-transform transform hover:scale-105 animate-${animationDirection}`} onClick={handleClick} onTransitionEnd={() => setAnimationDirection(null)}>
        {texts[currentIndex]}
        {renderImageSection()}
      </div>
      {renderContactSection()}
      <div className="text-[#525252] text-xs">Yogi Fitriadi Rakhim, 2023 ©</div>
    </main>
  );
}
