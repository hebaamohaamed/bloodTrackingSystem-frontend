import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function BloodBankHeader() {
    return (
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
                <a className="nav-link">Home
                      <span className="sr-only">(current)</span>
                    </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" id="help" >Help</a>
              </li>
              <li><i  id="icon" aria-hidden="true"  ><FontAwesomeIcon icon="clinic-medical" /></i></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
  
  export default BloodBankHeader;