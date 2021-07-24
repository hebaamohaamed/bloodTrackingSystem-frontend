import { findDOMNode } from 'react-dom';
import {useHistory} from 'react-router-dom'
import HospitalHeader from '../../headers/hospital'
import $ from 'jquery'
import { Component } from 'react';
import axios from 'axios'
import ReactDOM from "react-dom"
import Cookies from 'js-cookie';




class hospitalBagRecieved extends Component{

  constructor(props){
    super(props)
    this.state={
      bNumber: null,
      cookie: Cookies.get('id')
    }
  }
  ErrorJquery = () =>{
    //blood number invalid format
    const button = ReactDOM.findDOMNode(this.refs.confirm)
    $(button).css("transform","scale(1.1)")
    $(button).html("Invalid ID format")
    $(button).css("text-transform","capitalize")
    $(button).css("background-color","white")
    $(button).css("color","#C31313")
    $(button).css("border-radius","10px")
  }
  
  JqueryWaiting(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Delievering Blood Bag...")
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryWaitingFail(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Current State is not Valid")
    $(message).css("color","#E74C3C")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryDelievered(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Blood Bag is Delievered")
    $(message).css("color","#1E8449")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryDelieveredFail(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Location is not Valid")
    //yellow
  }

  Validation(event){
    event.preventDefault();
    let upper = this.state.bNumber.toUpperCase()
    const RegExp = /^BD\d{3,4}:(AB|A|O|B)[+-]$/g;
    const valid = RegExp.test(upper)
    if(valid == true){
      this.TrigerAxiosSecondState(event)
    }else{
      this.ErrorJquery()
    }
  }


  TrigerAxiosSecondState(event){
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
    axios.get(`http://localhost:5001/second/state?id=${bloodNumber}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      console.log(output)
      this.JqueryWaiting();
      this.TrigerAxiosChangeLocation(event, bloodNumber);
      console.log("Change State Confirmed")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)  
      this.JqueryWaitingFail();    
    })
  
  }
  TrigerAxiosChangeLocation(event,bloodNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    let ownerId = this.state.cookie;
    axios.get(`http://localhost:5001/change/location?id=${bloodNumber}&loc=HOSPITAL&oid=${ownerId}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      this.JqueryDelievered();
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      this.JqueryDelieveredFail();
    })
  }
  handleInputChange(value){
    this.setState({
      bNumber: value
    })
  }

 render(){

return(
    <div>
    <HospitalHeader/>
    <div className="InfoNedded" >
    <div ref="msg"></div>
    <br></br>
    <h2>Recieved Bag Info</h2>
    <form>
      <div className="user-box">
        <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="bagRecievedConfirm" onClick={(event)=>this.Validation(event)} ref="confirm" >
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