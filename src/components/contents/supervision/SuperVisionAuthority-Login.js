import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SuperHeader from "../../headers/supervision";

function superVisionAuthorityLogin(){
    return(
        <div>
            <SuperHeader/>
            <div style={{width:"450px"}} className="login-box">
    <h2>Supervision Log In</h2>
  <form>
    <center>
      <div className="flex-c-m">
      <a href="#" className="login100-social-item bg1">
        <i><FontAwesomeIcon icon ="linked-in"></FontAwesomeIcon></i>
      </a>

      <a href="#" class="login100-social-item bg2">
        <i><FontAwesomeIcon icon="google"></FontAwesomeIcon></i>
      </a>

      <a href="#" class="login100-social-item bg3">
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
export default superVisionAuthorityLogin;