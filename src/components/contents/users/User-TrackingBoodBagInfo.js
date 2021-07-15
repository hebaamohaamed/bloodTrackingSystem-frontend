import UserHeader from "../../headers/user";

function userTrackingBoodBagInfo(){
    return(
        <div>
            <UserHeader />
            <div class="login-box">
    <h2>Info Needed</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required=""/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="button" href="User-TrackingBlood.html" >
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
export default userTrackingBoodBagInfo;