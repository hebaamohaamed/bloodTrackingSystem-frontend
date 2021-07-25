import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";
import HospitalHeader from "../../headers/hospital";
import GoogleLogin from 'react-google-login'
import PreLoginHeader from '../../headers/PreLoginHeader'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import {useHistory} from 'react-router-dom'


function HospitalLogin(){
  const [cookies, setCookie, removeCookie] = useCookies(['user']);
  let history = useHistory();

  function TrigerAxios(email){
    axios.get("http://localhost:5004/api/get/hospital?email="+email)
    .then(response =>{
      const id=response.data[0].hId;
      const name =response.data[0].hName;
      console.log(response)
      handleCookie(id,name,email)
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      alert("This Email Is Not Registered")
    })
  }
  function handleCookie(id,name,email){
    setCookie('name',name , { path: '/' });
    setCookie('id', id, { path: '/' });
    setCookie('email',email, { path: '/' }); 
    console.log(cookies)
    history.push("/HospitalOptions")
  }
  const onSuccess = (res) =>{
    console.log("sucess", res.profileObj)
    TrigerAxios(res.profileObj.email);
  }
  const onFailure = (res) =>{
    console.log("failure", res)
    alert("Couldn't Login With Google")
  }
  

      return(
        <div>
          <PreLoginHeader/>
          <div className="login-box">
            <h2>Hospital login</h2>
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

export default HospitalLogin;