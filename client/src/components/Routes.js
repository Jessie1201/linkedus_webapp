import React from 'react';
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Route from 'react-router-dom/Route';

import BottomNav from './Bottomnav.js';
import './Bottomnav.css';

import Home from "./screens/Home.js";
import Profile from "./screens/Profile.js";
import Login from "./screens/Login.js";
import Favorites from "./screens/Favorites.js";
import Messages from "./screens/Messages.js";


class Routes extends React.Component {
  render() {
    return (
      <Router>
      	<div>
	      	<Switch>

		        <Route path='/' exact render={
		          () => {
		            return ( <Home /> )
		          }
		        } />

		        <Route path='/favorites' exact render={
		          () => {
		            return ( <Favorites /> )
		          }
		        } />

		        <Route path='/messages' exact render={
		          () => {
		            return ( <Messages /> )
		          }
		        } />

		        <Route path='/profile' exact render={
		          () => {
		            return ( <Profile /> )
		          }
		        } />

		        <Route path='/login' exact render={
		          () => {
		            return ( <Login /> )
		          }
		        } />

		    </Switch>

		    <div className='bottom_nav'>
		        <BottomNav />
		    </div>

		 </div>
      </Router>
    );
  }
}

export default Routes;