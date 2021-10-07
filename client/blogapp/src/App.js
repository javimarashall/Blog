import React from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path = "/" component = {Login} />
      <Route exact path = "/login" compnent = {Login} />
      <Route exact path = "/home" component = {Home} />
    </div>
  );
}

export default App;
