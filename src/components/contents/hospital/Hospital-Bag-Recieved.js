import {useHistory} from 'react-router-dom'
import HospitalHeader from '../../headers/hospital'
function hospitalBagRecieved(){

return(
    <div>
    <HospitalHeader/>
    <div class="login-box">
    <h2>Info Needed</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required=""/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="button" href="#" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Confirm
      </a>
    </form>
  </div>
  </div>


);
}
export default hospitalBagRecieved;