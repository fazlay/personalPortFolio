import React from "react";
import "../App.css";

const Projects = () => {
  return (
    <div className="bg-yellow-100">
      <div className="  grid grid-cols-2 gap-x-4 items-center  h-96 gap-y-40  ">
        <div className=" w-full overflow-visible img-container "></div>
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
        <div className=" w-full overflow-visible img-container "></div>
      </div>
    </div>
  );
};

export default Projects;
