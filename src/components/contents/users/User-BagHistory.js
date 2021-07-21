import UserHeader from "../../headers/user";

function UserBagHistory(){
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
                                <th>Date</th>
                                <th>Hour</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Central Blood Bank</td>
                                <td>Ready</td>
                                <td>Blood Bank</td>
                                <td>22/5/2019</td>
                                <td>1 PM</td>
                            </tr>
                            <tr>
                                <td>Giza Hospital</td>
                                <td>Delivered</td>
                                <td>Hospital</td>
                                <td>10/7/2019</td>
                                <td>10 AM</td>
                            </tr>
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
export default UserBagHistory;