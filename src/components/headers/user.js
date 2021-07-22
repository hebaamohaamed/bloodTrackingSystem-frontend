import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {Link} from 'react-router-dom'
import axios from 'axios'

function UserHeader() {
  
  function getBlood(event,ID){
    event.preventDefault();
    axios.get(`http://localhost:5003/query/hospital/blood?oid=${ID}`)
    .then(response =>{
      var blood = response.data
      console.log(blood.data)
      console.log("All Blood Fetched")
      
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      alert("Can't fetch Blood")
    })

  }
  function getHospitals(event){
    event.preventDefault();
    axios.get("http://localhost:4000/api/get/hospitals")
    .then(response =>{
      var data = '['
      for(var i=0;i<)
      var ID = response.data[0].hId
      console.log(ID)
      console.log("All Hospitals Fetched")
      getBlood(event, ID)
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      alert("Can't fetch Hsopitals")
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
                <Link className="nav-link" id="help" onClick={(event)=>writeToFile(event)}>Search For Blood</Link>
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