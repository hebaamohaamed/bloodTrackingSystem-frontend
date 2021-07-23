import BloodBankHeader from "../../headers/bloodbank";
import { Component } from "react";
import {Link} from 'react-router-dom'

class BloodBankTrackBloodBagInfo extends Component{
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
            <BloodBankHeader />
            <div class="InfoNedded">
    <h2>Info Needed</h2>
    <form>
      <div class="user-box">
      <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <Link id="trackBagInfoSubmit" to={{pathname: "/bloodBankbloodTracking", data: this.state.bNumber}}>Submit</Link>
    </form>
  </div>
        </div>
        
    );
  }
}
export default BloodBankTrackBloodBagInfo;