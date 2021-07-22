import HospitalHeader from "../../headers/hospital";
import {Component} from 'react'
import {Link} from 'react-router-dom'
import { createBrowserHistory } from 'history';


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
      <Link to={{pathname: "/HospitalTrackingBlood", data: this.state.bNumber}}>Submit</Link>
      {/* <a id="trackBagInfoSubmit" honClick={()=> history.push(`/HospitalTrackingBlood/${this.state.bNumber}`)}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a> */}
    </form>
  </div>
        </div>
        
    );
    }
}

export default hospitalTrackBloodBagInfo;