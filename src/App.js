import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Redirect, Link } from 'react-router-dom';


import Login from './components/Login';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import Logout from './components/Logout'

function App() {
  return (
    <Router>

      <div className="App">
        <header>
          <h2>Friends Database</h2>
          <Link to="login">Login</Link>
          <Link to="friends">Friends</Link>
          <Link to="friends/add">Add Friends</Link>
          <Link to="friends">Log Out</Link>

        </header>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
          <Redirect to="/"></Redirect>
        </Route>
        <Route exact path="/friends">
          <FriendsList />
        </Route>
        <Route exact path="/friends/add">
          <AddFriend />
        </Route>
      </div>
    </Router>
  );
}

export default App;
