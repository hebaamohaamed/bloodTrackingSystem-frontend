import ReactDOM from "react-dom"
import $ from 'jquery' 
import { Component } from 'react';
import { render } from '@testing-library/react';
import { findDOMNode } from 'react-dom';
import BloodBankHeader from '../../headers/bloodbank';
import axios from 'axios'
import Cookies from 'js-cookie';


class BloodBankDonation extends Component {
  constructor(props){
    super(props)
    this.state={
      Date: null,
      Expired: null,
      Test: null,
      Temperature: null,
      milliMeters: null,
      Type: null,
      donorEmail: null,
      bloodNumber: null,
      donorID: null,
      go: true,
      cookie: Cookies.get('id')
    }
  }
 

  //jquery
  JqueryDate(){
    const date = ReactDOM.findDOMNode(this.refs.dates)  
    $(date).css("color","red");
  }
  JqueryTemp(){
    const temp = ReactDOM.findDOMNode(this.refs.temp)  
    $(temp).css("color","red");
  }
  JqueryMl(){
    const ML = ReactDOM.findDOMNode(this.refs.ML)  
    $(ML).css("color","red");
  }
  JqueryEmail(){
    const email = ReactDOM.findDOMNode(this.refs.email) 
    $(email).css("color","red");      
  }
  JqueryTest(){
    const test = ReactDOM.findDOMNode(this.refs.test) 
    $(test).css("color","red"); 
  }
  JqueryType(){
    const type = ReactDOM.findDOMNode(this.refs.type) 
    $(type).css("color","red");        
  }
  JqueryNewFail(){
    const New = ReactDOM.findDOMNode(this.refs.New) 
    $(New).css("transform","scale(1.1)")
    $(New).html("Already Existed")
    $(New).css("text-transform","capitalize")
    $(New).css("background-color","grey")
    $(New).css("color","white")
    $(New).css("border-radius","10px")
    //html already exist
        
  }
  JqueryExistFail(){
    const exist = ReactDOM.findDOMNode(this.refs.exist) 
    $(exist).css("transform","scale(1.1)")
    $(exist).html("Doesn't exist")
    $(exist).css("text-transform","capitalize")
    $(exist).css("background-color","grey")
    $(exist).css("color","white")
    $(exist).css("border-radius","10px")
    //html donor doens't exist
        
  }
  JqueryWaiting(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Creating Blood Bag...")
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("font-weight","bold")
  }
  JqueryBlood(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Blood Bag IS Created...")
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryProcess(){
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html("Donation Is Created...")
    $(message).css("color","#F39C12")
    $(message).css("background-color","white")
    $(message).css("font-size","large")
    $(message).css("text-align","center")
    $(message).css("font-weight","bold")
    //yellow
  }
  JqueryPass(){

    let blood = null
    if(this.state.bloodNumber.includes("%")){
      blood = this.state.bloodNumber.replace("%2B","+")
    }else{
      blood =this.state.bloodNumber
    }
    const message = ReactDOM.findDOMNode(this.refs.msg);
    $(message).html(`Submitted with Bag ID: ${blood}`)
    $(message).css("color","#1E8449")
    $(message).css("background-color","white")
    $(message).css("font-size","medium")
    $(message).css("text-align","center")
    $(message).css("font-weight","bold")
    //green
  }


  ValidateExisting(event){
    event.preventDefault();  
    let valid = true;
    const RegExp = /^[\w-\.]+@(gmail.com)$/g
    if(this.state.Temperature > 5 || this.state.Temperature === null){
      valid = false
      this.JqueryTemp()
    }
    if(this.state.milliMeters > 500 || this.state.milliMeters === null){
      valid = false
       this.JqueryMl()
    }
    if(this.state.Expired === null || this.state.Date === null){
      alert("Both Dates are Required")
      valid = false
      this.JqueryDate()
      
    }else if(this.state.Expired < this.state.Date ){
      alert("Expire Date can't be before Donation Date")
      valid = false
      this.JqueryDate()
    }
    if(!RegExp.test(this.state.donorEmail) ||this.state.donorEmail === null){
      valid = false
      this.JqueryEmail()
    }
    if(this.state.Test === null ){
      valid = false
      this.JqueryTest()
    }if(this.state.Type === null ){
      valid = false
      this.JqueryType()
    }
    if(valid){
    this.TrigerdbCheck(event);
    }
  }
  ValidateNew(event){
    event.preventDefault();  
    let valid = true;
    const RegExp = /^[\w-\.]+@(gmail.com)$/g
    if(this.state.Temperature > 5 || this.state.Temperature === null){
      valid = false
      this.JqueryTemp()
    }
    if(this.state.milliMeters > 500 || this.state.milliMeters==null){
      valid = false
       this.JqueryMl()
    }
    if(this.state.Expired === null || this.state.Date === null){
      alert("Both Dates are Required")
      valid = false
      this.JqueryDate()
      
    }else if(this.state.Expired < this.state.Date ){
      alert("Expire Date can't be before Donation Date")
      valid = false
      this.JqueryDate()
    }
    if(!RegExp.test(this.state.donorEmail) || this.state.donorEmail === null){
      valid = false
      this.JqueryEmail()
    }
    if(this.state.Test === null ){
      valid = false
      this.JqueryTest()
    }if(this.state.Type === null ){
      valid = false
      this.JqueryType()
    }
    if(valid){
    this.TrigerdbCheck2(event);
    }
  }

  TrigerdbCheck(event){
    event.preventDefault();
    axios.get("http://localhost:5004/check/donor?email="+this.state.donorEmail)
    .then(response =>{
      const donorId = response.data[0].dID;
      this.JqueryWaiting()
      this.TrigerAxioslastDIN(event,donorId);
    })
    .catch(error=>{
      console.log("TEST ERROR", error)  
      this.JqueryExistFail();   
    })
  }
  TrigerdbCheck2(event){
    event.preventDefault();
    axios.get("http://localhost:5004/check/donor?email="+this.state.donorEmail)
    .then(response =>{
      let Id = response.data[0].dID;
      this.setState({donorID:Id});
      this.JqueryNewFail();
      this.setState({go: false})
      this.checkGo(event)
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
    axios.get("http://localhost:5000/get/last")
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
    const dID = "D" + finalNumber
    axios.post("http://localhost:5004/insert/donor", {
      ID: dID,
      Email: this.state.donorEmail,
    })
    .then(response =>{
      this.JqueryWaiting();
      this.TrigerAxioslastDIN(event,dID);
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }

  TrigerAxioslastDIN(event,dID){
    event.preventDefault();
    axios.get("http://localhost:5000/get/last")
    .then(response =>{
      let lastDIN = Object.values(response.data);
      this.TrigerAxiosCreateBag(event,dID,lastDIN);
      lastDIN = lastDIN +1
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }

  
  TrigerAxiosCreateBag(event, dID, lastDIN){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'-'+(currentDate2.getMonth()+1) +'-'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    let ownerID = this.state.cookie;
    const finalNumber = Number(lastDIN) +1
    let DIN = "BD" + finalNumber
    axios.get(`http://localhost:5000/create/bag?din=${DIN}&mm=${this.state.milliMeters}&type=${this.state.Type}&date=${this.state.Date}&expired=${this.state.Expired}&test=${this.state.Test}&did=${dID}&temp=${this.state.Temperature}&time=${currentDate}&oid=${ownerID}`)
    .then(response =>{
      let output = Object.values(response.data);
      this.JqueryBlood();
      this.TrigerAxiosCreateProcess(event,DIN,dID,lastDIN);
      
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      
    })
  }


  TrigerAxiosCreateProcess(event, DIN, dID,lastDIN){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    const finalNumber = Number(lastDIN) +1 
    let PIN = "P" + finalNumber
    let ownerID = this.state.cookie;
    let bNumber = DIN + ":" + this.state.Type
    this.setState({bloodNumber: bNumber})
    axios.get(`http://localhost:5000/create/process?pin=${PIN}&id=${this.state.bloodNumber}&uid=${dID}&oid=${ownerID}&type=donate&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      this.JqueryPass()
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
    })
  }


  handleInputChange(value){
    this.setState({
      Date: value
    })
  }
  handleInputChange2(value2){
    this.setState({
      Expired: value2
    })

  }
  handleInputChange3(value3){
    this.setState({
      Test: value3
    })
  }
  handleInputChange4(value4){
    this.setState({
      Temperature: value4
    })
  }
  handleInputChange5(value5){
    this.setState({
      milliMeters: value5
    })
  }
  handleInputChange6(value6){
    this.setState({
      Type: value6
    })
  }
  handleInputChange7(value7){
    this.setState({
      donorEmail:value7
    })
  }

  
    render(){
    return (
      <div>
        <BloodBankHeader/>
    <div id="BBDonationCard" className='signup-container'>
      <div className='right-container'>
        <header>
         <div  ref="msg" ></div>
          <h1>Blood Info</h1>
          <hr style={{border:"1px solid white"}} />
     
          <div className='set'>
            <div className='Date'>
              <label for='Date'  style={{color:"white"}}><b>Date</b></label>
              <input id='Date' required placeholder="MM/DD/YYYY" ref="date" type='date' value={this.state.Date} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
            </div>
            <div className='Expire'>
              <label for='Expire'  style={{color:"white"}}><b>Expire</b></label>
              <input id='Expire' required placeholder='MM/DD/YYYY' ref="date" type='date' value={this.state.Expired} onChange={(e) =>{this.handleInputChange2(e.target.value)}} />
            </div>
          </div>
          <br></br>
          <div className='set'>
              <div className='Test' >
                <label for='Test' style={{color:"white"}}><b>Test</b></label>
                <input list="safety" required id='Test' ref='test' placeholder="Double Click To Dropdown" type='text' value={this.state.Test} onChange={(e) =>{this.handleInputChange3(e.target.value)}}/>
                <datalist id="safety" >
                  <option value="SAFE"/>
                  <option value="NOT_SAFE" />
                </datalist>
              </div>
              <div className='Temperature'>
                <label for='Temperature'  style={{color:"white"}}><b>Temperature</b></label>
                <input id='Temperature' required placeholder='max 5c' ref="temp" type='text' value={this.state.Temperature} onChange={(e) =>{this.handleInputChange4(e.target.value)}} />
              </div>
            </div>
            <br></br>
          <div className='longInput'>
              <label for='Millimeters'  style={{color:"white"}}><b>MilliLiter</b></label>
              <div className='radio-container'>
                  <input id='Millimeters' required placeholder='max 500ml' ref="ML" type='text' value={this.state.milliMeters} onChange={(e) =>{this.handleInputChange5(e.target.value)}} />
              </div>   
          </div>
          <br></br>
          <div className='longInput'>
              <label for='A+'  style={{color:"white"}}><b>Blood Type</b></label>
              <div className='radio-container' >
                <input id='A+' name='pet-weight' type='radio' value='A%2B' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='A+'>A+</label>

                <input id='B+' name='pet-weight' type='radio' value='B%2B' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='B+'>B+</label>

                <input id='O+' name='pet-weight' type='radio' value='O%2B' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='O+'>O+</label>

                <input id='AB+' name='pet-weight' type='radio' value='AB%2B' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='AB+'>AB+</label>

                <input id='A-' name='pet-weight' type='radio' value='A-' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='A-'>A-</label>

                <input id='B-' name='pet-weight' type='radio' value='B-' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='B-'>B-</label>

                <input id='O-' name='pet-weight' type='radio' value='O-' oref='type' nChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='O-'>O-</label>

                <input id='AB-' name='pet-weight' type='radio' value='AB-' ref='type' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='AB-'>AB-</label>
              </div>
            </div>
            <br></br>
          <div className='longInput'>
              <label for='Email'  style={{color:"white"}}><b>Email</b></label>
              <div className='radio-container'>
                  <input id='Email' ref="email" required placeholder="Write Donor's Email" type='text' value={this.state.donorEmail} onChange={(e) =>{this.handleInputChange7(e.target.value)}} />
              </div>   
          </div>
          
        </header>
        <footer>
          <div className='set'>
              <a id="new" href="#" ref="New" onClick={(event)=>this.ValidateNew(event)} >New Donor</a>
              <a id="existing" href="#" ref="exist" onClick={(event)=>this.ValidateExisting(event)} >Existing Donor</a>
          </div>
        </footer>
      </div>
    </div>
    </div>
    );
  }
  }
  
  export default BloodBankDonation;