import BloodBankHeader from "../../headers/bloodbank";

function BloodBankTrackBloodBagInfo(){
    return(
        <div>
            <BloodBankHeader />
            <div class="login-box">
    <h2>Info Needed</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="button" href="#" >
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
export default BloodBankTrackBloodBagInfo;