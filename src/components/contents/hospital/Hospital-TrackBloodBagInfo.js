import HospitalHeader from "../../headers/hospital";
import {Component} from 'react'
const TrigerAxios = require("./Hospital-TrackingBlood")

class hospitalTrackBloodBagInfo extends Component{
  constructor(props){
    super(props)
    this.state={
      bNumber: null,
    }
  }
  handleInputChange(value){
    this.setState({
      bNumber: value
    })
  }

    render(){
    return(
        <div>
            <HospitalHeader />
            <div class="InfoNedded">
    <h2>Info Needed</h2>
    <form>
      <div class="user-box">
        <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="trackBagInfoSubmit" href="/HospitalTrackingBlood" >
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
}
export default hospitalTrackBloodBagInfo;