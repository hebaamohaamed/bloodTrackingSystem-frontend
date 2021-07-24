import BloodBankHeader from "../../headers/bloodbank";
import { Component } from "react";
import {Redirect} from 'react-router-dom'


class BloodBankBagHistory extends Component{
    render(){

        const { data } = this.props.location
        console.log(data)

        if(data == null){
            return <Redirect to={"/bloodBanktrackingbloodinfo"} />
        }

        
        let menuItems = [];
        for (var i = 0; i < data.length; i++) {
        menuItems.push(
        <tr>
            <td>{data[i].Value.ownerID}</td>
            <td>{data[i].Value.currentState}</td>
            <td>{data[i].Value.location}</td>
            <td>{data[i].Value.patientID}</td>
            <td>{data[i].Value.timeStamp}</td>
        </tr>

        );
        }
        console.log(menuItems)
    return(
        <div className="bagHistory">
            <BloodBankHeader />
            <div className="container">
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
export default BloodBankBagHistory;