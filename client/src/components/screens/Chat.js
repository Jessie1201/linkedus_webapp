import React from 'react';
import { Link } from 'react-router-dom';
import './Chat.css';

class ChatScreen extends React.Component {
  render() {
    return (
    	<div className='phone'>

    	<div className='phone__header'>
          <Link to="/profile" style={{ color:'white' }}>
            <span className='fa fa-user-circle' />
          </Link>

          
        </div>

    	</div>
    );
  }
}

export default ChatScreen;