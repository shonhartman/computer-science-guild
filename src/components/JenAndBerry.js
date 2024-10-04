import React, { useState, useEffect } from 'react';
import studentData from '../data/BIRTHDAY_DATA.json';

const JenAndBerry = () => {
  const [students, setStudents] = useState([]);
  const [reorderedList, setReorderedList] = useState([]);

  useEffect(() => {
    // Extract names from the BIRTHDAY_DATA and set them as students
    const names = studentData.map(student => student.first_name);
    setStudents(names);
  }, []);

  // TODO: Implement the reordering algorithm
  const reorderStudents = (students) => {
    // We need to split the array into two halves
    // What method can we use to do this?

    // TODO: Get the first half of the array

    // TODO: Get the second half of the array and reverse it
    // Hint: There's an array method that can reverse an array in place

    // TODO: Combine the first half and the reversed second half
    // What's an efficient way to combine two arrays?

    // Return the reordered array
    return []; // Replace this with the actual reordered array
  };

  const handleReorder = () => {
    // TODO: Call the reorderStudents function and update the state
    // How can we update the state with the new reordered list?
  };

  return (
    <div>
      <h2>Reorder Students for Ice Cream Truck</h2>
      <p>
        Jen and Berry are serving ice cream to the students. Berry's group (the second half) will line up in reverse.
      </p>
      
      <h3>Original List:</h3>
      <p>{students.join(' -> ')}</p>

      <button onClick={handleReorder}>Reorder Students</button>

      {reorderedList.length > 0 && (
        <>
          <h3>Reordered List:</h3>
          <p>{reorderedList.join(' -> ')}</p>
        </>
      )}
    </div>
  );
};

export default JenAndBerry;
