import { findDOMNode } from 'react-dom';
import {useHistory} from 'react-router-dom'
import HospitalHeader from '../../headers/hospital'
import $ from 'jquery'
import { Component } from 'react';
import axios from 'axios'


class hospitalBagRecieved extends Component{

  constructor(props){
    super(props)
    this.state={
      bNumber: null,
    }
  }

  TrigerAxios(event){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    axios.get(`http://localhost:5001/second/state?id=${this.state.bNumber}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      console.log(output)
      alert("Blood Bag State: Delievered")
      this.TrigerAxios2(event);
      console.log("Change State Confirmed")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  
  }
  TrigerAxios2(event){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    let ownerId = "BB101"; 
    axios.get(`http://localhost:5001/change/location?id=${this.state.bNumber}&loc=HOSPITAL&oid=${ownerId}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      alert("Blood Bag Location: Hospital")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
    })
  }
  handleInputChange(value){
    this.setState({
      bNumber: value
    })
  }



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
        <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="bagRecievedConfirm" onClick={(event)=>this.TrigerAxios(event)} ref="confirm" >
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