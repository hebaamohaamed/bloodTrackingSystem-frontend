import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faGoogle, faLinkedin, faYahoo } from '@fortawesome/free-brands-svg-icons';
import PreLoginHeader from '../../headers/PreLoginHeader'
import GoogleLogin from 'react-google-login'
import { useCookies } from 'react-cookie';
import axios from 'axios'


function BloodBankLogin() {
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  let history = useHistory();

  function TrigerAxios(email){
    axios.get("http://localhost:4000/api/get/bloodbank?email="+email)
    .then(response =>{
      const id=response.data[0].bbId;
      const name =response.data[0].bbName;
      console.log(response)
      console.log("Change State Confirmed")
      handleCookie(id,name,email)
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      alert("This Email Is Not Registered")
    })

  }
  function handleRemoveCookie() {
    removeCookie();
  }

  function handleCookie(id,name,email){
    setCookie('name',name , { path: '/' });
    setCookie('id', id, { path: '/' });
    setCookie('email',email, { path: '/' }); 
    console.log(cookies)
    history.push("/bloodBankOptions")
  }
  const onSuccess = (res) =>{
    console.log("sucess", res.profileObj)
    TrigerAxios(res.profileObj.email);
    //handleCookie("d236",res.profileObj.name,res.profileObj.email)
  }
  const onFailure = (res) =>{
    console.log("failure", res)
    alert("Couldn't Login With Google")
  }
    return (
        <div>
          <PreLoginHeader/>
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