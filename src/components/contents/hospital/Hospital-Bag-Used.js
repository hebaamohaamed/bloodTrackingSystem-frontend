import HospitalHeader from "../../headers/hospital";
import {useHistory} from 'react-router-dom'
import { Component } from "react";
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import axios from "axios"
import ReactDOM from "react-dom"
import Cookies from 'js-cookie';


class hospitalBagUsed extends Component{
  constructor(props){
    super(props)
    this.state={
      bNumber: null,
      patientEmail: null,
      go: true,
      cookie: Cookies.get('id')
    }
  }
  ErrorJquery = () =>{
    //blood number invalid format
    const button = ReactDOM.findDOMNode(this.refs.confirm)
    $(button).css("color","red")
  }

  ValidationBlood_New(event){
    event.preventDefault();
    let upper = this.state.bNumber.toUpperCase()
    const RegExp = /^BD\d{3,4}:(AB|A|O|B)[+-]$/g;
    const valid = RegExp.test(upper)
    if(valid == true){
      this.ValidateNew(event);
    }else{
      this.ErrorJquery()
    }
  }
  ValidationBlood_Exist(event){
    event.preventDefault();
    let upper = this.state.bNumber.toUpperCase()
    const RegExp = /^BD\d{3,4}:(AB|A|O|B)[+-]$/g;
    const valid = RegExp.test(upper)
    if(valid == true){
      this.ValidateExisting(event)
    }else{
      this.ErrorJquery()
    }
  }
  JqueryEmail(){
    const email = ReactDOM.findDOMNode(this.refs.email) 
    $(email).css("color","red"); 
        
  }
  JqueryNewFail(){
    const New = ReactDOM.findDOMNode(this.refs.New) 
    $(New).css("color","red"); 
    //html already exist
        
  }
  JqueryExistFail(){
    const exist = ReactDOM.findDOMNode(this.refs.exist) 
    $(exist).css("color","red");
    //html donor doens't exist
        
  }
  JqueryWaiting(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Blood Bag is taking by Patient...")
    //yellow
  }
  JqueryWaitingFail(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Current State is not Valid")
    //yellow
  }
  JqueryUsed(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Blood Bag is taken...")
    //yellow
  }
  JqueryUsedFail(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Location is not Valid")
    //yellow
  }
  JqueryPass(){
    alert("jquery")
    let blood = null
    if(this.state.bNumber.includes("%")){
      blood = this.state.bNumber.replace("%2B","+")
    }else{
      blood =this.state.bNumber
    }
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html(`Submitted with <br> Bag ID: ${blood}`)
    //green
  }

  ValidateExisting(event){
    event.preventDefault();  
    let valid = true;
    const RegExp = /^[\w-\.]+@(gmail.com)$/g
    if(!RegExp.test(this.state.patientEmail) ||this.state.patientEmail === null){
      valid = false
      this.JqueryEmail()
    }
    if(valid){
    this.TrigerAxiosLastDIN(event);
    }
  }
  ValidateNew(event){
    event.preventDefault();  
    let valid = true;
    const RegExp = /^[\w-\.]+@(gmail.com)$/g
    if(!RegExp.test(this.state.patientEmail || this.state.patientEmail === null)){
      valid = false
      this.JqueryEmail()
    }
    if(valid){
    this.TrigerdbCheck2(event);
    }
  }
  TrigerdbCheck2(event){
    event.preventDefault();
    axios.get("http://localhost:5004/check/patient?email="+this.state.patientEmail)
    .then(response =>{
      const Id = response.data[0].pID;
      this.setState({go: false})
      this.JqueryNewFail()
      this.checkGo(event);
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
    this.checkGo(event)
  }
  checkGo(event){
    event.preventDefault();
    if(this.state.go){
      this.TrigerAxiosLastUser(event)
    }
  }
  TrigerAxiosLastUser(event){
    event.preventDefault();
    axios.get("http://localhost:5003/get/last")
    .then(response =>{
      let lastNumber = Object.values(response.data);
      this.TrigerdbInsert(event,lastNumber);
      lastNumber = lastNumber +1
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }
  TrigerdbInsert(event, lastNumber){
    event.preventDefault();
    const finalNumber = Number(lastNumber) +1
    const pID = "R" + finalNumber
    axios.post("http://localhost:5004/insert/patient", {
      ID: pID,
      Email: this.state.patientEmail,
    })
    .then(response =>{
      this.TrigerAxiosThirdState(event,pID,lastNumber);
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }

  TrigerAxiosLastDIN(event){
    event.preventDefault();
    axios.get("http://localhost:5001/get/last")
    .then(response =>{
      let lastNumber = Object.values(response.data);
      this.TrigerdbCheck(event,lastNumber);
      lastNumber = lastNumber +1
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }

  TrigerdbCheck(event,lastNumber){
    event.preventDefault();
    axios.get("http://localhost:5004/check/patient?email="+this.state.patientEmail)
    .then(response =>{
      const Id = response.data[0].pID;
      this.TrigerAxiosThirdState(event,Id,lastNumber);
    })
    .catch(error=>{
      console.log("TEST ERROR", error) 
      this.JqueryExistFail();     
    })
  }

  TrigerAxiosThirdState(event, pID,lastNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    let bloodNumber = null;
    if(this.state.bNumber.includes("+")){
      bloodNumber = this.state.bNumber.replace("+","%2B")
    }
    else{
      bloodNumber = this.state.bNumber
    }
    axios.get(`http://localhost:5001/third/state?id=${bloodNumber}&pid=${pID}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      this.JqueryWaiting();
      this.TrigerAxiosChangeLocation(event,pID,lastNumber,bloodNumber);
      console.log("Change State Confirmed")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      this.JqueryWaitingFail();
    })

  }
  TrigerAxiosChangeLocation(event, pID,lastNumber,bloodNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    axios.get(`http://localhost:5001/change/location?id=${bloodNumber}&loc=PATIENT&oid=${pID}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      this.JqueryUsed();
      this.TrigerAxiosCreateProcess(event,pID,lastNumber,bloodNumber);
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      this.JqueryUsedFail();
    })
  }
  TrigerAxiosCreateProcess(event,pID,lastNumber,bloodNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time  
    const finalNumber = Number(lastNumber) +1
    let processID = "P" + finalNumber 
    let ownerID = this.state.cookie;
    alert(this.state.cookie)
    axios.get(`http://localhost:5001/create/process?pin=${processID}&id=${bloodNumber}&uid=${pID}&oid=${ownerID}&type=recieve&time=${currentDate}`)
    .then(response =>{
      alert("done")
  
      this.JqueryPass();
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
  render(){
return(

    <div>
        <HospitalHeader />
         <div id="usedBagInfo">
          <div ref="msg">hiii</div>
    <h2>Used Bag Info</h2>
    <form>
      <div className="new-user-box">
        <input type="text" required ref = "email" value={this.state.patientEmail} onChange={(e) =>{this.handleInputChange2(e.target.value)}}/>
        <label>Enter Patient E-Mail</label>
      </div>
      <div className="new-user-box">
        <input type="text" required ref = "confirm" value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <div className='bagUsedBottons'>
        <a id="bagUsedNew" href="#" onClick={(event)=>this.ValidationBlood_New(event)} ref="New" >New Patient</a>
        <a id="bagUsedExisting" href="#" onClick={(event)=>this.ValidationBlood_Exist(event)} ref="exist" >Existing Patient</a>
      </div>
    </form>
  </div>
  </div>
   
);
}
}
export default hospitalBagUsed;