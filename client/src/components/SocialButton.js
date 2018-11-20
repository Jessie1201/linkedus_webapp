import React, {Component} from 'react'
import SocialLogin from 'react-social-login'
import PropTypes from "prop-types";

class Button extends Component{
    static propTypes ={
        triggerLogin: PropTypes.func.isRequired,
        triggerLogout: PropTypes.func.isRequired
    };
    render (){
        const {children: children, triggerLogin, triggerLogout, ...props} = this.props;
        const style = {
            background: '#eee',
            border: '1px solid black',
            borderRadius: '3px',
            display: 'inline-block',
            margin: '5px',
            padding: '10px 20px'
        }
        return (
            <div onClick={triggerLogin} style={style}>{children}</div>
        )
    }

}

export default SocialLogin(Button)
