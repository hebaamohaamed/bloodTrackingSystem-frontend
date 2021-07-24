import HospitalHeader from "../../headers/hospital";
import { Component } from "react";
import axios from "axios"

class hospitalBagHistory extends Component{
    render(){
        const { data } = this.props.location
        let len = JSON.parse(data).length
        console.log()
        let menuItems = [];
        for (var i = 0; i < len; i++) {
            menuItems.push(<tr>
                <td>{JSON.parse(data)[i].Value.ownerID}</td>
                <td>{JSON.parse(data)[i].Value.currentState}</td>
                <td>{JSON.parse(data)[i].Value.location}</td>
                <td>{JSON.parse(data)[i].Value.patientID}</td>
                <td>{JSON.parse(data)[i].Value.timeStamp}</td>
                </tr>)
        }
        console.log(JSON.parse(data)[1].Value);
    return(
        <div>
            <HospitalHeader />
            <div className="container bagHistory">
    <div className="row">
        <div className="col-md-offset-1 col-md-10">
            <div className="panel">
                <div className="panel-heading">
                    <div className="row">
                        <div className="col col-sm-3 col-xs-12 container">
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
                                <th>Patient</th>
                                <th>Timestamp</th>
                            </tr>
                        </thead>
    
                        <tbody>
                        {menuItems}
                            
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
export default hospitalBagHistory;