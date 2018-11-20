import React from 'react';
import {Link} from 'react-router-dom';
import FavoriteIcon from '@material-ui/icons/Favorite';
import './Card.css';


class CardContent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            extendActive: false,
            saveActive: false,

        }
    }

    generateInnerContent() {
        if (!this.state.extendActive) {
            return null;
        }

        function sayhiClick(e) {
            e.stopPropagation();
            console.log("Hi Hi!");
        }

        return (
            <div>
                <div className='inner-content'>
                    <div className='inner-content-wrapper'>
                        <div className='card-content__line inner-content__title'>About me</div>
                        <div className='card-content__line inner-content__details'>
                            {
                                this.props.summary
                            }
                        </div>
                    </div>
                    <div className='inner-content-wrapper'>
                        <div className='card-content__line inner-content__title'>Major Skills</div>
                        <div className='card-content__line inner-content__details'>Javascript, UX, WebGL</div>
                    </div>
                    <div className='inner-content-wrapper'>
                        <div className='card-content__line inner-content__title'>Previous Companies</div>
                        <div className='card-content__line inner-content__details'>Something</div>
                    </div>
                </div>
                <span className='fas fa-caret-up fa-lg arrow-up'/>
                <Link to='/chat' className='sayhi_button_link'>
                    <button className="sayhi_button" onClick={sayhiClick}>Say Hi!</button>
                </Link>
            </div>
        )
    }

    saveClick(e) {
        e.stopPropagation();
        this.setState({saveActive: !this.state.saveActive});
    }

    render() {
        const className = this.state.extendActive ? 'active' : '';

        let saveClass = ["favorite_save"];

        if (this.state.saveActive) {
            saveClass.push('active');
        }

        return (
            <div
                className={`card-content ${className}`}
                onClick={() => this.setState({extendActive: !this.state.extendActive})}
            >
                <div className='card-content__main'>
                    <FavoriteIcon
                        className={saveClass.join(' ')}
                        onClick={this.saveClick.bind(this)}
                        fontSize='small'
                    >{this.state.saveActive}</FavoriteIcon>
                    <div>
                        {this.props.pictureURL &&
                        <img className="card-content__circle" src={this.props.pictureURL} alt="Avatar"/>
                        }
                    </div>
                    <div className='card-content__line-wrapper'>
                        <div className='card-content__line card-content__line--name'>{this.props.firstName + " " + this.props.lastName}</div>
                        <div className='card-content__line card-content__line--sub'>{this.props.headline}</div>
                        <div className='card-content__line card-content__line--sub'>{this.props.location}</div>
                    </div>
                    <span className='fas fa-caret-down fa-lg arrow-down'/>
                </div>
                {this.generateInnerContent()}
            </div>
        );
    }
}

export default CardContent;
