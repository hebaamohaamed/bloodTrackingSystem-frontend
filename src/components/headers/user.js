import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useState } from 'react';

function UserHeader() {

  let history = useHistory();
  function getHospitals(event){
    event.preventDefault();
    var finalOut = "["
    axios.get(`http://localhost:5003/query/hospital/blood`)
        .then(response =>{
          var blood = response.data.out.substr(0,response.data.out.length-1)
          var bloodArray = blood.split(":")
          console.log(bloodArray)
          axios.get("http://localhost:5004/api/get/hospitals")
            .then(response =>{
              var data =response.data
              //console.log(response.data)
              console.log("All Hospitals Fetched")
              var output ="["
              for(var i =0;i<response.data.length;i++){
                var hospital = response.data[i]
                var hospitalStr = JSON.stringify(hospital)
                var type = bloodArray[i].substr(1,bloodArray[i].length-2)
                var sub = hospitalStr.substr(0,hospitalStr.length-1)
                sub = sub + ',"blood":'+'"'+type+'"}'
                if(finalOut.length==1)
                  finalOut = finalOut + sub
                else
                  finalOut = finalOut + "," + sub  
            }
            finalOut = finalOut +"]"
            console.log(JSON.parse(finalOut));   
            axios.get(`http://localhost:5004/api/write/file?file=${finalOut}`)
            .then(response =>{
               console.log("data written")
               history.push("/ViewHospitalBloodType")            
              })
            .catch(error=>{
              console.log("TEST ERROR", error)
              alert(`http://localhost:5004/api/write/file?file=${finalOut}`)
            })

          })
            .catch(error=>{
              console.log("TEST ERROR", error)
              alert("Can't fetch Hsopitals")
          })
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
    })
  }


    return (
     
       <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="userNav">
        <div className="container">
          <a className="navbar-brand" href="#" id="navbar-brand1" >Blood</a>
          <a className="navbar-brand" href="#" id="navbar-brand2" >Tracking</a>
          <a className="navbar-brand" href="#" id="navbar-brand3" >System</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#" >Home
                      <span className="sr-only">(current)</span>
                    </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="help" onClick={(event)=>getHospitals(event)}>Search For Blood</Link>
              </li>
              <li><i className="userIcon fa-2x"><FontAwesomeIcon icon="user"/></i></li>
          <li id ="userName">UserName</li>
            </ul>
          </div>
        </div>
      </nav>
    
    );
  }
  
  export default UserHeader;