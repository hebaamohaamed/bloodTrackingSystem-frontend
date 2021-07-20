import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import UserHeader from "../../headers/user";

function userLogin(){
    return(
        <div>
            <UserHeader/>
            <div className="login-box">
    <h2>Hospital login</h2>
    <form>
      <center>
        <div className="flex-c-m">
        <a href="#" class="login100-social-item bg1">
          <i><FontAwesomeIcon icon ="linked-in"></FontAwesomeIcon></i>
        </a>
  
        <a href="#" className="login100-social-item bg2">
          <i><FontAwesomeIcon icon ="google"></FontAwesomeIcon></i>
        </a>
  
        <a href="#" className="login100-social-item bg3">
          <i><FontAwesomeIcon icon="yahoo"></FontAwesomeIcon></i>
        </a>
      </div>
    </center>
    <center>
       <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Join Us
      </a>
    </center>
    </form>
  </div>

        </div>
    );
}
export default userLogin;