import React from 'react';
import './Card.css';


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
      <div>
        <div className='inner-content'>
          <div className='inner-content-wrapper'>
            <div className='card-content__line inner-content__title'>Areas of Interest</div>
            <div className='card-content__line inner-content__details'>data visualization, 3D modeling, smart city, interaction design</div>
          </div>
          <div className='inner-content-wrapper'>
            <div className='card-content__line inner-content__title'>Major Skills</div>
            <div className='card-content__line inner-content__details'>Javascript, UX, WebGL</div>
          </div>
          <div className='inner-content-wrapper'>
            <div className='card-content__line inner-content__title'>Previous Companies</div>
            <div className='card-content__line inner-content__details'>Company A, Comany B</div>
          </div>
        </div>
        <span className='fas fa-caret-up fa-lg arrow-up' />
      </div>
    )
    
  }
  
  render() {
    const className = this.state.isActive ? 'active' : '';
    return (
      <div 
          className={`card-content ${className}`}
          onClick={() => this.setState({isActive: !this.state.isActive})}
        >
        <div className='card-content__main'>
          <div className='card-content__circle'></div>
          <div className='card-content__line-wrapper'>
            <div className='card-content__line card-content__line--name'>Jiaqi ZHENG</div>
            <div className='card-content__line card-content__line--sub'>InfoVis Developer & Designer</div>
            <div className='card-content__line card-content__line--sub'>KTH Royal Institute of Technoloty</div>
          </div>
          <span className='fas fa-caret-down fa-lg arrow-down' />
        </div>
        {this.generateInnerContent()}
      </div>
    );
  }
}

export default CardContent;