import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import axios from 'axios'

function UserHeader() {

  let history = useHistory();
  const [cookies] = useCookies(['user']);
  if(cookies.name == null){
    history.push('/home')
  }
  const id = cookies.id;
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
              console.log(data);  
              var output ="["
              for(var i =0;i<response.data.length;i++){
                var hospital = response.data[i]
                var hospitalStr = JSON.stringify(hospital)
                var type = bloodArray[i].substr(1,bloodArray[i].length-2)
                var sub = hospitalStr.substr(0,hospitalStr.length-1)
                if(type == "")
                  sub = sub + ',"blood":'+'"'+"no blood"+'"}'
                else 
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
            <li className="nav-item">
                <Link className="nav-link" id="help" to="UserOption" >Options</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" id="help" onClick={(event)=>getHospitals(event)}>Search For Blood</Link>
              </li>
              <li><i className="icon fa-2x"><FontAwesomeIcon icon="user"/></i></li>
              <NavDropdown
                  id ="userName"
                  title={id}
                >
                  <NavDropdown.Item><Link to='/UserLogout' >Logout </Link> </NavDropdown.Item>
                </NavDropdown> 
            </ul>
          </div>
        </div>
      </nav>
    
    );
  }
  
  export default UserHeader;