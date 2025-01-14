import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Parent from "./Parent";
import Form1 from "./Form1";
import reportWebVitals from './reportWebVitals';
import Form2 from "./Form2";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Form2/> {/* Render the App component */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
