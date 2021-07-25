import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import GoogleLogin from 'react-google-login'
import PreLoginHeader from '../../headers/PreLoginHeader'
import { useCookies } from 'react-cookie';
import {useHistory} from 'react-router-dom'

function SuperVisionAuthorityLogin(){
      const [cookies, setCookie, removeCookie] = useCookies(['super']);
      let history = useHistory();
    
      function checkEmail(email){
       if(email == "ministryofhealtheg@gmail.com"){
         handleCookie("SA","Ministry Of Health",email)
       }else{
         alert(email)
         alert("Email is not registered")
       }
      }
      function handleCookie(id,name,email){
        setCookie('name',name , { path: '/' });
        setCookie('id', id, { path: '/' });
        setCookie('email',email, { path: '/' }); 
        console.log(cookies)
        history.push("/superVisionOptions")
      }
      const onSuccess = (res) =>{
        console.log("sucess", res.profileObj)
        checkEmail(res.profileObj.email);
      }
      const onFailure = (res) =>{
        console.log("failure", res)
        checkEmail("Couldn't Login With Google")
      }
      
    
          return(
            <div>
              <PreLoginHeader/>
              <div className="login-box">
                <h2>Ministry login</h2>
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
export default SuperVisionAuthorityLogin;