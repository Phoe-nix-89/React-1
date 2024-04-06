import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Person from './Person.js';
import Button from './button.js';
import Header from './Header.js';
import List from './List.js';
const root = ReactDOM.createRoot(document.getElementById('root'));

function red() {
  alert("You just clicked the button");
}

root.render(
  <React.StrictMode>
    {/* <App name="Koustav" /> */}
    {/* <Person name="Koustav" age="21" /> */}
    {/* <Button text="Submit" onClick={red} /> */}
    {/* <Header title="This is Header" /> */}
    <List list1="L1" list2="L2" list3="L3" list4="L4" />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
