import {useHistory} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SuperHeader() {
  let history = useHistory();
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
          <li class="nav-item active">
            <a class="nav-link" href="#" >Home
                  <span class="sr-only">(current)</span>
                </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" >Help</a>
          </li>
          <li><i className="superVisionIcon fa-2x"><FontAwesomeIcon icon="university"/></i></li>
          <li id ="superVisionName">Wezaret El-Seha</li>
        </ul>
      </div>
    </div>
  </nav>

    );
  }
  
  export default SuperHeader;