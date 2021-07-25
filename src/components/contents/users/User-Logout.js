import {useHistory} from 'react-router-dom'
import UserHeader from "../../headers/user";
import GoogleLogout from 'react-google-login'
import { Cookies,useCookies } from 'react-cookie';
import { wait } from '@testing-library/react';

function UserLogout() {
    
  let history = useHistory();
  function handleRemoveCookie() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    history.push('/home')
      
}  
    return (
        <div>
          <UserHeader/>
          <div className="login-box">
            <h2>Patient/Donor logout</h2>
            <form>
            <center>
                    <a href="#" onClick={ handleRemoveCookie}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    Logout
                    </a>
            </center>
            </form>
          </div>
        </div>
    );
  }
  
  export default UserLogout;