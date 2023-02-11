import logo from './logo.svg';
import './App.css';
import { Amplify } from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
//import { withAuthenticator, Divider } from "@aws-amplify/ui-react"
//import { DataStore } from '@aws-amplify/datastore';
//import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsConfig from './aws-exports';
//import {NavBar, CarRentalCardCollection, AddCar} from "./ui-components";
//import { useState } from 'react';
//import { RentalCar } from './models';

Amplify.configure(awsConfig)


function App() {
  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
