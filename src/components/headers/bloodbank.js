import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import {NavDropdown} from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import axios from 'axios'


function BloodBankHeader() {
  let history = useHistory();
  const [cookies] = useCookies(['user']);
  // if(cookies.name == null){
  //   history.push('/home')
  // }
  const name = cookies.name;
  const id = cookies.id;

  function AxiosB(event){
    event.preventDefault();
    axios.get(`http://localhost:5000/query/bloodbank/blood?oid=${id}`)
		.then(response =>{
		  let output = (response.data.output);
		  console.log("All Blood is fetched")
		  console.log(output)
		  process = output
		  history.push('/bloodBankbloodBagRetrieve')
	
		})
		.catch(error=>{
		  console.log("TEST ERROR", error)
		 
  })

  }

  function AxiosP(event){
    event.preventDefault();
    axios.get(`http://localhost:5000/query/bloodbank/process?oid=${id}`)
		.then(response =>{
		  let output = (response.data.output);
		  console.log("All Processes is fetched")
		  console.log(output)
		  process = output
		  history.push('/bloodBankretrieveProcesses')
	
		})
		.catch(error=>{
		  console.log("TEST ERROR", error)
		 
  })

  }

    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="bloodbankNav">
        <div className="container">
          <a className="navbar-brand" id="navbar-brand1" >Blood</a>
          <a className="navbar-brand" id="navbar-brand2" >Tracking</a>
          <a className="navbar-brand" id="navbar-brand3" >System</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <Link className="nav-link">Home
                      <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item" to="help">
                <Link className="nav-link" id="help" onClick={(event)=>AxiosB(event)}>BloodBags</Link>
              </li>
              <li className="nav-item" to="help">
                <Link className="nav-link" id="help" onClick={(event)=>AxiosP(event)}>Processes</Link>
              </li>
              <li className="nav-item" to="help">
                <Link className="nav-link" id="help" to="/bloodBankOptions">Options</Link>
              </li>
              <li><i  className="icon fa-2x" aria-hidden="true"  ><FontAwesomeIcon icon="clinic-medical" /></i></li>
              <li id="dropdown">
              <NavDropdown
                  id ="bloodbank"
                  title={name}
                >
                  <NavDropdown.Item><Link to='/bloodBankLogout' >Logout </Link> </NavDropdown.Item>
                </NavDropdown> 
                </li>
            </ul>
          </div>
        </div>
      </nav>
       </div>
    );
  }
  
  export default BloodBankHeader;