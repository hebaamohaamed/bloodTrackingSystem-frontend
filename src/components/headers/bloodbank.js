import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
import {useHistory} from 'react-router-dom'
import HomeContent from '../contents/home'
import BloodBankLogin from '../contents/bloodbank/login'

function BloodBankHeader() {
  let history = useHistory();
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
                <Link className="nav-link" id="help" to="/bloodbank/help">BloodBags</Link>
              </li>
              <li className="nav-item" to="help">
                <Link className="nav-link" id="help" to="/bloodbank/help">Processes</Link>
              </li>
              <li className="nav-item" to="help">
                <Link className="nav-link" id="help" to="/bloodbank/help">Help</Link>
              </li>
              <li><i  className="icon fa-2x" aria-hidden="true"  ><FontAwesomeIcon icon="clinic-medical" /></i></li>
              <li id ="bloodbank">Central BB</li>
            </ul>
          </div>
        </div>
      </nav>
       </div>
    );
  }
  
  export default BloodBankHeader;