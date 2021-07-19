import {useHistory} from 'react-router-dom'
import BloodBankHeader from '../../headers/bloodbank';
import GoogleLogout from 'react-google-login'

function BloodBankLogout() {
  let history = useHistory();
  const onSuccess = (res) =>{
    alert("you're logged out")
    history.push('/home')
  }
    return (
        <div>
          <BloodBankHeader/>
          <div className="login-box">
            <h2>Blood-Bank logout</h2>
            <form>
            <center>
              <GoogleLogout 
                    clientId="882732752469-hfbm5chah7e0usf6p3c6t6kv20dbpv25.apps.googleusercontent.com"
                    onlLogoutSuccess={onSuccess}
                    buttonText="Logout With Google"
                  >
            </GoogleLogout>
            </center>
            </form>
          </div>
        </div>
    );
  }
  
  export default BloodBankLogout;