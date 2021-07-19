import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faYahoo } from '@fortawesome/free-brands-svg-icons';
import BloodBankHeader from '../../headers/bloodbank';
import GoogleLogin from 'react-google-login'

function BloodBankLogin() {
  let history = useHistory();
  const onSuccess = (res) =>{
    console.log("sucess", res.profileObj)
    alert(res.profileObj.email)

  }
  const onFailure = (res) =>{
    console.log("failure", res)
  }
    return (
        <div>
          <BloodBankHeader/>
          <div className="login-box">
            <h2>Blood-Bank login</h2>
            <form>
            <center>
              <br></br> <br></br> <br></br>
              <GoogleLogin 
                    clientId="882732752469-hfbm5chah7e0usf6p3c6t6kv20dbpv25.apps.googleusercontent.com"
                    onSuccess={onSuccess}
                    onFailure={onFailure}
                    cookiePolicy='single_host_origin'
                    isSignedIn={false}
                    buttonText="Login With Google"
                  >
                  </GoogleLogin>
                  <br></br>
            </center>
            </form>
          </div>
        </div>
    );
  }
  
  export default BloodBankLogin;