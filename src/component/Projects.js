import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div className="bg-yellow-100">
      <div className="  grid grid-cols-2 gap-x-4 items-center gap-y-40  ">
        {/* First Project --------------------------------------------------------------------- */}
        <div>
          <div className="  img-container img1 "></div>
          <div className="flex">
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              LIVE SITE LINK
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className=" mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB CLIENT SIDE
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB SERVER SIDE
            </a>
          </div>
        </div>
        <div>
          <div className="pl-12">
            <h1 className="text-2xl font-bold">Vaccuology</h1>
            <p className="text-lg font-light py-2">
              Single Nice Product, Robotic Vacuume Selling Website, Build with
              <span className="font-normal">
                React, Express JS, MongoDB, Node JS
              </span>
              and <span> Firebase </span> used for Authentication.
            </p>
            <ul className="list-disc list-outside pl-5">
              <li>
                User Can Choose many type of vacuume from the featured Product
                or from the shop.
              </li>

              <li>User can check details of a particular Vacuuume. </li>
              <li>
                User Can Creat Personal Account by sign In with Email/Password
                or Google.
              </li>

              <li>User can Order any desired Vacuume .</li>
              <li>
                It Has a personailized Dashbord From Where user can manage
                orders.
              </li>
              <li>
                It also has an admin Dashbord , where admin can add or remove
                packages.
              </li>
              <li>Admin can approve or delete any pending orders .</li>
            </ul>
          </div>
        </div>
        {/* Secound Project --------------------------------------------------------------------- */}
        <div>
          <div className="pl-12">
            <h1 className="text-2xl font-bold">TREK KING </h1>
            <p className="text-xl font-light py-2">
              This is travel tourism based website Build with
              <span className="font-normal">
                {" "}
                React, Express JS, MongoDB ,Node JS{" "}
              </span>
              and <span> Firebase </span> used for Authentication.
            </p>
            <ul className="list-disc list-inside">
              <li>
                User Can Creat Personal Account by sign In with Email/Password
                or Google.
              </li>
              <li>He/She can browse all the available Trekking Packages. </li>
              <li>
                He/She can check details of a particular Trekking Package.{" "}
              </li>
              <li>User can Order any package.</li>
              <li>
                It Has a personailized Dashbord From Where user can manage
                orders.
              </li>
              <li>
                It also has an admin Dashbord , where admin can add or remove
                packages.
              </li>
              <li>Admin can approve or delete any pending orders .</li>
            </ul>
          </div>
        </div>
        <div>
          <div className="  img-container img2 "></div>
          <div className="flex">
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              LIVE SITE LINK
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className=" mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB CLIENT SIDE
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB SERVER SIDE
            </a>
          </div>
        </div>
        {/* Third Project --------------------------------------------------------------------- */}
        <div>
          <div className="  img-container img3"></div>
          <div className="flex">
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              LIVE SITE LINK
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className=" mr-1 bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB CLIENT SIDE
            </a>
            <a
              href="https://compassionate-swanson-925132.netlify.app/"
              target="_blank"
              className="bg-yellow-400 hover:bg-yellow-500 rounded px-4 py-1 mt-4 cursor-pointer"
            >
              GITHUB SERVER SIDE
            </a>
          </div>
        </div>
        <div>
          <div className="pl-12">
            <h1 className="text-2xl font-bold">HAIR LOSS CLINIC</h1>
            <p className="text-xl font-light py-2">
              This is Health based Clinic website Build with
              <span className="font-normal"> React, React-Router-Dom </span>
              and <span> Firebase </span> used for Authentication.
            </p>
            <ul className="list-disc list-inside">
              <li>
                User Can Creat Personal Account by sign In with Email/Password
                or Google.
              </li>
              <li>He/She can browse all the available Tratment Solutions. </li>
              <li>
                He/She can check details of a particular Treatment Solution.{" "}
              </li>
              <li>User can Order any package.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
