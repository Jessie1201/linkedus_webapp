import React from 'react';
import './Home.css';

class Home extends React.Component{
  
  constructor() {
    super();
    this.state = {
      isActive: false    
    }
  }
  
  generateSidebarContent() {
    if (!this.state.isActive) {
      return null;
    }
    return (
      <div className='sidebar__content-container'>
        <div className='sidebar__circle'>
        </div>
      </div>
    )
  }
  
  generateSidebar() {
    const isActive = this.state.isActive ? 'active' : '';
    return (
      <div className={`sidebar ${isActive}`}>
        {this.generateSidebarContent()}
      </div>
    )
  }
  
  render() {
    const fontAwesomeClass = this.state.isActive ? 'chevron-left' : 'bars';
    return (
      <div className='phone'>
        <div className='phone__header'>
          <span 
            className={`fa fa-${fontAwesomeClass}`} 
            onClick={() => this.setState({isActive: !this.state.isActive})}
          />
          <h3>LinkedUs</h3>
          <span className='fa fa-search' />
        </div>
        <div className='phone-content__wrapper'>
          {this.generateSidebar()}
          <PhoneContent color='blue'/>
          <PhoneContent color='blue'  />
          <PhoneContent color='blue' /> 
          <PhoneContent color='blue' /> 
        </div>
      </div>
    );
  }
}


class PhoneContent extends React.Component{
  
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