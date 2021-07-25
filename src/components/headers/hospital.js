import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import axios from 'axios'



function HospitalHeader() {
  let history = useHistory();
  const [cookies] = useCookies(['user']);
  if(cookies.name == null){
    history.push('/home')
  }
  const name = cookies.name;
  const id = cookies.id;

  function AxiosB(event){
    event.preventDefault();
    axios.get(`http://localhost:5001/query/hospital/blood?oid=${id}`)
		.then(response =>{
		  let output = (response.data.output);
		  console.log("All Blood is fetched")
		  console.log(output)
		  process = output
		  history.push('/HospitalRetrieveBloodBags')
	
		})
		.catch(error=>{
		  console.log("TEST ERROR", error)
		 
  })
}

  function AxiosP(event){
    event.preventDefault();
    axios.get(`http://localhost:5001/query/hospital/process?oid=${id}`)
		.then(response =>{
		  let output = (response.data.output);
		  console.log("All Processes is fetched")
		  console.log(output)
		  process = output
		  history.push('/HospitalRetrieveProcesses')
	
		})
		.catch(error=>{
		  console.log("TEST ERROR", error)
		 
  })

  }

    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="hospitalNav">
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
                <Link  className="nav-link" id="help" to="/HospitalOptions" >Options</Link>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="boodbags" onClick={(event)=>AxiosB(event)} >BloodBags</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="processes" onClick={(event)=>AxiosP(event)}>Processes</a>
              </li>
              <li><i className="icon fa-2x"><FontAwesomeIcon icon="hospital"/></i></li>
              <NavDropdown
                  id ="hospital"
                  title={name}
                >
                  <NavDropdown.Item><Link to='/HospitalLogout' >Logout </Link> </NavDropdown.Item>
                </NavDropdown> 
            </ul>
          </div>
        </div>
      </nav>
    );
  }

  
  export default HospitalHeader;