import React, { useRef } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_72716sm",
        "template_9q258ou",
        form.current,
        "user_bYgWfFHFkKyvzGnEDagVD"
      )
      .then(
        (result) => {
          console.log(result.text);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <>
      <div class="mt-32 overflow-hidden">
        <div class="grid grid-cols-1 md:grid-cols-2">
          <div class="p-6 mr-2 bg-gray-100  sm:rounded-lg">
            <h1 class="text-4xl sm:text-5xl text-gray-800  font-extrabold tracking-tight">
              Get in touch
            </h1>
            <p class="text-normal text-lg sm:text-2xl font-medium text-gray-600  mt-2">
              Fill in the form to start a conversation
            </p>

            <div class="flex items-center mt-8 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <div class="ml-4 text-md tracking-wide font-semibold w-40">
                Dhaka, Bangladesh
              </div>
            </div>

            <div class="flex items-center mt-4 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <div class="ml-4 text-md tracking-wide font-semibold w-40">
                +8801685166697
              </div>
            </div>

            <div class="flex items-center mt-2 text-gray-600 ">
              <svg
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="1.5"
                viewBox="0 0 24 24"
                class="w-8 h-8 text-gray-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="1.5"
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <div class="ml-4 text-md tracking-wide font-semibold w-40">
                rfazlay21@gmail.com
              </div>
            </div>
          </div>

          <form
            ref={form}
            onSubmit={sendEmail}
            class="p-6 flex flex-col justify-center"
          >
            <div class="flex flex-col">
              <label for="name" class="hidden">
                Full Name
              </label>
              <input
                type="name"
                name="user_name"
                id="name"
                placeholder="Full Name"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div class="flex flex-col mt-2">
              <label for="email" class="hidden">
                Email
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="Email"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <div class="flex flex-col mt-2">
              <label for="tel" class="hidden">
                Number
              </label>
              <textarea
                type="message"
                name="message"
                id="message"
                placeholder="Type Your Message"
                class="w-100 mt-2 py-3 px-3 rounded-lg bg-white  border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              value="Send"
              class="md:w-32 bg-indigo-600 hover:bg-blue-dark text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-indigo-500 transition ease-in-out duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
