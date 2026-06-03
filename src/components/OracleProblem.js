import React from 'react';
import planetData from '../data/PLANET_DATA.json';

const OracleProblem = () => {
  // TODO: Initialize state and implement binary search (see commented stubs in git history)

  console.log({ planetData });

  return (
    <div>
      <h2>Find the Thoul Stone</h2>
      <p>
        Sanos is searching for the Thoul Stone. It resides on a secret planet. The oracles will
        guide Sanos to the correct planet by indicating whether the stone is on a planet with a
        higher or lower identifier.
      </p>

      {/* TODO: Conditionally render search interface or success message */}
    </div>
  );
};

export default OracleProblem;
