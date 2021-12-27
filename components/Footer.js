import React, { useEffect, useState } from "react";
import { Fade } from "react-reveal";

const Footer = () => {
  return (
    <div className="flex justify-evenly max-w-full p-4 space-x-8 bg-bg-light w-full bottom-0">
      <Fade>
        <div className="flex justify-start ">
          <p className="text-purple-500 text-sm">
            <img src="/img/logo.gif" className="w-4 pb-2 inline" /> Banana
            Barrel <br />
            <span className="text-xs">
              by{" "}
              <a
                className="text-purple-500 animate-pulse"
                target="_blank"
                href="https://twitter.com/rarestpepi"
              >
                RarestPepi
              </a>
            </span>
          </p>
        </div>
        <div className="flex justify-end flex-row flex-wrap text-right space-x-4"></div>
      </Fade>
    </div>
  );
};

export default Footer;
