import React from 'react';
import './app.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
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

componentDidMount() {
  axios.get('https://dog.ceo/api/breeds/image/random')
  .then(response => {
    console.log(response.data);
  })
  .catch(error => {
    console.log(error);
  });
}

export default App;
