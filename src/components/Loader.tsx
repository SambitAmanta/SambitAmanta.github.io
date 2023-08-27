import React, { useEffect, useState } from "react";
import Logo from "./Logo";
import { AnimatePresence, motion } from "framer-motion";

function Loader({ isLoading, setIsLoading }: any) {
  useEffect(() => {
    setTimeout(() => {
      setIsLoading();
    }, 1900);
  }, [setIsLoading]);
  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="loader"
          exit={{ scale: 0 }}
          key="motiondivleave"
          transition={{
            duration: 0.45,
            ease: "easeInOut",
          }}
        >
          <motion.svg
            id="logo"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
          >
            <title>Logo</title>
            <g>
              <g id="K" transform="translate(35.000000, 35.000000)">
                <motion.path
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{
                    duration: 1,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                  exit={{
                    scale: 2,
                  }}
                  fill="currentColor"
                  d="M 17.238281 12.957031 L 14.714844 12.398438 C 11.996094 11.796875 10.953125 10.890625 10.953125 9.46875 C 10.953125 7.667969 12.339844 6.441406 14.984375 6.441406 C 17.191406 6.441406 18.632812 7.46875 19.148438 8.945312 C 19.1875 9.050781 19.21875 9.164062 19.246094 9.277344 C 19.269531 9.382812 19.289062 9.480469 19.300781 9.5625 C 19.34375 9.804688 19.554688 9.972656 19.796875 9.972656 L 23.050781 9.972656 C 23.191406 9.972656 23.324219 9.917969 23.417969 9.8125 C 23.515625 9.710938 23.5625 9.574219 23.550781 9.433594 C 23.273438 5.53125 19.875 2.910156 15.097656 2.910156 C 9.90625 2.910156 6.417969 5.679688 6.417969 9.804688 C 6.417969 12.957031 8.808594 14.859375 12.789062 15.726562 L 15.625 16.355469 C 18.4375 16.984375 19.523438 17.878906 19.523438 19.402344 C 19.523438 21.175781 17.769531 22.589844 15.1875 22.589844 C 12.816406 22.589844 11.054688 21.59375 10.441406 20.136719 C 10.335938 19.875 10.265625 19.632812 10.21875 19.445312 C 10.160156 19.21875 9.960938 19.058594 9.726562 19.058594 L 6.417969 19.058594 C 6.277344 19.058594 6.140625 19.117188 6.046875 19.222656 C 5.949219 19.324219 5.902344 19.464844 5.914062 19.605469 C 6.246094 23.566406 9.789062 26.125 14.945312 26.125 C 20.566406 26.125 24.058594 23.417969 24.058594 19.058594 C 24.058594 15.832031 21.6875 13.921875 17.238281 12.957031 Z M 17.238281 12.957031 "
                />
              </g>
              <motion.path
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 1,
                  ease: "easeInOut",
                }}
                exit={{
                  scale: 2,
                }}
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M 50, 5
          L 11, 27
          L 11, 72
          L 50, 95
          L 89, 73
          L 89, 28 z"
              />
            </g>
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Loader;
