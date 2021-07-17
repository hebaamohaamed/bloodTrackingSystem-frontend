import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import HospitalHeader from "../../headers/hospital";
import GoogleLogin from 'react-google-login'


export class HospitalLogin extends Component{
  responseGoogle=(response)=>{
    console.log(response);
    console.log(response.profileObj);
  }
  render(){
    
      return(
<div>
        <HospitalHeader />
        <div className="login-box">
    <h2>Hospital login</h2>
    <form>
    <center>
       <a href="#">
       <GoogleLogin 
            autoLoad= "false" 
            clientId="882732752469-hfbm5chah7e0usf6p3c6t6kv20dbpv25.apps.googleusercontent.com"
            onSuccess={this.responseGoogle}
            onFailure={this.responseGoogle}
            cookiePolicy='single_host_origin'
          >
          </GoogleLogin>
      </a>
    </center>
    </form>
  </div>
</div>
    );
      }
}