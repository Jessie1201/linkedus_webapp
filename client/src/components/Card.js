import React from 'react';
import { Link } from 'react-router-dom';
import Swipeable from "react-swipy";
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.css';


class CardContent extends React.Component{
  state = {
    snackbar: false,
    posts: [{
      name: 'Wong Da Jin',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_22.jpg',
      title: 'Electronics Engineer',
      location: 'Singapore',
      summary: 'I am an Embedded Systems Master student with solid technical expertise and problem-solving skills. I am actively looking for job opportunities in Embedded systems development.',
      skills: 'CPU computing, Arduino, C++',
      interest: 'IoT, Embedded System, Electronics',
      extendActive: false,
      saveActive: false,
      remove: false,
      // snackbar: false,
    }, {
      name: 'Jiaqi ZHENG',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/female_22.jpg',
      title: 'Graphics Developer & Designer',
      location: 'Stockholm, Sweden',
      summary: 'Pursuing the M.Sc. in HCI right now, I am passionate about aesthetics/graphics programming. With some experience in interaction design and web development, I will be working on the thesis of WebGL visualization, as a step towards my career goal of Data Artist & Graphics Programmer.',
      skills: 'HCI, JS, WebGL',
      interest: 'User Interface, Graphics Programming, Shader Programming',
      extendActive: false,
      saveActive: false,
      remove: false,
      // snackbar: false,
    }, {
      name: 'Marco Castaldi',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_20.jpg',
      title: 'Android Developer',
      location: 'San Francisco, US',
      summary: 'Fresh MSc graduate at Aalto University (Finland). Currently working as a Full-Stack Engineer at Ellipsis Health.',
      skills: 'Android Studio, native react, java',
      interest: 'Mobile, Java, Native Technology',
      extendActive: false,
      saveActive: false,
      remove: false,
      // snackbar: false,
    }]
  }

  saveClick = (e, i) => {
    // prevent card extending triggered
    e.stopPropagation();
    const { posts } = this.state;
    posts[i].saveActive = !this.state.posts[i].saveActive;
    this.setState({ posts });
  }

  cardClick = (i) => {
    const { posts } = this.state;
    posts[i].extendActive = !this.state.posts[i].extendActive;
    this.setState({ posts });
  }

  removeCard = (i) => {
    const { posts } = this.state;
    posts[i].remove = true;
    this.setState({ posts });
    this.showSnackbar();
  };

  // // if set snackbar for each card
  // showSnackbar = (i) => {
  //   const { posts } = this.state;
  //   posts[i].snackbar = true;
  //   setTimeout(() => {
  //     posts[i].snackbar = false;
  //     this.setState({ posts });
  //   }, 1500);
  // };

  // if set snackbar only once
  showSnackbar= () => {
    this.setState({ snackbar: true });
    setTimeout(() => {
      this.setState({ snackbar: false });
    }, 1500);
  }

  render() {
    const cards = this.state.posts.map((item, i) => (
      <div key={i} className={`card_wrap ${this.state.posts[i].remove ? 'active' : ''}`}>
      <Swipeable onAfterSwipe={() => this.removeCard(i)}>
        <div
          onClick={() => this.cardClick(i)}
          className={`card-content ${this.state.posts[i].extendActive ? 'active' : ''}`}
          >
          <div className='card-content__main'>
            <FavoriteIcon
              onClick={(e) => this.saveClick(e, i)}
              className={`favorite_save ${this.state.posts[i].saveActive ? 'active' : ''}`}
              fontSize='small'
            >{this.state.saveActive}</FavoriteIcon>
            <img className='card-content__circle'
                src={item.photo}
                alt="profile" />
            <div className='card-content__line-wrapper'>
              <div className='card-content__line--name'
                style={{fontSize: item.name.length * -0.13 + 3.36 + "em"}}>{item.name}</div>
              <div className='card-content__line--sub'>{item.title}</div>
              <div className='card-content__line--sub'>{item.location}</div>
            </div>
            <span className='fas fa-caret-down fa-lg arrow-down' />
          </div>

          <div className='extendinfo'>
            <div className='inner-content'>
              <div className='inner-content-wrapper'>
                <div className='inner-content__title'>About Me</div>
                <div className='inner-content__details summary'>{item.summary}</div>
              </div>
              <div className='inner-content-wrapper'>
                <div className='inner-content__title'>Skills</div>
                <div className='inner-content__details'>{item.skills}</div>
              </div>
              <div className='inner-content-wrapper'>
                <div className='inner-content__title'>Area of Interest</div>
                <div className='inner-content__details'>{item.interest}</div>
              </div>
            </div>
            <span className='fas fa-caret-up fa-lg arrow-up' />
            <Link to='/chat' className='sayhi_button_link'>
              <button className="sayhi_button">Say Hi!</button>
            </Link>
          </div>
        </div>
      </Swipeable>
      <div className={`snackbar ${this.state.snackbar ? 'active' : ''}`}>Deleted</div>
      </div>
    ));

    return (
      cards
    );
  }
}

export default CardContent;