import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider, Message, MessageText, MessageList, MessageGroup,
  TextComposer, Row, TextInput, SendButton } from '@livechat/ui-kit';
import HomeRounded from '@material-ui/icons/ArrowBackIos';

import './Chat.css';


class ChatScreen extends React.Component {
  render() {
    return (
    	<div className='phone'>
        <div className='phone__header'>
          <Link to='/messages' style={{ color:'white' }}><span><HomeRounded /></span></Link>
        </div>

        <ThemeProvider>
          <div className='messenger'>
            <MessageList active>
              <MessageGroup
                avatar="https://livechat.s3.amazonaws.com/default/avatars/male_8.jpg"
                onlyFirstWithMeta
              >
                <Message authorName="Michale Smith" date="21:37">
                  <MessageText className='bubble_left'>
                    Hello, how are you? I'm Jon, nice to meet you!
                  </MessageText>
                </Message>
                <Message authorName="Michale Smith" date="21:37">
                  <MessageText className='bubble_left'>
                    I also love DevOps, though not many friends of mine are doing the same.
                  </MessageText>
                </Message>
                <Message authorName="Michale Smith" date="21:37">
                  <MessageText className='bubble_left'>
                    Some techniques like Kubernetes are super useful.
                  </MessageText>
                </Message>
              </MessageGroup>
              <MessageGroup onlyFirstWithMeta>
                <Message date="21:38" isOwn={true}>
                  <MessageText className='bubble_right'>
                    Nice to meet you!
                  </MessageText>
                </Message>
                <Message date="21:38" isOwn={true}>
                  <MessageText className='bubble_right'>
                    Let's meet up?
                  </MessageText>
                </Message>
              </MessageGroup>
            </MessageList>
            <TextComposer
              className='textcomposer'
              >
              <Row align="center">
                <TextInput />
                <SendButton fit />
              </Row>
            </TextComposer>
          </div>
          
        </ThemeProvider>


    	</div>
    );
  }
}

export default ChatScreen;