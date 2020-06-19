import React from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
  {
    target: ".tour-logo",
    content: "This is our tour logo.",
  },
  {
    target: ".tour-cart",
    content:
      "View the carts you add here",
  },
  {
    target: ".tour-contact",
    content: "Contact the developer 😉.",
  },
  {
    target: ".tour-policy",
    content: "We accept returns after 14 days max",
  },

];

const Tour = () => {
  return (
    <>
      <JoyRide steps={TOUR_STEPS} continuous={true} />
    </>
  );
};

export default Tour;