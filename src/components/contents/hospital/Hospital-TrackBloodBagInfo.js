import HospitalHeader from "../../headers/hospital";

function hospitalTrackBloodBagInfo(){
    return(
        <div>
            <HospitalHeader />
            <div class="InfoNedded">
    <h2>Info Needed</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="trackBagInfoSubmit" href="#" >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
        </div>
        
    );
}
export default hospitalTrackBloodBagInfo;