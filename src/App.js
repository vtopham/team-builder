import React, {useState} from 'react';
import './App.css';
import {v4 as uuid} from "uuid"
import Form from "./Form"

function App() {

  const initialTeam = [{
      id: uuid(),
      name: "Victoria",
      email: "topham.victoria@gmail.com",
      role: "powerUser"
  }, {
      id: uuid(),
      name: "Jason",
      email: "idk@gmail.com",
      role: "eater of eggs and bacon"
  }]
  const [teamList, setTeamList] = useState(initialTeam);

  return (
    <div className="App">
      <Form setTeamList = {setTeamList}/>
      <h1> Current Friends </h1>
      {teamList.map((i) => {
        return (
        <div>
          <p>{`Name: ${i.name}`}</p>
          <p>{`Email: ${i.email}`}</p>
          <p>{`Role: ${i.role}`}</p>
        </div>
      )
      })}
    </div>
  );
}

export default App;
