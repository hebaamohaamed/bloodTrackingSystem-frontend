
import HospitalHeader from '../../headers/hospital'
import HospitalLogin from '../hospital/login'
import {useHistory} from 'react-router-dom'

function HospitalContent() {
  let history = useHistory();
    return (
      <div>
        <HospitalHeader />
        <h1>Hospital Content</h1>
        <button onClick={()=>{history.push("/home");}}>go to home</button>
        <button onClick={()=>{history.push("/bloodbank");}}>go to bloodbank</button>
        <button onClick={()=>{history.push("/supervision");}}>go to supervision</button>
        <button onClick={()=>{history.push("/user");}}>go to user</button>
      </div>
    );
  }
  
  export default HospitalContent;