import React from 'react';
import { Link } from 'react-router-dom';
import Chip from '@material-ui/core/Chip';
import ArrowBack from '@material-ui/icons/ArrowBackIos';
import SettingIcon from '@material-ui/icons/Settings';

import './Profile.css';


class Profile extends React.Component {
  render() {
    return (
      <div className='phone_brighter'>
        <div className='phone__header'>
          <Link to='/' style={{ color:'white' }}><span><ArrowBack /></span></Link>
          <span>Jiaqi Zheng</span>
          <Link to='/settings' style={{ color:'white' }}><span><SettingIcon /></span></Link>
        </div>
        <img className='profile_avatar'
            src="https://media.licdn.com/dms/image/C4D03AQFEx0TW8NhsCw/profile-displayphoto-shrink_200_200/0?e=1550102400&v=beta&t=Ql_WOwO8V8ip6S1r0cs6yhHGDRNh9totiWbhygVXbBU"
            alt="profile" />
        <div className='profile_details'>
          <span className='details_title'>Area of Interest</span>
          <div className='interest_add'>+</div>
          <InterestArray />
        </div>
        <div className='profile_details'>
          <div className='details_title'>Skills</div>
          <div className='skill_add'>+</div>
          <SkillsArray />
        </div>
      </div>
    );
  }
}


class InterestArray extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Software Development' },
      { key: 1, label: 'UX Design' },
      { key: 2, label: 'Data Visualization' },
    ],
  };

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    return (
      <div>
        {this.state.chipData.map(data => {
          return (
            <Chip
              className='profile_chip'
              key={data.key}
              label={data.label}
              onDelete={this.handleDelete(data)}
              variant="outlined"
              color="primary"
            />
          );
        })}
      </div>
    );
  }
}


class SkillsArray extends React.Component {
  state = {
    chipData: [
      { key: 0, label: 'Devops' },
      { key: 1, label: 'JavaScript' },
      { key: 2, label: 'Python' },
      { key: 3, label: 'Matlab' },
      { key: 4, label: 'Sketch' },
      { key: 5, label: 'Rhino' },
      { key: 6, label: 'WebGL' },
    ],
  };

  handleDelete = data => () => {
    this.setState(state => {
      const chipData = [...state.chipData];
      const chipToDelete = chipData.indexOf(data);
      chipData.splice(chipToDelete, 1);
      return { chipData };
    });
  };

  render() {
    return (
      <div>
        {this.state.chipData.map(data => {
          return (
            <Chip
              className='profile_chip'
              key={data.key}
              label={data.label}
              onDelete={this.handleDelete(data)}
              variant="outlined"
              color="primary"
            />
          );
        })}
      </div>
    );
  }
}

export default Profile;






