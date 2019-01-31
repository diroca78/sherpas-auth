import React, { Component } from 'react';
import './App.css';

//import FacebookLogin from 'react-facebook-login';

import GoogleLogin from 'react-google-login';

class App extends Component {

  render() {

//    const responseFacebook = (response) => {
//      console.log(response);
//    }

    const responseGoogle = (response) => {
      console.log(response);
    }

    return (
      <div className="App">
        <h1>LOGIN WITH FACEBOOK AND GOOGLE</h1>

      <GoogleLogin
        clientId="388441137232-nump5oh0b1906irjlfs00h6o94nt2d62.apps.googleusercontent.com" //CLIENTID SherpasLoginWEB
        buttonText="LOGIN WITH GOOGLE"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
      />

      </div>
    );
  }
}

export default App;
