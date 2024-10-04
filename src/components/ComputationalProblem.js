import React, { useState } from 'react';

function ComputationalProblem() {
  const [input, setInput] = useState('');
  const [mapping, setMapping] = useState([]);

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const computeOutput = () => {
    const number = parseInt(input, 10);
    if (!isNaN(number)) {
      // Create a new mapping of input to output
      const output = number * number;
      setMapping([...mapping, { input: number, output }]);
      setInput(''); // Clear input field
    }
  };

  return (
    <div>
      <h2>Illustrating a Computational Problem</h2>
      <p>
        For this example, the computational problem is to map a number (input)
        to its square (output).
      </p>
      <label>
        Input a number:
        <input
          type="number"
          value={input}
          onChange={handleInputChange}
        />
      </label>
      <button onClick={computeOutput}>Compute Output</button>

      <h3>Input to Output Mapping</h3>
      <ul>
        {mapping.map((item, index) => (
          <li key={index}>
            Input: {item.input}, Output: {item.output}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ComputationalProblem;
