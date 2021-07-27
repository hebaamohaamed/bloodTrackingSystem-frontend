import HospitalHeader from "../../headers/hospital";
import ReadyImg from '../../../imgs/ready.png'
import shippedImg from '../../../imgs/Shipped.png'
import deliveredImg from '../../../imgs/delivered.png'
import usedImg from '../../../imgs/used.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from 'axios'
import {Component} from 'react'
import {Link} from 'react-router-dom'
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie';
import ReactDOM from "react-dom"
import $ from 'jquery'



class hospitalTrackingBlood extends Component{

    constructor(props){
        super(props)
        this.state={
          current: null,
          out:null,
          owner: null,
          owner2: null,
          cookie: Cookies.get('id')
        }
      }

      JqueryBagNotExist(){
        const button = ReactDOM.findDOMNode(this.refs.track)
        $(button).css("transform","scale(1.2)")
        $(button).html("Bag doesn't exist")
        $(button).css("text-transform","uppercase")
        $(button).css("border-radius","10px")
        $(button).css("width","220px")
        } 
    JqueryNotTheOwner(){
        const button = ReactDOM.findDOMNode(this.refs.track)
        $(button).css("transform","scale(1.2)")
        $(button).html("Not your bag")
        $(button).css("text-transform","uppercase")
        $(button).css("border-radius","10px")
        $(button).css("width","200px")
    }

     
    TrigerAxios(event, data){
        event.preventDefault();
        let bloodNumber = null;
        if(data.includes("+")){
            bloodNumber = data.replace("+","%2b")
        }else{
            bloodNumber = data;
        }
        axios.get(`http://localhost:5001/get/history?id=${bloodNumber}`)
        .then(response =>{
          let output1 = Object.values(response.data)
          let output2 = JSON.parse(output1)
          var len = Object.keys(output2).length
          this.setState({current: output2[len-1].Value.currentState})
          if(output2[len-1].Value.currentOwner != null){
            if(this.state.current == "DELIEVERED"){
            this.setState({owner: output2[len-1].Value.currentOwner})
            }
            else{
                this.setState({owner: output2[len-2].Value.currentOwner})
            }
          }else{
            this.setState({owner: output2[len-1].Value.ownerID}) 
          }
           if(this.state.owner !== this.state.cookie ){
               //alert(this.state.owner )
            this.JqueryNotTheOwner()
           }else{
            this.setState({out:JSON.stringify(output2)})
           }
          console.log("Process Completed")
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
          this.JqueryBagNotExist()
        })
      }
    render(){
        const { data } = this.props.location
            if(data == null){
            return <Redirect to={"/HospitalTrackBloodBagInfo"} />
        }
    return(
        <div>
            <HospitalHeader/>
            <div class="container px-1 px-md-4 py-5 mx-auto TrackingBloodPage">
    <div className="card" id="trackingBlood">
        <div className="row d-flex justify-content-between px-3 top">
          <div className="info">
            <Link to={{pathname: "/HospitalBagHistory", data:this.state.out }}>
              <i className="info fa-2x"><FontAwesomeIcon icon = {['fa' ,'info-circle']}/></i>
            </Link>
          </div>
            <div className="container">
                <h5>Bag ID: <span className="text-danger font-weight-bold">{data}</span></h5>
                <button ref="track" className="trackButtonInTrackingBlood" onClick={(event)=>this.TrigerAxios(event,data)}>Track</button>
            </div>
        </div> 
        {this.state.owner === this.state.cookie &&
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