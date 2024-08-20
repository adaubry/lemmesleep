"use client";

import { useEffect, useRef, useState } from "react";
import lottie from "lottie-web";

interface LottieAnimationProps {
  src: string; // URL of the Lottie JSON file
}

const LottieAnimation: React.FC<LottieAnimationProps> = ({ src }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [animationData, setAnimationData] = useState<any>(null); // Replace `any` with a more specific type if available

  useEffect(() => {
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(src);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Failed to load animation data:", error);
      }
    };

    fetchAnimationData();
  }, [src]);

  useEffect(() => {
    if (containerRef.current && animationData) {
      const animation = lottie.loadAnimation({
        container: containerRef.current,
        renderer: "svg",
        loop: true,
        autoplay: true,
        animationData: animationData,
      });

      return () => {
        animation.destroy(); // Clean up the animation when the component unmounts
      };
    }
  }, [animationData]);

  return <div ref={containerRef} className="h-full w-full max-w-[60rem]" />;
};

export default LottieAnimation;
