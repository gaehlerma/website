import logo from './logo.svg';
import './App.css';
// import React from 'react';

import React, { useState, useRef} from "react";
import styled from "styled-components";
import TextField from '@mui/material/TextField';
import { DateField } from '@mui/x-date-pickers';

function MyTable() {
  const initState = [
    { id: 1, name: "bread", quantitiy: 50, location: "cupboard" },
    { id: 2, name: "milk", quantitiy: 20, location: "fridge" },
    { id: 3, name: "water", quantitiy: 10, location: "fridge" }
  ];
  const [state, setState] = React.useState(initState);

  return (
    <table>
      <tr key={"header"}>
        {Object.keys(state[0]).map((key) => (
          <th>{key}</th>
        ))}
      </tr>
      {state.map((item) => (
        <tr key={item.id}>
          {Object.values(item).map((val) => (
            <td>{val}</td>
          ))}
        </tr>
      ))}
    </table>
  );
}

const people = [
  {
    name: 'James',
    age: 31,
  },
  {
    name: 'John',
    age: 45,
  },
  {
    name: 'Paul',
    age: 65,
  },
  {
    name: 'Ringo',
    age: 49,
  },
  {
    name: 'George',
    age: 34,
  }
];



const theme = {
  blue: {
    default: "#3f51b5",
    hover: "#283593"
  },
  pink: {
    default: "#e91e63",
    hover: "#ad1457"
  }
};

const Button = styled.button`
  background-color: ${(props) => theme[props.theme].default};
  color: white;
  padding: 5px 15px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  margin: 10px 0px;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  &:hover {
    background-color: ${(props) => theme[props.theme].hover};
  }
  &:disabled {
    cursor: default;
    opacity: 0.7;
  }
`;

Button.defaultProps = {
  theme: "blue"
};

function clickMe() {
  alert("You clicked me!");
}

const types = ["Cash", "Credit Card", "Bitcoin"];

function TabGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <>
      <div>
        {types.map((type) => (
          <div
          // <Tab
            key={type}
            active={active === type}
            onClick={() => setActive(type)}
          >
            {type}
          </div>
        ))}
      </div>
      <p />
      <p> Your payment selection: {active} </p>
    </>
  );
}

const ButtonToggle = styled(Button)`
  opacity: 0.7;
  ${({ active }) =>
    active &&
    `
    opacity: 1; 
  `}
`;

function ToggleGroup() {
  const [active, setActive] = useState(types[0]);
  return (
    <div>
      {types.map((type) => (
        <ButtonToggle active={active === type} onClick={() => setActive(type)}>
          {type}
        </ButtonToggle>
      ))}
    </div>
  );
}


function MyButton() {
  const [value, setValue] = React.useState('fruit');
    const handleChange = (event) => {
      setValue(event.target.value);
    };
  return (
    <div>
      <select value={value} onChange={handleChange}>
        <option value="fruit">Fruit</option>
        <option value="vegetable">Vegetable</option>
        <option value="meat">Meat</option>
      </select>
    <p>We eat {value}!</p>
    </div>
  );
}


function App() {
  const [message, setMessage] = useState('');

  const handleKeyDown = event => {
    console.log(event.key);

    if (event.key === 'Enter') {
      event.preventDefault();

      // 👇️ access input value from state
      console.log(message);

      // 👇️ access input value from event object
      // console.log(event.target.value)

      console.log('User pressed Enter ✅');
    }
  };
  return (
    <div className="App">
      <h1>Altersheime in Zürich</h1>
      <body>Diese Webseite beinhaltet eine Liste von Altersheimen, welche man nach verschiedenen Kriterien filtern kann.</body>
      {/* ReactDOM.render(<MyTable />, document.getElementById("target")); */}
      {/* ReactDOM.render(<MyTable />, document.getElementById("target")); */}
      {/* const root = ReactDOM.createRoot(<MyTable />); */}
      root.render(<MyTable />);
      
      <div>
        {people.filter(person => person.age < 60 && person.name.includes("J")).map(filteredPerson => (
          <li>
            {filteredPerson.name }, age = {filteredPerson.age}
          </li>
        ))}
      </div>

      <div>
        <Button onClick={clickMe}>Button</Button>
      </div>

      <div>
        <MyButton />
      </div>

      <TextField id="standard-basic" label="Standard" variant="standard" />

      <div>
        <input
          type="text"
          id="message"
          name="message"
          value={message}
          onChange={event => setMessage(event.target.value)}
          onKeyDown={handleKeyDown}
          />
      </div>

      <h2>Message: {message}</h2>


      {/* <div>
        <TextField valueLink={this.linkState('textFieldValue')}/>
      </div> */}

      {/* value={this.state.textFieldValue} onChange={this._handleTextFieldChange} */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
