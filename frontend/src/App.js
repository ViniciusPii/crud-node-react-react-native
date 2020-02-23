import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './header/Header';
import ListUsers from './pages/list-users/ListUsers';
import CreateUser from './pages/create-user/CreateUser';

function App() {
  return (
    <Router>
      <div>
        <Header></Header>
        <Route path='/' exact component={ListUsers} />
        <Route path='/users' exact component={ListUsers} />
        <Route path='/user/create' exact component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
