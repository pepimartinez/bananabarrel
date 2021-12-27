import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Zoom, Fade, Flip, Slide } from "react-reveal";
import Router from "next/router";
import BackgroundMagic from "../components/BackgroundMagic";
const MainContent = () => {
  return (
    <div id="Why" className=" ">
      <Fade>
        <div className="flex flex-col justify-center h-screen">
          <h1 className="xl:text-6xl text-4xl font-bold text-white text-center">
            Coming soon...
          </h1>
          <h2 className=" text-center mt-4 text-green-400">Nana Lotto</h2>

          <div className="flex flex-row flex-wrap justify-center"></div>
        </div>
      </Fade>
    </div>
  );
};

export default MainContent;
