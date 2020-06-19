import React, { useReducer, useEffect } from "react";
import JoyRide from "react-joyride";

const TOUR_STEPS = [
  {
    target: ".tour-logo",
    content: "This is our tour logo.",
    disableBeacon: true,
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

// Tour component
const Tour = () => {
  return (
    <>
      <JoyRide
        steps={TOUR_STEPS}
        continuous={true}
        showSkipButton={true}
        styles={{
          tooltipContainer: {
            textAlign: "left"
          },
          buttonNext: {
            backgroundColor: "green"
          },
          buttonBack: {
            marginRight: 10
          }
        }}
        locale={{
          last: "End tour",
          skip: "Close tour"
        }}
      />
    </>
  );
};

export default Tour;