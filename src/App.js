import React from 'react';
// import logo from './logo.svg';
import './App.css';
import addUser from "./components/users/addUser";
import {BrowserRouter as Router,Route} from 'react-router-dom';
function App() {
  return (
      <div>
          <Router>
              <Route exact path="/" component={addUser}/>
          </Router>
      </div>
  );
}

export default App;
