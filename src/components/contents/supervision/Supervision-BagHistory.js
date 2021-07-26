import SuperHeader from "../../headers/supervision";
import { Component } from "react";
import {Redirect} from 'react-router-dom'
import axios from 'axios'


class SupervisionBagHistory extends Component{
    constructor(props){
        super(props)
        this.state={
            menuItems: [],
            owner:null,
            current:null
        }
      }

     TrigerAxios(event, data){
        event.preventDefault();
        let newData = null
        if(data.includes("+")){
            newData = data.replace("+", "%2B")
        }
        else{
            newData = data;
        }
        axios.get(`http://localhost:5002/get/history?id=${newData}`)
        .then(response =>{
          let output1 = Object.values(response.data)
          let output2 = JSON.parse(output1)
          var len = Object.keys(output2).length
          this.setState({current: output2[len-1].Value.currentState})
          if(output2[len-1].Value.currentOwner == null){
            this.setState({owner: output2[len-1].Value.ownerID})
          }else{
            this.setState({owner: output2[len-1].Value.currentOwner}) 
          }
          this.fillTable(output2)
          console.log("Process Completed")
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
        })
      }
      fillTable(data){
        for (var i = 0; i < data.length; i++) {
        this.state.menuItems.push(
        <tr>
            <td>{data[i].Value.ownerID}</td>
            <td>{data[i].Value.currentState}</td>
            <td>{data[i].Value.location}</td>
            <td>{data[i].Value.patientID}</td>
            <td>{data[i].Value.timeStamp}</td>
        </tr>
        );
        }
      }
    render(){
        const { data } = this.props.location
        console.log(data)

        if(data == null){
            return <Redirect to={"/superVisionretrievebags"} />
        }
        
        console.log(this.state.menuItems)
    return(
        <div>
            <SuperHeader />
            <div className="container bagHistory">
    <div className="row">
        <div className="col-md-offset-1 col-md-10">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-sm-3 col-xs-12 container">
                            <button onClick={(event)=>this.TrigerAxios(event,data)}>Show</button>
                            <h4 className="title">Bag <span>History</span></h4>
                        </div>
                    </div>
                </div>
                <div className="panel-body table-responsive">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Owner</th>
                                <th>State</th>
                                <th>Location</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
                        <tbody>
                        {this.state.menuItems}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>

        </div>
    );
    }
}
export default SupervisionBagHistory;