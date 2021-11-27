import React from "react";

const Projects = () => {
  return (
    <div>
      <div>
        <div class="flex">
          <div class="overflow-hidden rounded-xl relative  ">
            <div class="absolute inset-0 z-10 bg-gradient-to-t from-black via-gray-900 to-transparent"></div>
            <div class="relative cursor-pointer group z-10 px-10 pt-10 ">
              <div class="poster__info align-self-end w-full">
                <div class="h-32"></div>
                <div class="space-y-6 detail_info">
                  <div class="flex flex-col space-y-2 inner">
                    <h3
                      class="text-2xl font-bold text-white"
                      data-unsp-sanitized="clean"
                    >
                      Vaccuology
                    </h3>
                    <div class="mb-0 text-lg text-gray-400">
                      MERN Stack Project
                    </div>
                  </div>

                  <div class="flex flex-col overview">
                    <div class="flex flex-col"></div>
                    <div class="text-xs text-gray-400 mb-2">Features:</div>
                  </div>
                </div>
              </div>
            </div>
            <img
              class="absolute inset-0 transform w-full -translate-y-4"
              src="http://image.tmdb.org/t/p/w342/s1FhMAr91WL8D5DeHOcuBELtiHJ.jpg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
