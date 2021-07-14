
import HospitalHeader from '../../headers/hospital'
import HospitalLogin from '../hospital/login'
import {Route, useHistory , BrowserRouter as Router} from 'react-router-dom'

function HospitalContent() {
  let history = useHistory();
    return (
      <div>
        <Router>
          <HospitalHeader />
          <br></br><br></br><br></br><br></br>
            <button onClick={()=>{history.push("/HospitalBagRecieved");}}>Hospital Bags Recieved</button>
            <button onClick={()=>{history.push("/HospitalBagUsed");}}>Hospital Bags Used</button>
            <button onClick={()=>{history.push("/HospitalLogin");}}>Hospital Login</button>
        </Router>

       
      </div>
    );
  }
  
  export default HospitalContent;