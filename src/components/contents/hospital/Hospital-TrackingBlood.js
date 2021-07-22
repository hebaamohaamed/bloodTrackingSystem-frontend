import HospitalHeader from "../../headers/hospital";
import ReadyImg from '../../../imgs/ready.png'
import shippedImg from '../../../imgs/Shipped.png'
import deliveredImg from '../../../imgs/delivered.png'
import usedImg from '../../../imgs/used.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import {Component} from 'react'


class hospitalTrackingBlood extends Component{

    constructor(props){
        super(props)
        this.state={
          current: null,
        }
      }

    TrigerAxios(event, data){
        event.preventDefault();
        axios.get(`http://localhost:5001/get/history?id=${data}`)
        .then(response =>{
          let output1 = Object.values(response.data)
          let output2 = JSON.parse(output1)
          var len = Object.keys(output2).length
          this.setState({current: output2[len-1].Value.currentState})
          console.log("Process Completed")
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
        })
      }
    render(){
        const { data } = this.props.location
    return(
        <div>
            <HospitalHeader/>
            <div class="container px-1 px-md-4 py-5 mx-auto TrackingBloodPage">
    <div className="card" id="trackingBlood">
        <div className="row d-flex justify-content-between px-3 top">
          <div className="info">
            <a href="/">
              <i className="info fa-2x"><FontAwesomeIcon icon = {['fa' ,'info-circle']}/></i>
            </a>
          </div>
            <div className="container">
                <h5>Bag ID: <span className="text-danger font-weight-bold">{data}</span></h5>
                <button onClick={(event)=>this.TrigerAxios(event,data)}>Track</button>
            </div>
        </div> 
        
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
        <div className="row justify-content-between top">
            <div className="row d-flex icon-content col-md-3"> 
            <img id="ready" className="icon" src={ReadyImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>Ready</p>
                </div>
            </div>
            <div className="row d-flex icon-content col-md-3" > <img id="shipped" className="icon" src={shippedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>En Route</p>
                </div>
            </div>
            <div className="row d-flex icon-content col-md-3"> <img id="delivered" className="icon" src={deliveredImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag<br></br> Delivered</p>
                </div>
            </div>
            <div className="row d-flex icon-content col-md-3"> <img id="used" className="icon" src={usedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag <br></br> Used</p>
                </div>
            </div>
        </div>
        
        
    </div>
</div>
</div>
    );
            
    }
}
export default hospitalTrackingBlood;