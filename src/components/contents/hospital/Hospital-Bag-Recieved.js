import { findDOMNode } from 'react-dom';
import {useHistory} from 'react-router-dom'
import HospitalHeader from '../../headers/hospital'
import $ from 'jquery'
import { Component } from 'react';


class hospitalBagRecieved extends Component{
  handleButton = ()=>{
    const button = findDOMNode(this.refs.confirm);
    $(button).css("color", "#C31313");
    $(button).css("background-color", "#FFFAFA");
    $(button).css("font-weight", "bold");
    $(button).css("border-radius", "5px");
    $(button).html("Confirmed");
    $(button).attr("class","fas fa-check");
    $(button).css("text-transform","capitalize");
  }
 render(){
return(
    <div>
    <HospitalHeader/>
    <div className="InfoNedded" >
    <h2>Recieved Bag Info</h2>
    <form>
      <div className="user-box">
        <input type="text" name="" required/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="bagRecievedConfirm" onClick={this.handleButton} ref="confirm" >
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
}

export default hospitalBagRecieved;