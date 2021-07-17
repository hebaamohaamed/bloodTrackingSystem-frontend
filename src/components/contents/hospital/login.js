import {useHistory} from 'react-router-dom'
import GoogleLogin from 'react-google-login'
import { Component } from 'react';

export default class HospitalLogin extends Component {
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    return (
      <div>
          <GoogleLogin
            clientId="882732752469-hfbm5chah7e0usf6p3c6t6kv20dbpv25.apps.googleusercontent.com"
            buttonText="login"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy='single_host_origin'
          >
          </GoogleLogin>
      </div>
    );
  }
}
  