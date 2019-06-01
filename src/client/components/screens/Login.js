import React from 'react';
import './Login.css';

import PersonalCard from "../PersonalCard";
//import axios from 'axios';
var IN = null;

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthorized: false,
            firstName: null,
            lastName: null,
            headline: null,
            profileURL: null,
            pictureURL: null,
            location: null,
            positions: null,
            summary: null,
            connectionsCount: null,
        };

        this.nodes = {};

        this.onLoginSuccess = this.onLoginSuccess.bind(this)
        this.onLoginFailure = this.onLoginFailure.bind(this)
        this.onLogoutSuccess = this.onLogoutSuccess.bind(this)
        this.onLogoutFailure = this.onLogoutFailure.bind(this)
        this.logout = this.logout.bind(this)
    }

    setNodeRef(provider, node) {
        if (node) {
            this.nodes[provider] = node
        }
    }

    onLoginSuccess(user) {
        //This is what is shown on the console
        console.log(user);

        this.setState({
            logged: true,

            currentProvider: user._provider,
            user
        })
    }

    onLoginFailure(err) {
        console.error(err);

        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutSuccess() {
        this.setState({
            logged: false,
            currentProvider: '',
            user: {}
        })
    }

    onLogoutFailure(err) {
        console.error(err)
    }

    logout() {
        const {logged, currentProvider} = this.state

        if (logged && currentProvider) {
            this.nodes[currentProvider].props.triggerLogout()
        }
    }

    isLinkedinAuthorized = () => {
        return IN.User.isAuthorized();
    };
    linkedinAuthorize = () => {
        IN.User.authorize(this.onLinedInLoad());
    };
    updateAuthorizeStatus = () => {
        if (IN === null) {
            IN = window.IN;
        }
        if (this.isLinkedinAuthorized()) {
            this.setState({
                isAuthorized: true
            });
            this.requestLinkedInProfile();
        }
    };
    onLinedInLoad = () => {
        IN.Event.on(IN, "auth", this.updateAuthorizeStatus);
    };
    linkedinLogout = () => {
        IN.User.logout(this.updateAuthorizeStatus);
    };

    componentDidMount = () => {
        window.updateAuthorizeStatus = this.updateAuthorizeStatus;
        var script = window.document.createElement("script");
        script.src = "//platform.linkedin.com/in.js";
        script.innerHTML = `api_key:   77ix6n9gb56uvg
            authorize: true
            onLoad:updateAuthorizeStatus`;
        script.async = true;
        document.getElementsByTagName("head")[0].appendChild(script);
    };

    requestLinkedInProfile = () => {
        IN.API.Raw(
            "/people/~:(first-name,last-name,public-profile-url,location,headline,picture-url,positions,summary,num-connections)?format=json"
        )
            .method("GET")
            .body()
            .result(this.updateLinkedinProfile);
    };

    updateLinkedinProfile = profile => {
        //console.log(profile);

        this.setState({
            firstName: profile.firstName,
            headline: profile.headline,
            lastName: profile.lastName,
            profileURL: profile.publicProfileUrl,
            pictureURL: profile.pictureUrl,
            location: profile.location.name,
            positions: profile.positions,
            summary: profile.summary,
            connectionsCount: profile.numConnections,
        });
        // axios.post('/home',{
        //     Name: profile.firstName+' '+profile.lastName,
        //     pictureURL: profile.pictureURL,
        //     headline: profile.headline,
        //     location: profile.location,
        //     summary: profile.summary
        //   })
        //   .then(function (response) {
        //     console.log(response);
        //   })
        //   .catch(function (error) {
        //     console.log(error);
        //   });
        let data = {
          Name: profile.firstName+' '+profile.lastName,
          pictureURL: profile.pictureUrl,
          headline: profile.headline,
          location: profile.location.name,
          summary: profile.summary
        };
        console.log(data);
        fetch('/profile', {
          method:'POST',
          body: JSON.stringify(data),
          headers: {
                "Content-Type": "application/json"
            }

        }).then((res)=>{
          if(res.ok){
            return res.json();
          }
          else{
            throw new Error ('Wrong');
          }
        })
        .then((json)=>{
          console.log(json);
        })
        // .then(function(response) {
        //   return response.json()
        // })
        // .then(function(body) {
        //   console.log(body);
        // });
      }


    render() {


        return (
            <div className='card-content__main'>
                <button onClick={() => this.linkedinAuthorize()}> Log in with LinkedIN </button>
                <PersonalCard
                    firstName={this.state.firstName}
                    headline={this.state.headline}
                    lastName={this.state.lastName}
                    profileURL={this.state.profileURL}
                    pictureURL={this.state.pictureURL}
                    location={this.state.location}
                    positions={this.state.positions}
                    summary={this.state.summary}
                    connectionsCount={this.state.connectionsCount}
                />


            </div>

        )
    }
}

export default Login;
