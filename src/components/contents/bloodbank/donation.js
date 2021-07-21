import $ from 'jquery'
import { Component } from 'react';
import { render } from '@testing-library/react';
import { findDOMNode } from 'react-dom';
import BloodBankHeader from '../../headers/bloodbank';
import axios from 'axios'

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
      Email: null,
    }
  }
  TrigerAxios0(event){
    event.preventDefault();
    axios.get("http://localhost:5000/get/last")
    .then(response =>{
      let lastNumber = Object.values(response.data);
      this.TrigerAxios(event,lastNumber);
      lastNumber = lastNumber +1
    })
    .catch(error=>{
      console.log("TEST ERROR", error)      
    })
  }


  TrigerAxios(event, lastNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    let ownerID = "BB105";
    const finalNumber = Number(lastNumber) +1
    let DIN = "BD" + finalNumber
    axios.get(`http://localhost:5000/create/bag?din=${DIN}&mm=${this.state.milliMeters}&type=${this.state.Type}&date=${this.state.Date}&expired=${this.state.Expired}&test=${this.state.Test}&did=${this.state.Email}&temp=${this.state.Temperature}&time=${currentDate}&oid=${ownerID}`)
    .then(response =>{
      let output = Object.values(response.data);
      alert("Blood Bag Created")
      this.TrigerAxios2(event,DIN,lastNumber);
      console.log("Change State Confirmed")
    })
    .catch(error=>{
      console.log("TEST ERROR", error)
      
    })
  }
  TrigerAxios2(event, DIN,lastNumber){
    event.preventDefault();
    const currentDate2 = new Date();
    const date = currentDate2.getDate() +'/'+(currentDate2.getMonth()+1) +'/'+currentDate2.getFullYear()
    const time = currentDate2.getHours() +':'+currentDate2.getMinutes() +':'+currentDate2.getSeconds()
    const currentDate = date + " " + time 
    const finalNumber = Number(lastNumber) +1 
    let PIN = "P" + finalNumber
    let ownerID = "BB105";
    let bloodNumber = DIN + ":" + this.state.Type
    axios.get(`http://localhost:5000/create/process?pin=${PIN}&id=${bloodNumber}&uid=${this.state.Email}&oid=${ownerID}&type=donate&time=${currentDate}`)
    .then(response =>{
      let output = Object.values(response.data);
      let objectOutput = JSON.parse(output[0]);
      alert("Donate Process Created")
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
      Email:value7
    })
  }

  donationButton1 =()=>{
        const button1 = findDOMNode(this.refs.submit);
        $(button1).css("color", "white");
        $(button1).css("background-color", "#C31313");
        $(button1).css("border-radius", "5px");
        $(button1).html("Submitted with <br> patient ID:U5826956 <br> Bag ID:5656665")
        $(button1).css("text-transform","capitalize")
        $(button1).attr("class","fas fa-check fa 0x")
  
    }
    donationButton2 =()=>{
      const button2 = findDOMNode(this.refs.submit2);
      $(button2).css("color", "white");
      $(button2).css("background-color", "#C31313");
      $(button2).css("border-radius", "5px");
      $(button2).html("Submitted with <br> Bag ID:5656665")
      $(button2).css("text-transform","capitalize")
      $(button2).attr("class","fas fa-check")
    }
    render(){
    return (
      <div>
        <BloodBankHeader/>
    <div id="BBDonationCard" className='signup-container'>
      <div className='right-container'>
        <header>
          <h1>Blood Info, Be careful!</h1>
          <div className='set'>
            <div className='Date'>
              <label for='Date'>Date</label>
              <input id='Date' placeholder="MM/DD/YYYY" type='date' value={this.state.Date} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
            </div>
            <div className='Expire'>
              <label for='Expire'>Expire</label>
              <input id='Expire' placeholder='MM/DD/YYYY' type='date' value={this.state.Expired} onChange={(e) =>{this.handleInputChange2(e.target.value)}} />
            </div>
          </div>
          <div className='set'>
              <div className='Test'>
                <label for='Test'>Test</label>
                <input id='Test' placeholder="SAFE/Not_SAFE" type='text' value={this.state.Test} onChange={(e) =>{this.handleInputChange3(e.target.value)}}/>
              </div>
              <div className='Temperature'>
                <label for='Temperature'>Temperature</label>
                <input id='Temperature' placeholder='20C' type='text' value={this.state.Temperature} onChange={(e) =>{this.handleInputChange4(e.target.value)}} />
              </div>
            </div>
          <div className='longInput'>
              <label for='Millimeters'>Millimeters</label>
              <div className='radio-container'>
                  <input id='Millimeters' placeholder='20C' type='text' value={this.state.milliMeters} onChange={(e) =>{this.handleInputChange5(e.target.value)}} />
              </div>   
          </div>
          <div className='longInput'>
              <label for='A+'>Blood Type</label>
              <div className='radio-container'>
                <input id='A+' name='pet-weight' type='radio' value='A%2B' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='A+'>A+</label>

                <input id='B+' name='pet-weight' type='radio' value='B%2B' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='B+'>B+</label>

                <input id='O+' name='pet-weight' type='radio' value='O%2B' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='O+'>O+</label>

                <input id='AB+' name='pet-weight' type='radio' value='AB%2B' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='AB+'>AB+</label>

                <input id='A-' name='pet-weight' type='radio' value='A-' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='A-'>A-</label>

                <input id='B-' name='pet-weight' type='radio' value='B-' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='B-'>B-</label>

                <input id='O-' name='pet-weight' type='radio' value='O-' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='O-'>O-</label>

                <input id='AB-' name='pet-weight' type='radio' value='AB-' onChange={(e) =>{this.handleInputChange6(e.target.value)}}/>
                <label for='AB-'>AB-</label>
              </div>
            </div>
          <div className='longInput'>
              <label for='Email'>Email</label>
              <div className='radio-container'>
                  <input id='Email' placeholder="Write patient's Email" type='text' value={this.state.Email} onChange={(e) =>{this.handleInputChange7(e.target.value)}} />
              </div>   
          </div>
          
        </header>
        <footer>
          <div className='set'>
              <a id="new" href="#" onClick={(event)=>this.TrigerAxios0(event)} ref="submit" >New Donor</a>
              <a id="existing" href="#" onClick={(event)=>this.TrigerAxios0(event)} ref="submit2" >Existing Donor</a>
          </div>
        </footer>
      </div>
    </div>
    </div>
    );
  }
  }
  
  export default BloodBankDonation;