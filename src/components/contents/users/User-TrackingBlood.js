import UserHeader from "../../headers/user";
import readyImg from '../../../imgs/ready.png'
import shippedImg from '../../../imgs/Shipped.png'
import deliveredImg from '../../../imgs/delivered.png'
import usedImg from '../../../imgs/used.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import ReactDOM from "react-dom"
import $ from 'jquery'
import Cookies from 'js-cookie';
import {Link} from 'react-router-dom'



class userTrackingBlood extends Component{
    constructor(props){
        super(props)
        this.state={
          current: null,
          cookie: Cookies.get('id'),
          owner: null,
          out: null
        }
      }

    TrigerAxios(event, data2){
        event.preventDefault();
        let data = null
        if(data2.includes("+")){
            data = data2.replace("+","%2b");
        }else{
            data = data2
        }
        axios.get(`http://localhost:5003/get/history?id=${data}`)
        .then(response =>{
          let output1 = Object.values(response.data)
          let output2 = JSON.parse(output1)
          var len = Object.keys(output2).length
          this.setState({current: output2[len-1].Value.currentState})
          if(this.state.cookie.includes("D")){
            this.setState({owner: output2[len-1].Value.donorID})
          }
          else{
            this.setState({owner: output2[len-1].Value.patientID})
          }
          this.setState({out:output2})
          console.log("Process Completed")
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
        })
      }

    render(){
        const { data } = this.props.location
        if(data == null){
            return <Redirect to={"/UserRetrieveBloodBags"} />
        }
        
    return(
        <div>
            <UserHeader/>
            <div className="container px-1 px-md-4 py-5 mx-auto TrackingBloodPage">
    <div className="card">
        <div className="row d-flex justify-content-between px-3 top">
        <div className="info">
            <a href="/">
            <Link to={{pathname: "/UserBagHistory", data: this.state.out}}>
            <i className="info fa-2x" title="Press here to view bag history"><FontAwesomeIcon icon = {['fa' ,'info-circle']}/></i>
            </Link>
            </a>
          </div>
            <div className="container">
                <h5>Bag ID: <span class="text-danger font-weight-bold">{data}</span></h5>
                <button className="trackButtonInTrackingBlood" ref="track" onClick={(event)=>this.TrigerAxios(event,data)}>Track</button>
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
            <div className="row d-flex icon-content"> <img class="icon" src={readyImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>Ready</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={shippedImg}/>
                <div className="d-flex flex-column">
                    <p className="font-weight-bold">Bag is<br></br>En Route</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={deliveredImg}/>
                <div className="d-flex flex-column">
                   <p className="font-weight-bold">Bag<br></br>Delivered</p>
                </div>
            </div>
            <div className="row d-flex icon-content"> <img class="icon" src={usedImg}/>
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
export default userTrackingBlood;