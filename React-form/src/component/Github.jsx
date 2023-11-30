import React from "react";
import { githubLOGO } from "../assets";
const Github = () => {
  return (
    <div className="">
      <a href="https://github.com/beenow011/react_form">
        <img
          src={githubLOGO}
          alt=""
          width={150}
          height={250}
          className="rounded-full absolute md:right-[50%] right-0 top-0 md:top-36 shadow-xl shadow-black hover:shadow-purple-950 bg-black w-24 p-3 h-24"
        />
      </a>
    </div>
  );
};

export default Github;
