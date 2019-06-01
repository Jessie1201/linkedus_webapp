import React from 'react';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ArrowBack from '@material-ui/icons/ArrowBackIos';

class Settings extends React.Component {
  render() {
    return (
        <div className='phone_brighter'>
            <div className='phone__header'>
                <Link to='/profile' style={{ color:'white' }}><span><ArrowBack /></span></Link>
                <span>Settings</span>
                <span />
            </div>
            <List component="nav" style={{backgroundColor:'white', top:'3em'}}>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="Notifications" />
                </ListItem>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="Blocked Users" />
                </ListItem>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="Policy" />
                </ListItem>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="Remove Account" />
                </ListItem>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="API Service" />
                </ListItem>
                <ListItem button>
                <ListItemText style={{marginLeft:'1em'}} primary="Creators" />
                </ListItem>
            </List>
        </div>
    );
  }
}

export default Settings;