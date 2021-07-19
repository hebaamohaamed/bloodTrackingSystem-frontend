import {HashLink as Link} from 'react-router-hash-link'
import {useHistory} from 'react-router-dom'
function HomeHeader() {
  let history = useHistory();
  return (
    <nav id="homeHeader" className="navbar navbar-expand-lg navbar-light bg-gradient-danger  fixed-top">
    <div className="container"> 
      <a className="navbar-brand" id="navbar-brand1" href="/">Blood</a>
      <a className="navbar-brand" id="navbar-brand2" href="/">Tracking</a>
      <a className="navbar-brand" id="navbar-brand3" href="/">System</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
      <div className="collapse navbar-collapse" id="navbarResponsive">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link smooth className="nav-link" to="#home">Home
                </Link>
          </li>
          <li className="nav-item">
            <Link smooth className="nav-link" to="#logins">Login</Link>
          </li>
          <li className="nav-item ">
            <Link smooth className="nav-link" to="#about">About</Link>
          </li>
          <li className="nav-item">
            <Link smooth className="nav-link" to="#ourTeam">Our team</Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default HomeHeader;
