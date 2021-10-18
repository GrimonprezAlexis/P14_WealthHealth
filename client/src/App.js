import React from 'react';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import { Route, Switch } from 'react-router-dom';
import TableExemple from './components/Table-exemple';

const App = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/employee-list" component={EmployeeList} />
        <Route exact path="/exemple" component={TableExemple} />
      </Switch>
    </>
  );
};

export default App;
