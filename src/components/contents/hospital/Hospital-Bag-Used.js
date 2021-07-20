import HospitalHeader from "../../headers/hospital";
import {useHistory} from 'react-router-dom'
import { Component } from "react";
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import axios from "axios"

class hospitalBagUsed extends Component{
  constructor(props){
    super(props)
    this.state={
      bNumber: null,
      patientEmail: null,
    }
  }

  TrigerAxios(event){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    axios.get(`http://localhost:5001/third/state?id=${this.state.bNumber}&pid=${this.state.patientEmail}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      alert("Blood Bag: Used")
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
    axios.get(`http://localhost:5001/change/location?id=${this.state.bNumber}&loc=PATIENT&oid=${this.state.patientEmail}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      this.TrigerAxios3(event);
      console.log("RESPONSE", objectOutput.DIN);
      alert("Blood Bag Location: The Patient")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
    })
  }
  TrigerAxios3(event){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    let processID = "P9653"
    let ownerID = "H101"
    axios.get(`http://localhost:5001/create/process?pin=${processID}&id=${this.state.bNumber}&uid=${this.state.patientEmail}&oid=${ownerID}&type=recieve&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      console.log("RESPONSE", objectOutput.DIN);
      alert("Blood Bag Process: Recieved")
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
  handleInputChange2(value2){
    this.setState({
      patientEmail: value2
    })
  }

    usedButton2 = () =>{
      const b = findDOMNode(this.refs.submit2);
        $(b).css("color", "#C31313");
        $(b).css("background-color", "#FFFAFA");
        $(b).css("font-weight", "bold");
        $(b).css("border-radius", "5px");
        $(b).html("Submitted with ID:U5826956");
        $(b).css("text-transform","capitalize");
        $(b).attr("class","fas fa-check");
    }
    usedButton =() =>{
      const b2 = findDOMNode(this.refs.submit);
            $(b2).css("color", "#C31313");
            $(b2).css("background-color", "#FFFAFA");
            $(b2).css("font-weight", "bold");
            $(b2).css("border-radius", "5px");
            $(b2).html("Submitted")
            $(b2).css("text-transform","capitalize")
            $(b2).attr("class","fas fa-check")
    }
  render(){
return(

    <div>
        <HospitalHeader />
         <div id="usedBagInfo">
    <h2>Used Bag Info</h2>
    <form>
      <div className="new-user-box">
        <input type="text" required value={this.state.patientEmail} onChange={(e) =>{this.handleInputChange2(e.target.value)}}/>
        <label>Enter Patient E-Mail</label>
      </div>
      <div className="new-user-box">
        <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <div className="new-user-box">
        <input type="number" name="" required/>
        <label>Enter number of Blood Bags</label>
      </div>
      <a id="button1" href="#" onClick={(event)=>this.TrigerAxios(event)} ref="submit2" >
        Submit
      </a>
    </form>
  </div>
  </div>
   
);
}
}
export default hospitalBagUsed;