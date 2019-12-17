import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './navbar';
import Properties from './properties';
import AddProperty from './addproperty';

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Properties} />
        <Route exact path="/addproperty" component={AddProperty} />
      </Switch>
    </div>
  );
}

export default App;
