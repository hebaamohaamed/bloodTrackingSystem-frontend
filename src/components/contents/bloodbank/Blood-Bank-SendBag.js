import { Component } from "react";
import BloodBankHeader from "../../headers/bloodbank";
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import axios from 'axios'

class bloodBankSendBags extends Component{
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
    let bloodNumber = null;
    if(this.state.bNumber.includes("+")){
      bloodNumber = this.state.bNumber.replace("+","%2B")
    }
    axios.get(`http://localhost:5000/first/state?id=${bloodNumber}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      alert("Blood Bag State: Under Transportation")
      this.TrigerAxios2(event,bloodNumber);
      console.log("Change State Confirmed")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      
    })
  }
  TrigerAxios2(event,bloodNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    let ownerID = "BB101";
    axios.get(`http://localhost:5000/change/location?id=${bloodNumber}&oid=${ownerID}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      alert("Blood Bag Location: Transportation Car")
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


    button =()=>{
        const button1 = findDOMNode(this.refs.submit);
        $(button1).css("color", "#C31313");
        $(button1).css("background-color", "#FFFAFA");
        $(button1).css("font-weight", "bold");
        $(button1).css("border-radius", "5px");
        $(button1).html("Confirmed")
        $(button1).attr("class","fas fa-check")
        $(button1).css("text-transform","capitalize")
    }
    render(){
    return(
    <div>
        <BloodBankHeader/>
        <div id="BBsendingBloodBag" class="login-box">
    <h2>Info Needed</h2>
    <form>
      <div className="user-box">
        <input type="text" required="" value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="button" href="#" onClick={(event)=>this.TrigerAxios(event)} ref="submit">
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
export default bloodBankSendBags;