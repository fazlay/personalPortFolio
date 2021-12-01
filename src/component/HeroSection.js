import React from "react";
import hero from "./../images/heroPicture.png";
import ReactLogo from "./ReactLogo";
import MongoLogo from "./MongoLogo";
import NodeLogo from "./NodeLogo";
import "./../App.css";

const HeroSection = () => {
  return (
    <div className=" grid grid-cols-1  md:grid-cols-2 gap-4 items-center  h-screen ">
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
            href="https://doc-00-9k-prod-00-apps-viewer.googleusercontent.com/viewer2/prod-00/pdf/qj303hqev9ug20cfs0k2suf0cocemhgh/mfnqr9n1gc0qg7b5eo90jmpt11lf107v/1638213375000/3/*/APznzaa2tcCmIj_o1vHimy5jCKui1oRBN_4V8NmZY3VW4KUS80UurLznpKn6DGXQy0mUY7TNbioHzEwOBTwoNvFPVa80B56ziyUzwkCAFNcauPrftm1jtV9nMYzqboycF7iRCNcECRRYvU6YUOcX0RQt80XoZXzwhfXaMqdwpq_iZdK9azftBNgLsMMvF5chw0lAIA9nEChFlSQgnwdeKm5cArhFPgsRrfSQKgOHPlAAPODcyGabMCNZaiRd9rk-rEOk-fT4XbSSQ9B8GVtSLmoPLRFrczBqzZ-tXaZKLVaQ_d0j22FxZ-U_vdS3UWO5tk8gSgFAEwx55BQS5Q4QJUp6p-hmggz0ivO3ggL3RFkEm3IoQ4b-j4lkN3paZ4iak6EaDPKxX8tN"
          >
            DOWNLOAD MY CV
          </a>
        </div>
      </div>
      <div className="md:flex flex-wrap hidden">
        <img
          src="https://i.ibb.co/1rVWgPk/Photo-Funia-1638380218.png"
          alt="my image"
          className="myImage"
        />
        {/* <ReactLogo></ReactLogo>
        <MongoLogo></MongoLogo>
        <NodeLogo></NodeLogo> */}
      </div>
    </div>
  );
};

export default HeroSection;
