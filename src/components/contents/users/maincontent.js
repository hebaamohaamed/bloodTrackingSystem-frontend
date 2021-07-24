import {useHistory} from 'react-router-dom'
import UserHeader from '../../headers/user'

function UserContent() {
  let history = useHistory();
    return (
      <div>
        <UserHeader />
        <br></br><br></br><br></br><br></br><br></br><br></br>
        <button onClick={()=>{history.push("/UserLogin");}}>User Login</button>
        <button onClick={()=>{history.push("/UserOption");}}>User Option</button>
        <button onClick={()=>{history.push("/UserRetrieveBloodBags");}}>Retrieve Blood Bags</button>
        <button onClick={()=>{history.push("/UserTrackingBlood");}}>Tracking Blood Bags</button>
        <button onClick={()=>{history.push("/ViewHospitalBloodType");}}>View Hospital Blood type</button>
        <button onClick={()=>{history.push("/userBagHistory");}}>Bag history</button>
      </div>
    );
  }
  
  export default UserContent;