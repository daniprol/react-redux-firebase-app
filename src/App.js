import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/NavBar';
import Dashboard from './components/dashboard/Dashboard';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <Switch> 
        <Route path='/' component={Dashboard} />
      </Switch>
    </div>
    </BrowserRouter>
  );
}
 
// Switch makes sure that only one route is loaded at a time
export default App;
