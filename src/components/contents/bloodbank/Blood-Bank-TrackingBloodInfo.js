import BloodBankHeader from "../../headers/bloodbank";
import { Component } from "react";
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import ReactDOM from "react-dom"
import $ from 'jquery'


class BloodBankTrackBloodBagInfo extends Component{
  constructor(props){
    super(props)
    this.state={
      bNumber: null,
      redirect: null
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

  Validation(event){
    event.preventDefault();
    let upper = this.state.bNumber.toUpperCase()
    const RegExp = /^BD\d{3,4}:(AB|A|O|B)[+-]$/g;
    const valid = RegExp.test(upper)
    if(valid == true){
      this.setState({ redirect: "/bloodBankbloodTracking" });
    }else{
      this.ErrorJquery()
    }
  }
  handleInputChange(value){
    this.setState({
      bNumber: value
    })
  }
  render(){
    if (this.state.redirect) {
      return <Redirect to={{pathname:this.state.redirect , data:this.state.bNumber}} />
    }
    return(
        <div>
            <BloodBankHeader />
            <div class="InfoNedded">
            <h2>Info Needed</h2>
            <form>
              <div class="user-box">
              <input type="text" required value={this.state.bNumber} onChange={(e) =>{this.handleInputChange(e.target.value)}}/>
                <label>Enter Blood Bag ID</label>
              </div>
              <Link ref="confirm" id="trackBagInfoSubmit" to={{pathname: "/bloodBankbloodTracking", data: this.state.bNumber}} onClick={(event)=>this.Validation(event)} >Submit</Link>
            </form>
          </div>
                </div>

    );
  }
}
export default BloodBankTrackBloodBagInfo;