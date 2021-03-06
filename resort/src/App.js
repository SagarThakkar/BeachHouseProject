import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import {Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/rooms/:type" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </div>
  );
}

export default App;
