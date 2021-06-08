import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faYahoo } from '@fortawesome/free-brands-svg-icons';

function BloodBankLogin() {
  let history = useHistory();
 
    return (
        <div className="login-box" id="bloodbankLogin">
            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
            <h2>Blood-Bank login</h2>
            <form>
            <center>
                <div className="flex-c-m">
                <a href="/" className="login100-social-item bg1">
                <FontAwesomeIcon icon={faGoogle} />
                </a>
        
                <a href="/" className="login100-social-item bg2">
                <FontAwesomeIcon icon={faYahoo} />
                </a>
        
                <a href="/" className="login100-social-item bg3">
                <FontAwesomeIcon icon={faLinkedin} />
                </a>
            </div>
            </center>
            <center>
                <a href="/">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Join Us
                </a>
            </center>
            </form>
        </div>

    );
  }
  
  export default BloodBankLogin;