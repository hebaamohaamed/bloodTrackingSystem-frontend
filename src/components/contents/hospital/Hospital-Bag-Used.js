import HospitalHeader from "../../headers/hospital";
import {useHistory} from 'react-router-dom'
function hospitalBagUsed(){
return(

    <div>
        <HospitalHeader />
         <div className="new-box">
    <h2>New Patient</h2>
    <form>
      <div className="new-user-box">
        <input type="text" name="" required=""/>
        <label>Enter Patient E-Mail</label>
      </div>
      <div className="new-user-box">
        <input type="text" name="" required=""/>
        <label>Enter Blood Bag ID</label>
      </div>
      <div className="new-user-box">
        <input type="number" name="" required=""/>
        <label>Enter number of Blood Bags</label>
      </div>
      <a id="button1" href="#" >
        Submit
      </a>
    </form>
  </div>
  <div class="existing-box">
    <h2>Existing Patient</h2>
    <form>
      <div className="existing-user-box">
        <input type="text" name="" required=""/>
        <label>Enter Patient E-Mail</label>
      </div>
      <div className="existing-user-box">
        <input type="text" name="" required=""/>
        <label>Enter Blood Bag ID</label>
      </div>
      <div className="existing-user-box">
        <input type="number" name="" required=""/>
        <label>Enter number of Blood Bags</label>
      </div>
      <a id="button2" href="#" >
        Submit
      </a>
    </form>
  </div>
  </div>
   
);
}
export default hospitalBagUsed;