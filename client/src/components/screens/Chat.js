import React from 'react';
import { Link } from 'react-router-dom';
import { ThemeProvider, Message, MessageText, MessageList, MessageGroup,
  TextComposer, Row, TextInput, SendButton } from '@livechat/ui-kit';
import ArrowBack from '@material-ui/icons/ArrowBackIos';

import './Chat.css';


class ChatScreen extends React.Component {
  render() {
    return (
    	<div className='phone'>
        <div className='phone__header'>
          <Link to='/messages' style={{ color:'white' }}><span><ArrowBack /></span></Link>
          {/* <span>Michale Smith</span> */}
          <span>Weiqing Huang</span>
          <a href="https://www.linkedin.com/in/wqhuang-ustc/"
            rel="noopener noreferrer"
            style={{ color:'white'}}
            ><span className='fab fa-linkedin' /></a>
        </div>

        <ThemeProvider>
          <div className='messenger'>
            <MessageList active>
              <MessageGroup
                avatar="https://scontent-arn2-1.xx.fbcdn.net/v/t1.0-9/37272473_2170910939809486_2811315378112692224_o.jpg?_nc_cat=109&_nc_ht=scontent-arn2-1.xx&oh=81311e014360781e3ecf2f35f988fa29&oe=5CF2DDB0"
                onlyFirstWithMeta
              >
                <Message authorName="Weiqing Huang" date="21:37">
                  <MessageText className='bubble_left'>
                    Hello, how are you? I'm Jon, nice to meet you!
                  </MessageText>
                </Message>
                <Message authorName="Weiqing Huang" date="21:37">
                  <MessageText className='bubble_left'>
                    I also love DevOps, though not many friends of mine are doing the same.
                  </MessageText>
                </Message>
                <Message authorName="Weiqing Huang" date="21:37">
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