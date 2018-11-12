import React from 'react';
import './Favorites.css';

// for navigation
import { BrowserRouter as Router, Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Messages from '@material-ui/icons/Message';
import HomeRounded from '@material-ui/icons/HomeRounded';


class FavoritesScreen extends React.Component {
  render() {
    return (
    	<div>
    		<span>Favorites Screen</span>
    		<div className='bottom_nav'>
    			<BottomNav />
    		</div>
    	</div>

    );
  }
}


class BottomNav extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        showLabels
      >
        <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} component={Link} to={'/favorites'} />
        <BottomNavigationAction label="Home" icon={<HomeRounded />} component={Link} to={'/'} />
        <BottomNavigationAction label="Messages" icon={<Messages />} component={Link} to={'/messages'} />
      </BottomNavigation>
    );
  }
}

export default FavoritesScreen;