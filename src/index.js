import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

console.log(ReactDOM.createRoot);
const root = ReactDOM.createRoot(document.querySelector('#root'));
//#peach 를 가져와서 여기다가 App를 render해라
console.log(root);
root.render(
<>
    <App />
</> //반환하는 UI는 하나여야 한다. 아니면 div로 감싸거나. 빈태그로 감싼다.
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

