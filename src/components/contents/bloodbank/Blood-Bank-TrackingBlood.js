import BloodBankHeader from "../../headers/bloodbank";
import readyImg from '../../../imgs/ready.png'
import ShippedImg from '../../../imgs/Shipped.png'
import deliveredImg from '../../../imgs/delivered.png'
import usedImg from '../../../imgs/used.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import { Component } from "react";
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie';

class bloodBankTrackingBlood extends Component{

    constructor(props){
        super(props)
        this.state={
          current: null,
          owner: null,
          out:null,
          cookie: Cookies.get('id')
        }
      }

    TrigerAxios(event, data){
        event.preventDefault();
        let bloodNumber = null;
        if(data.includes("+")){
            bloodNumber = data.replace("+","%2b")
        }else{
            bloodNumber = data;
        }
        axios.get(`http://localhost:5000/get/history?id=${bloodNumber}`)
        .then(response =>{
          let output1 = Object.values(response.data)
          let output2 = JSON.parse(output1)
          var len = Object.keys(output2).length
          this.setState({current: output2[len-1].Value.currentState})
          this.setState({owner: output2[0].Value.ownerID})
          if(this.state.owner !== this.state.cookie ){
             console.log(this.state.owner) 
            alert("You can only track your own bags") 
            throw new Error(`This is not your bag`);
            }
          this.setState({out:output2})
          console.log("Process Completed")
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
          alert("bag doesn't exist ")
        })
      }

    render(){
        const { data } = this.props.location
        if(data == null){
            return <Redirect to={"/bloodBanktrackingbloodinfo"} />
        }
    return(
        <div>
            <BloodBankHeader/>
            <div className="container px-1 px-md-4 py-5 mx-auto TrackingBloodPage">
    <div className="card">
        <div className="row d-flex justify-content-between px-3 top">
        <div class="info">
            <Link to={{pathname: "/bloodBankbaghistory", data: this.state.out}}>
            <i className="info fa-2x" title="Press here to view bag history"><FontAwesomeIcon icon = {['fa' ,'info-circle']}/></i>
            </Link>
          </div>
            <div className="container">
                <h5>Bag ID: <span class="text-danger font-weight-bold">{data}</span></h5>
                <button className="trackButtonInTrackingBlood" onClick={(event)=>this.TrigerAxios(event,data)}>Track</button>
            </div>
        </div> 
        { this.state.owner === this.state.cookie &&     
        <div className="row d-flex justify-content-center">
            <div className="col-12">
            {this.state.current == "READY" &&
                 <ul id="progressbar" className="text-center">
                    <li className="active step0"></li>
                    <li className=" step0"></li>
                    <li className=" step0"></li>
                    <li className=" step0"></li>
                </ul>
            }
            {this.state.current == "UNDER_TRANSPORTATION" &&
                 <ul id="progressbar" className="text-center">
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className=" step0"></li>
                    <li className=" step0"></li>
                </ul>
            }
            {this.state.current == "DELIEVERED" &&
                 <ul id="progressbar" className="text-center">
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className=" step0"></li>
                </ul>
            }
            {this.state.current == "USED" &&
                 <ul id="progressbar" className="text-center">
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                    <li className="active step0"></li>
                </ul>
            }  
            </div>
        </div>
    }
        <div className="row justify-content-between top">
            <div className="row d-flex icon-content"> <img className="icon" src={readyImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>Ready</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src={ShippedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>En Route</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src={deliveredImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag<br></br>Delivered</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img className="icon" src={usedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag<br></br>Used</p>
                </div>
            </div>
        </div>
    </div>
</div>
        </div>
    );
    }
}
export default bloodBankTrackingBlood;