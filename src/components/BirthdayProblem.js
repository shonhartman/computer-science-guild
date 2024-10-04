import React, { useState, useEffect } from 'react';
import studentData from '../data/BIRTHDAY_DATA.json';

function BirthdayProblem() {
  const [students, setStudents] = useState([]);
  const [matchingNames, setMatchingNames] = useState([]);
  const [matchingBirthdate, setMatchingBirthdate] = useState('');
  const [executionTime, setExecutionTime] = useState(null);
  const [operationCount, setOperationCount] = useState(0);
  const [heapSize, setHeapSize] = useState(0);

  useEffect(() => {
    setStudents(studentData);
  }, []);

  const calculateBirthdays = () => {
    const startTime = performance.now();
    let operations = 0;

    const birthdayMap = new Map();
    let matchFound = false;
    let heapSize = 0;

    for (const { birthdate, name } of students) {
      operations++; // Counting loop iteration

      const trimmedBirthday = birthdate.slice(0, 5);
      operations++; // slice operation

      if (birthdayMap.has(trimmedBirthday)) {
        operations++; // Map lookup
        matchFound = true;
        setMatchingNames([birthdayMap.get(trimmedBirthday), name]);
        setMatchingBirthdate(trimmedBirthday);
        break;
      }
      
      operations += 2; // Map lookup and insertion
      birthdayMap.set(trimmedBirthday, name);
      
      // Calculate heap size (unchanged)
      heapSize += 8 + (2 * trimmedBirthday.length);
    }

    const endTime = performance.now();
    const execTime = endTime - startTime;

    console.log(`Heap size: ${heapSize} bytes`);
    setExecutionTime(execTime.toFixed(2));
    setOperationCount(operations);
    setHeapSize(heapSize);

    if (!matchFound) {
      setMatchingNames([]);
      setMatchingBirthdate('');
    }
  };

  return (
    <div>
      <h2>Birthday Problem</h2>
      <p>Number of Students: {students.length}</p>
      <button onClick={calculateBirthdays}>Run Algorithm</button>
      {executionTime !== null && (
        <div>
          <p>Execution time: {executionTime}ms</p>
          <p>Operation count: {operationCount}</p>
          <p>Heap size: {heapSize} bytes</p>
          {matchingNames.length > 0 && matchingBirthdate ? (
            <p>Match found: {matchingBirthdate} ({matchingNames.join(' and ')})</p>
          ) : (
            <p>No match found</p>
          )}
        </div>
      )}
    </div>
  );
}

export default BirthdayProblem;
