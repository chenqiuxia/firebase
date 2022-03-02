import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as firebase from 'firebase/app';
const firebaseConfig = {
  apiKey: "AIzaSyB0aNdbzCm-h0vHPdsX2SO5YxpexdhGIJc",
  authDomain: "init-project-a3acb.firebaseapp.com",
  projectId: "init-project-a3acb",
  storageBucket: "init-project-a3acb.appspot.com",
  messagingSenderId: "251520211314",
  appId: "1:251520211314:web:193dd500717d488fd2a5eb",
  measurementId: "G-GXK0DKPQ0B"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
