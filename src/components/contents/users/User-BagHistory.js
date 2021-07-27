import UserHeader from "../../headers/user";
import { Component } from "react";
import {Redirect} from 'react-router-dom'

class UserBagHistory extends Component{
    render(){
        const { data } = this.props.location
        console.log(data)

        if(data == null){
            return <Redirect to={"/UserRetrieveBloodBags"} />
        }
        let menuItems = [];
        for (var i = 0; i < data.length; i++) {
        menuItems.push(
        <tr>
            <td>{data[i].Value.ownerID}</td>
            <td>{data[i].Value.currentState}</td>
            <td>{data[i].Value.location}</td>
            <td>{data[i].Value.timeStamp}</td>
        </tr>
        );
        }
        console.log(menuItems)
    return(
        <div>
            <UserHeader/>
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
                                <th>TimeStamp</th>
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
export default UserBagHistory;