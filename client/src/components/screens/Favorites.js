import React from 'react';
import { Link } from 'react-router-dom';
import Swipeable from "react-swipy";
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchBar from 'material-ui-search-bar';

// below yet to be optimized by React Composition, aka. reuse Card.js
class CardContent extends React.Component{
  state = {
    posts: []
  }

  componentDidMount(){
    this.getUsersaved();
  }

  getUsersaved = _ => {
    fetch('/api/usersaved')
      .then(response => response.json())
      .then(response => this.setState({ posts:response.data }))
      .catch(err => console.error(err))
  }

  // save to favorites triggered
  saveClick = (e, i) => {
    // prevent card extending triggered
    e.stopPropagation();
    const { posts } = this.state;
    posts[i].saveActive = !this.state.posts[i].saveActive;
    this.setState({ posts });
    // fetch('/api/save');
  }

  // click for card extending and shrinking
  cardClick = (i) => {
    const { posts } = this.state;
    posts[i].extendActive = !this.state.posts[i].extendActive;
    this.setState({ posts });
  }

  // swipe the card to remove
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
          <span className='snackbar_text'>Not Interested</span>
          <span className='undoremove' onClick={() => this.undoRemove(i)}>UNDO</span>
        </div>
      </div>
    ));

    return (
      cards
    );
  }
}


class FavoritesScreen extends React.Component{

  render() {

    return (
      <div className='phone'>

        <div className='phone__header'>
          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              width: '100%',
              height: '60%',
              margin: '0 1em',
              boxShadow: 'none',
              borderRadius: '30px',
            }}
          />
        </div>

        <div
        	style={{
        		top: '55px',
        		height: '28px',
        		textAlign: 'center',
        		fontSize: '1.3em',
        		fontStyle: 'italic',
        		fontWeight: 'bold',
        		color: '#8A94AF',
        	}}
        >Saved Contacts</div>

        <div className='phone-content__wrapper'>
          <CardContent />
        </div>

      </div>
    );
  }
}


export default FavoritesScreen;
