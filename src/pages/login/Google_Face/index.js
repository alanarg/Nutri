import React, { Component } from "react";
import FacebookLogin from "react-facebook-login";
import Profile from "../../user/index";
import Grups from "../../grupos/index";
import { Link } from 'react-router-dom';


export default class Facebook extends Component {
  state = {
    isLoggedIn: false,
    userID: "",
    name: "",
    email: "",
    picture: ""
  };

  responseFacebook = response => {
    // console.log(response);

    this.setState({
      isLoggedIn: true,
      userID: response.userID,
      name: response.name,
      email: response.email,
      picture: response.picture.data.url
    });
  };

  componentClicked = () => console.log("clicked");

  render() {
    let fbContent;
   

    
    if (this.state.isLoggedIn) {
    

      

      fbContent = (
        <Link to={"/grupos"}>aushaush</ Link>
      );
    } else {
      fbContent = (
        <FacebookLogin
          appId="496825740900202"
          autoLoad={true}
          fields="name,email,picture"
          onClick={this.componentClicked}
          callback={this.responseFacebook}
        />
      );
    }
    
    

    return <div><Profile atributos={fbContent} /></div>;
  }
}