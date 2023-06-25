import React, { useState } from 'react';

const App = () => {
  const [trains, setTrains] = useState([]);

  const fetchTrainSchedule = async () => {
    try {
      const response = await fetch('/api/trainschedule');
      const data = await response.json();
      setTrains(data);
    } catch (error) {
      console.log('Error fetching train schedule:', error);
    }
  };

  // Render the train schedule table
  const renderTrainSchedule = () => {
    return (
      <table>
        <thead>
          <tr>
            <th>company Number</th>
            <th>ownerName</th>
            <th>rollno</th>
            <th>ownerEmail</th>
            <th>accessCode</th>
          </tr>
        </thead>
        <tbody>
          {trains.map(train => (
            <tr key={train.id}>
              <td>{train.companynumber}</td>
              <td>{train.ownerName}</td>
              <td>{train.rollNo}</td>
              <td>{train.ownerEmail}</td>
              <td>{train.accesscode}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div>
      <h1>Train Schedule</h1>
      <button onClick={fetchTrainSchedule}>Load Schedule</button>
      {trains.length > 0 ? renderTrainSchedule() : null}
    </div>
  );
};

export default App;