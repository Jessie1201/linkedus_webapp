import React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from 'material-ui-search-bar';
// for location filter
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import CardContent from '../Card.js';
import './Home.css';
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;


class Home extends React.Component{

  // for location filter
  state = {
    anchorEl: null,
    selectedIndex: 0,
    showCard: true,
  };

  handleClickListItem = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuItemClick = (event, index) => {
    this.setState({ selectedIndex: index, anchorEl: null });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { anchorEl } = this.state;

    return (
      <div className='phone'>

        <div className='phone__header'>
          <Link to="/profile" style={{ color:'white' }}>
            <span className='fa fa-user-circle' />
          </Link>

          <SearchBar
            onChange={() => console.log('onChange')}
            onRequestSearch={() => console.log('onRequestSearch')}
            style={{
              backgroundColor: 'rgba(255,255,255,0.3)',
              width: '100%',
              height: '60%',
              boxShadow: 'none',
              borderRadius: '30px',
            }}
          />

          <List>
            <ListItem
              disableGutters={true}
              onClick={this.handleClickListItem}
            >
              <span className="fas fa-compass"/>
            </ListItem>
          </List>
        </div>

        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 7.5,
            },
          }}
        >
          {options.map((option, index) => (
            <MenuItem
              key={option}
              selected={index === this.state.selectedIndex}
              onClick={event => this.handleMenuItemClick(event, index)}
            >
              {option}
            </MenuItem>
          ))}
        </Menu>

        <div className='phone-content__wrapper'>
          <CardContent />
        </div>

      </div>
    );
  }
}

// for location filter
const ITEM_HEIGHT = 48;
const options = [
  'Stockholm',
  'Gothenburg',
  'Malmö',
  'Västerås',
  'Uppsala',
  'Helsingborg',
  'Jönköping',
  'Gävle',
  'Linköping',
  'Norrköping',
  'Örebro',
  'Växjö',
  'Halmstad',
  'Karlstad',
  'Lund',
  'Luleå',
  'Umeå',
  'Borås',
  'Karlskrona',
  'Falun',
  'Östersund',
  'Sundsvall',
  'Södertälje',
  'Skövde',
  'Visby',
  'Uddevalla',
  'Trollhättan',
  'Huskvarna',
  'Ystad',
  'Piteå',
  'Falkenberg',
  'Härnösand',
  'Nyköping',
  'Varberg',
  'Oskarshamn',
  'Kiruna',
  'Skanör med Falsterbo',
  'Kristianstad',
  'Torshälla',
];


export default Home;
