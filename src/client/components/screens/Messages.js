import React from 'react';
import SearchBar from 'material-ui-search-bar';
import { Link } from 'react-router-dom';
import { ThemeProvider, ChatList, ChatListItem, Avatar, Column, Row, Title, Subtitle } from '@livechat/ui-kit';

import './Messages.css';


class MessagesScreen extends React.Component {
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
	    	<ThemeProvider>
				<ChatList className='chatlist'>
				  <Link to='/chat' className='router_link'>
				  	<ChatListItem className='chatlist_item'>
					    <Avatar className='avatar' imgUrl='https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/37272473_2170910939809486_2811315378112692224_o.jpg?_nc_cat=109&_nc_ht=scontent-arn2-1.xx&oh=81311e014360781e3ecf2f35f988fa29&oe=5CF2DDB0' />
					    <Column className='message_content'>
					      <Row justify>
					        <Title ellipsis>{'Weiqing'}</Title>
					        <Subtitle nowrap>{'14:31 PM'}</Subtitle>
					      </Row>
					      <Subtitle ellipsis>
					        {'Hello, I also love DevOps, though not many friends of mine are doing the same.'}
					      </Subtitle>
					    </Column>
				  	</ChatListItem>
				  </Link>
				  <Link to='/chat' className='router_link'>
					  <ChatListItem className='chatlist_item'>
					    <Avatar className='avatar' imgUrl='https://livechat.s3.amazonaws.com/default/avatars/male_7.jpg' />
					    <Column className='message_content'>
					      <Row justify>
					        <Title ellipsis>{'Andrew'}</Title>
					        <Subtitle nowrap>{'14:31 PM'}</Subtitle>
					      </Row>
					      <Subtitle ellipsis>
					      	{'Which cafe would you prefer?'}
					      </Subtitle>
					    </Column>
					  </ChatListItem>
				  </Link>
				  <Link to='/chat' className='router_link'>
					  <ChatListItem className='chatlist_item'>
					    <Avatar className='avatar' imgUrl='https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg' />
					    <Column className='message_content'>
					      <Row justify>
					        <Title ellipsis>{'Michael'}</Title>
					        <Subtitle nowrap>{'14:31 PM'}</Subtitle>
					      </Row>
					      <Subtitle ellipsis>
					        {"It was so nice of you to share the knowledge, hope could see you next time!"}
					      </Subtitle>
					    </Column>
					  </ChatListItem>
				  </Link>
				</ChatList>
			</ThemeProvider>
    	</div>

    );
  }
}


export default MessagesScreen;