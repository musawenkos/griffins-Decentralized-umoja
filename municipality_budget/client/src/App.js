//import './App.css';
import React from "react";
import GetStarted from "./components/get-started";
import {AppContextProvider} from './state_management/AppContext'

function App() {
  
  return (
    <div className="App">
      <AppContextProvider>
        <GetStarted />
      </AppContextProvider>
    </div>
  );
}

export default App;
