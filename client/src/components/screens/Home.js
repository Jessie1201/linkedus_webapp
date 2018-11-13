import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';

import './Home.css';


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
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              width: '100%',
              height: '60%',
              boxShadow: 'none',
              borderRadius: '30px',
            }}
          />
          <span className="fas fa-compass"/>
        </div>
        <div className='phone-content__wrapper'>
          <CardContent color='blue'/>
          <CardContent color='blue' />
          <CardContent color='blue' /> 
          <CardContent color='blue' /> 
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

export default Home;
