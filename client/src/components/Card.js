import React from 'react';
import { Link } from 'react-router-dom';
import Swipeable from "react-swipy";
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.css';


class CardContent extends React.Component{
  state = {
    posts: [{
      name: 'Wong Da Jin',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_22.jpg',
      title: 'Electronics Engineer',
      location: 'Stockholm County, Sweden',
      summary: 'I am an Embedded Systems Master student with solid technical expertise and problem-solving skills. I am actively looking for job opportunities in Embedded systems development.',
      skills: 'CPU computing, Arduino, C++',
      interest: 'IoT, Embedded System, Electronics',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
    }, {
      name: 'Jiaqi Zheng',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/female_22.jpg',
      title: 'Graphics Developer & Designer',
      location: 'Stockholm County, Sweden',
      summary: 'Pursuing the M.Sc. in HCI right now, I am passionate about aesthetics/graphics programming. With some experience in interaction design and web development, I will be working on the thesis of WebGL visualization, as a step towards my career goal of Data Artist & Graphics Programmer.',
      skills: 'HCI, JS, WebGL',
      interest: 'User Interface, Graphics Programming, Shader Programming',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
    }, {
      name: 'Dániel Bányay',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_32.jpg',
      title: 'Computer Science student at KTH',
      location: 'Stockholm County, Sweden',
      summary: 'I am a Master student doing a special study programme, combining Computer Science with Entrepreneurship. This programme helped me to deepen my knowledge in specific fields of Computer Science and develop an entrepreneurial mindset. I have the passion to solve problems in a creative way, especially when I can work with other people. Currently I am looking for a Master Thesis topic that uses signal processing and machine learning.',
      skills: 'Event Management, Microsoft Excel',
      interest: 'Entrepreneurship, Computer Science',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
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
      snackbar: false,
    }, {
      name: 'Raffaella Tran',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/female_23.jpg',
      title: 'Mobile Engineer at dunnhumby',
      location: 'Espoo, Southern Finland, Finland',
      summary: 'Hard-worker and well-organized mobile developer who wants to help you to improve and enhance your company. I graduated in EIT Digital Master School. My major is Software and Service Architecture in Smart Spaces at Aalto University and University of Trento. I have a background in Computer Science, especially in web and mobile full-stack development; Economics, in particular in marketing and business development.',
      skills: 'Data Analysis, C++, Teamwork',
      interest: 'Full-Stack, Mobile, EIT',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
    }, {
      name: 'Omar Nasir',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg',
      title: 'Machine Learning | Data Science',
      location: 'Espoo, Southern Finland, Finland',
      summary: 'I am an automation enthusiast, studying Machine Learning and Data Mining algorithms. I have diverse experience in building scalable enterprise applications using a wide variety of technologies and frameworks. I am experienced in developing innovative & user-centric software, and have been involved in process re-engineering by incorporating software based solutions. I am adept at diagnostics & troubleshooting. I consider myself as a team player, and believe in leading by example.',
      skills: 'Machine Learning, Python, JavaScript',
      interest: 'Digtal Media, Data Science, Machine Learning',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
    }, {
      name: 'Marino Mtz',
      photo: 'https://livechat.s3.amazonaws.com/default/avatars/male_27.jpg',
      title: 'Machine Learning | Data Science | DevOps | Agile',
      location: 'Chemnitz, Saxony, Germany',
      summary: 'Specialities: Service Oriented Architecture, Machine learning and DataScience, Agile Methodologies, Scrum and Kanban Development, TDD and DDD way of coding eventually making use of design principles and patterns, Hands on Experience in Continuous Integration and Delivery, PHP Laravel and DevOps fanatic (Docker, Vagrant)',
      skills: 'PHP, SQL, Laravel',
      interest: 'Machine Learning, Data Analysis, Apache, Python',
      extendActive: false,
      saveActive: false,
      remove: false,
      snackbar: false,
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
    this.showSnackbar(i);
  };

  showSnackbar = (i) => {
    const { posts } = this.state;
    posts[i].snackbar = true;
    // disappear after 3s
    setTimeout(() => {
      posts[i].snackbar = false;
      this.setState({ posts });
    }, 3500);
    this.setState({ posts });
  };

  undoRemove = (i) => {
    const { posts } = this.state;
    posts[i].remove = false;
    this.setState({ posts });
  };

  render() {
    const cards = this.state.posts.map((item, i) => (
      <div key={i}>
        <div className={`card_wrap ${this.state.posts[i].remove ? 'active' : ''}`}>
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
        </div>
        <div className={`snackbar ${this.state.posts[i].snackbar ? 'active' : ''}`}>
          Not Interested
          <span className='undoremove' onClick={() => this.undoRemove(i)}>UNDO</span>
        </div>
      </div>
    ));

    return (
      cards
    );
  }
}

export default CardContent;