import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Route from 'react-router-dom/Route';

import Home from "./Home.js";
import Profile from "./Profile.js";
import Login from "./Login.js";
import Favorites from "./Favorites.js";
import Messages from "./Messages.js";


class Routes extends React.Component {
  render() {
    return (
      <Router>
      	<div>

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

	    </div>
      </Router>
    );
  }
}

export default Routes;