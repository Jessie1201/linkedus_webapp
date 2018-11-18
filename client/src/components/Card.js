import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.css';


class CardContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      extendActive: false,
      saveActive: false,
    }
  }
  
  generateInnerContent() {
    if (!this.state.extendActive) {
      return null;
    }
    function sayhiClick(e) {
      e.stopPropagation();
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
        <Link to='/chat' className='sayhi_button_link'>
          <button className="sayhi_button" onClick={sayhiClick}>Say Hi!</button>
        </Link>
      </div>
    )
  }

  saveClick(e) {
    e.stopPropagation();
    this.setState({saveActive: !this.state.saveActive});
  }
  
  render() {
    const className = this.state.extendActive ? 'active' : '';

    let saveClass = ["favorite_save"];

    if(this.state.saveActive) {
      saveClass.push('active');
    }

    return (
      <div 
          className={`card-content ${className}`}
          onClick={() => this.setState({extendActive: !this.state.extendActive})}
        >
        <div className='card-content__main'>
          <FavoriteIcon
            className={saveClass.join(' ')}
            onClick={this.saveClick.bind(this)}
            fontSize='small'
          >{this.state.saveActive}</FavoriteIcon>
          <img className='card-content__circle'
               src="https://livechat.s3.amazonaws.com/default/avatars/female_22.jpg" />
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