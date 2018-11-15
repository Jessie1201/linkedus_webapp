import React from 'react';
import SearchBar from 'material-ui-search-bar';
import CardContent from '../Card.js';


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
          <CardContent />
          <CardContent />
          <CardContent />
        </div>

      </div>
    );
  }
}


export default FavoritesScreen;
