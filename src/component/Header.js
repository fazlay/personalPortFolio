import React from "react";

function Header() {
  return (
    <div className="grid grid-cols-7 gap-4 py-2 ">
      <div>
        <a href="#">
          <h1 className="font-bold text-2xl font-topHeading">Fazlay Rabbi</h1>
        </a>
      </div>
      <div></div>
      <div></div>
      <div></div>
      <div>
        <a href="#">
          <h1 className="font-bold text-center hover:bg-black hover:text-white">
            HOME
          </h1>
        </a>
      </div>
      <div>
        <a href="#">
          <h1 className="font-bold text-center hover:bg-black hover:text-white">
            PROJECTS
          </h1>
        </a>
      </div>
      <div>
        <a href="contact">
          <h1 className="font-bold text-center hover:bg-black hover:text-white">
            CONTACT ME
          </h1>
        </a>
      </div>
    </div>
  );
}

export default Header;
