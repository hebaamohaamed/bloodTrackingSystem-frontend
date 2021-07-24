import { Component } from "react";
import BloodBankHeader from "../../headers/bloodbank";
import $ from 'jquery'
import { findDOMNode } from 'react-dom';
import axios from 'axios'
import ReactDOM from "react-dom"
import Cookies from 'js-cookie';


class bloodBankSendBags extends Component{
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
    $(message).html("Transporting Blood Bag...")
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
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryTransported(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Blood Bag is Transported")
    $(message).css("color","#1E8449")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryTransportedFail(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Location is not Valid")
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("border-radius","10px")
    $(message).css("font-weight","bold")
    //yellow
  }

  Validation(event){
    event.preventDefault();
    if(this.state.bNumber != null){
    let upper = this.state.bNumber.toUpperCase()
    const RegExp = /^BD\d{3,4}:(AB|A|O|B)[+-]$/g;
    const valid = RegExp.test(upper)
    if(valid == true){
      this.TrigerAxiosFirstState(event)
    }else{
      this.ErrorJquery()
    }
  }
  }

  TrigerAxiosFirstState(event){
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
    axios.get(`http://localhost:5000/first/state?id=${bloodNumber}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      this.JqueryWaiting();
      this.TrigerAxiosChangeLocation(event,bloodNumber);
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
    let ownerID = this.state.cookie;
    axios.get(`http://localhost:5000/change/location?id=${bloodNumber}&oid=${ownerID}&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      this.JqueryTransported();
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      this.JqueryTransportedFail();
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
        <BloodBankHeader/>
        <div id="BBsendingBloodBag" class="login-box">
        <div ref="msg"></div>
        <br></br>
    <h2>Info Needed</h2>
    <form>
      <div className="user-box">
        <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
        <label>Enter Blood Bag ID</label>
      </div>
      <a id="button" href="#" onClick={(event)=>this.Validation(event)} ref="confirm">
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