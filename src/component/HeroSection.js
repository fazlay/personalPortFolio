import React from "react";
import ReactLogo from "./ReactLogo";
import MongoLogo from "./MongoLogo";
import NodeLogo from "./NodeLogo";

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-2 gap-4 items-center  h-screen ">
      <div className="">
        <div>
          <img
            className="pb-4 w-1/3"
            src="https://images.squarespace-cdn.com/content/v1/5952601bff7c50d8ca27a6bf/1516551884111-19L1N3UUC0C2Y6RHOBWC/heythere.png"
            alt=""
          />
          <h1 className="text-2xl font-light">I'm</h1>
          <h1 className="text-left text-8xl font-extrabold font-topHeading">
            Fazlay Rabbi
          </h1>
          <h1 className="text-left pt-2 pb-6  m-1 text-3xl font-light">
            I'm a Web Developer Expertise in MERN Stack
          </h1>

          <a
            className="bg-yellow-700 hover:bg-yellow-900 m-1  py-2 px-4 rounded-md text-white"
            target="_blank"
            href="https://doc-0o-3g-apps-viewer.googleusercontent.com/viewer/secure/pdf/325402bb09nqnr9tq2iptdn4b9m6ve96/l6k13jd6mtmsaq0pdnu4rk5inva1jngv/1638113325000/drive/15091324660412797575/ACFrOgDPWGqClFOyGxA-NO0p-Q5eA7xrdTG6sxES4uNvzZcDQ1HKaNJXEdHOBYuvwhbExlx1JOAAWO0ZxPjl53wEdyUj8djj2Zb8SZPDH8vCGrLBsPMxs1zTgywrXikFNxbmTazCmjmZ9y2464YB?print=true&nonce=j5mo32bdkdljm&user=15091324660412797575&hash=rsrqdrp3anc43rqre3c3a9r5ffekkd16"
          >
            DOWNLOAD MY CV
          </a>
        </div>
      </div>
      <div className="flex flex-wrap">
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <div> {"  "}</div>
        <NodeLogo></NodeLogo>
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <div></div>
        <NodeLogo></NodeLogo>
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <NodeLogo></NodeLogo>
        <div></div>
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <NodeLogo></NodeLogo>
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <NodeLogo></NodeLogo>
        <div></div>
        <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <NodeLogo></NodeLogo>
      </div>
    </div>
  );
};

export default HeroSection;
