import React from 'react';
import { Link } from 'react-router-dom';
import Swipeable from "react-swipy";
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.css';

// this currently manual written data, should finally be extracted from linkedin
const data = [
  {
    id: 1,
    name: 'Jiaqi ZHENG',
    photo: 'https://livechat.s3.amazonaws.com/default/avatars/female_22.jpg',
    title: 'Graphics Developer & Designer',
    location: 'Stockholm, Sweden',
    summary: 'Pursuing HCI at KTH Royal Institute of Technology.',
    skills: 'HCI, JS, WebGL',
    interest: 'User Interface, Graphics Programming, Shader Programming'
  },
  {
    id: 2,
    name: 'Wong Da Jin',
    photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_22.jpg',
    title: 'Electronics Engineer',
    location: 'Singapore',
    summary: 'Experienced engineer with M.Sc. in Embedded System.',
    skills: 'CPU computing, Arduino, C++',
    interest: 'IoT, Embedded System, Electronics'
  },
  {
    id: 3,
    name: 'Marco Castaldi',
    photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_20.jpg',
    title: 'Android Developer',
    location: 'San Francisco, US',
    summary: 'Have been working for more than 10 years in Android.',
    skills: 'Android Studio, native react, java',
    interest: 'Mobile, Java, Native Technology'
  }
];


class CardContent extends React.Component{
  
  constructor() {
    super();
    this.state = {
      extendActive: false,
      saveActive: false,
    }
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

    const cards = data.map(item => (
      <Swipeable key={item.id}>
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
                src={item.photo}
                alt="profile" />
            <div className='card-content__line-wrapper'>
              <div className='card-content__line card-content__line--name'>{item.name}</div>
              <div className='card-content__line card-content__line--sub'>{item.title}</div>
              <div className='card-content__line card-content__line--sub'>{item.location}</div>
            </div>
            <span className='fas fa-caret-down fa-lg arrow-down' />
          </div>

          {/* {this.generateInnerContent()} */}
          <div className='extendinfo'>
            <div className='inner-content'>
              <div className='inner-content-wrapper'>
                <div className='card-content__line inner-content__title'>About Me</div>
                <div className='card-content__line inner-content__details'>{item.summary}</div>
              </div>
              <div className='inner-content-wrapper'>
                <div className='card-content__line inner-content__title'>Skills</div>
                <div className='card-content__line inner-content__details'>{item.skills}</div>
              </div>
              <div className='inner-content-wrapper'>
                <div className='card-content__line inner-content__title'>Area of Interest</div>
                <div className='card-content__line inner-content__details'>{item.interest}</div>
              </div>
            </div>
            <span className='fas fa-caret-up fa-lg arrow-up' />
            <Link to='/chat' className='sayhi_button_link'>
              <button className="sayhi_button">Say Hi!</button>
            </Link>
          </div>

        </div>
      </Swipeable>
    ));

    return (
      cards
    );
  }
}

export default CardContent;