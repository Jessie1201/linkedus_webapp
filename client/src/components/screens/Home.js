import React from 'react';
import './Home.css';

// for navigation
import { BrowserRouter as Router, Link } from "react-router-dom";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Messages from '@material-ui/icons/Message';
import HomeRounded from '@material-ui/icons/HomeRounded';


class Home extends React.Component{

  constructor() {
    super();
    this.state = {
      isActive: false    
    }
  }

  render() {
    return (
      <div className='phone'>
        <div className='phone__header'>
          <Link to="/profile" style={{ color:'white' }}>
            <span className='fa fa-user-circle'/>
          </Link>
          <h3>LinkedUs</h3>
          <span className="fas fa-compass"/>
        </div>
        <div className='phone-content__wrapper'>
          <CardContent color='blue'/>
          <CardContent color='blue' />
          <CardContent color='blue' /> 
          <CardContent color='blue' /> 
        </div>
        <div className='bottom_nav'>
          <BottomNav />
        </div>
      </div>
    );
  }
}



class CardContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      isActive: false    
    }
  }
  
  generateInnerContent() {
    if (!this.state.isActive) {
      return null;
    }
    return (
      <div className='inner-content'>
        <div className='inner-content__square'>
        </div>
      </div>
    )
    
  }
  
  render() {
    const className = this.state.isActive ? 'active' : '';
    return (
      <div 
          className={`phone-content ${className}`}
          onClick={() => this.setState({isActive: !this.state.isActive})}
        >
        <div className={`phone-content__hero ${this.props.color}`}>
        </div>
        <div className='phone-content__footer'>
          <div className='phone-content__circle'></div>
          <div className='phone-content__line-wrapper'>
            <div className='phone-content__line'></div>
            <div className='phone-content__line phone-content__line--two'></div>
          </div>
        </div>
        {this.generateInnerContent()}
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

export default Home;
