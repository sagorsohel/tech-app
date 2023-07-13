import Image from "next/image";
import React from "react";

const SingleSlider = ({ slider }) => {
  return (
    <>
      <div>
        <Image src={slider.bg} height={500} width={10000} alt=""/>
      </div>
    </>
  );
};

export default SingleSlider;
