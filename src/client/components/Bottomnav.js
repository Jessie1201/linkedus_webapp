import React from 'react';
import './Bottomnav.css';

// for navigation
import { Link } from 'react-router-dom';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Messages from '@material-ui/icons/Message';
import HomeRounded from '@material-ui/icons/HomeRounded';


class BottomNav extends React.Component {
  state = {
    value: 'home',
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
    	<div>

	      <BottomNavigation
	        value={value}
	        onChange={this.handleChange}
	        showLabels
	      >
	        <BottomNavigationAction label="Favorites" value="favorites" icon={<FavoriteIcon />} component={Link} to={'/favorites'} />
	        <BottomNavigationAction label="Home" value="home" icon={<HomeRounded />} component={Link} to={'/'} />
	        <BottomNavigationAction label="Messages" value="messages" icon={<Messages />} component={Link} to={'/messages'} />
	      </BottomNavigation>

	    </div>

    );
  }
}

export default BottomNav;