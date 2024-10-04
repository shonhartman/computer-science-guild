import React, { useState } from 'react';
import planetData from '../data/PLANET_DATA.json';


const OracleProblem = () => {
  // TODO: Initialize state variables
  // We need variables for:
  // - The secret planet (a random number between 1 and 1000)
  // - The current guess
  // - The lower bound of our search range
  // - The upper bound of our search range
  // - The number of steps taken
  // - Whether the correct planet has been found

  console.log({planetData});

  // TODO: Implement the binary search algorithm
  const handleGuess = () => {
    // TODO: Calculate the midpoint between the lower and upper bounds

    // TODO: Check if the midpoint is the secret planet
    // If it is, update the state to reflect that we've found it

    // TODO: If the midpoint is lower than the secret planet,
    // update the lower bound to be the midpoint + 1

    // TODO: If the midpoint is higher than the secret planet,
    // update the upper bound to be the midpoint - 1

    // TODO: Update the current guess and increment the step count
  };

  // TODO: Implement a function to reset the search
  const resetSearch = () => {
    // TODO: Reset all state variables to their initial values
    // Don't forget to generate a new random secret planet!
  };

  return (
    <div>
      <h2>Find the Thoul Stone</h2>
      <p>
        Sanos is searching for the Thoul Stone. It resides on a secret planet. The oracles will
        guide Sanos to the correct planet by indicating whether the stone is on a planet with a 
        higher or lower identifier.
      </p>

      {/* TODO: Conditionally render search interface or success message */}
      {/* When the planet is not found, show: */}
      {/* - The current search range */}
      {/* - A button to make a guess */}
      {/* - The current guess (if one has been made) */}
      {/* - The number of steps taken */}

      {/* When the planet is found, show: */}
      {/* - A success message with the planet number and steps taken */}
      {/* - A button to restart the search */}
    </div>
  );
};

export default OracleProblem;
