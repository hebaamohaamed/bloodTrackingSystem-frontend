import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {NavDropdown} from 'react-bootstrap'
import { useCookies } from 'react-cookie';
import axios from 'axios'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'


function SuperHeader() {
  let history = useHistory();
  const [cookies] = useCookies(['user']);
  if(cookies.name == null){
    history.push('/home')
  }
  const name = cookies.name;
  const id = cookies.id;
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-white fixed-top" id="superVisionNav">
    <div class="container">
      <a class="navbar-brand" href="#" id="navbar-brand1" >Blood</a>
      <a class="navbar-brand" href="#" id="navbar-brand2">Tracking</a>
      <a class="navbar-brand" href="#" id="navbar-brand3">System</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
      <div class="collapse navbar-collapse" id="navbarResponsive">
        <ul class="navbar-nav ml-auto">
          
          <li><i className="superVisionIcon fa-2x"><FontAwesomeIcon icon="university"/></i></li>
          <NavDropdown
                  id ="superVisionName"
                  title={name}
                >
                  <NavDropdown.Item><Link to='/SupervisionLogout' >Logout </Link> </NavDropdown.Item>
                </NavDropdown> 
        </ul>
      </div>
    </div>
  </nav>

    );
  }
  
  export default SuperHeader;