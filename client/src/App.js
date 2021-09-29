import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';

const App = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/employee-list" component={EmployeeList} />
        </Switch>
      </Router>
    </>
  );
};

export default App;
