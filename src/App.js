import React, { useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Age Calculator</h1>
      <h2 className="small-text">Enter your date of birth</h2>
      <DateInput />
    </div>
  );
}

function DateInput() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState(null);

  const calculateAge = () => {
    const birthdateTimestamp = Date.parse(birthdate);
    if (!isNaN(birthdateTimestamp)) {
      const now = new Date();
      const birthDate = new Date(birthdateTimestamp);
      const ageDiff = now - birthDate;
      const ageDate = new Date(ageDiff);
      const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
      setAge(calculatedAge);
    } else {
      setAge(null);
    }
  };

  return (
    <center>
    <div>
      <input
        type="date"
        value={birthdate}
        onChange={(e) => setBirthdate(e.target.value)}
      />
      <br></br>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== null && <h2>You are {age} years old</h2>}
    </div>
    </center>
  );
}

export default App;
