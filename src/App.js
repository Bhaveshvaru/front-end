import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import form from './components/form';
import message from './components/message';


function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={form} exact />
        <Route path="/message" component={message} />
      </Switch>
    </Router>
  );
}

export default App;
