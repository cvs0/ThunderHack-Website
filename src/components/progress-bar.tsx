"use client";

import { useEffect, useState } from "react";

const ProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const scrollListener = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scroll = (totalScroll / windowHeight) * 100;
      setScrollProgress(scroll);
    };

    window.addEventListener("scroll", scrollListener);

    return () => {
      window.removeEventListener("scroll", scrollListener);
    };
  }, []);

  return (
    <div
      className="bg-gradient-to-r from-purple-500 to-sky-500 h-1 fixed top-0 left-0 right-0 z-50"
      style={{ width: `${scrollProgress}%` }} // Adjust how you use scrollProgress
    />
  );
};

export default ProgressBar;
