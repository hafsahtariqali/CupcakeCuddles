import React from "react";

const ScrollingBanner = ({ text, className }) => {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className="inline-block animate-scroll">
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
        <span className="mr-10">{text}</span>
      </div>
    </div>
  );
};

export default ScrollingBanner;
