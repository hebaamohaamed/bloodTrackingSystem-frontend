import UserHeader from "../../headers/user";

function viewHospitalByBloodType(){
    return(
        <div>
            <UserHeader/>
            <main className="py-4">
    <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-12">
            <div className="card">
                <div className="card-header">
                   Hospitals
                </div>
                <div className="card-body">
                    <div className="placeholders" >
                      <input type="text" id="filter0" placeholder="Filter By Bag ID" hidden/>
                      <input type="text" id="filter1" placeholder="Filter By Blood Type" hidden/>
                      <input  list="Types" id="filter2" placeholder="Filter By Blood Type"/>
                      <datalist id="Types">
                        <option value="A+"/>
                        <option value="B+"/>
                        <option value="O+"/>
                        <option value="AB+"/>
                        <option value="A-"/>
                        <option value="B-"/>
                        <option value="O-"/>
                        <option value="AB-"/>
                      </datalist>
                      <input type="text" id="filter3" placeholder="Filter By Safety" hidden/>
                      <input type="text" id="filter4" placeholder="Filter By Expirey" hidden/>
                    </div>
                    <table id="filter" class="table">
                        <thead>
                            <tr>
                                <th>Hospital</th>
                                <th>Adress</th>
                                <th>Blood Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Cairo Medical Centre</td>
                                <td>4 Abou Obaida , Al Bakry , Roxy, Helioplis , Cairo , Egypt</td>
                                <td>A+, B-, AB-, O+</td>
                            </tr>            
                            <tr>
                                <td>Dr Magdi Ahmed Saeed Hospital</td>
                                <td>32 Abu Dawood Elzahry Str , Cairo , Egypt</td>
                                <td>B+, O+</td>
                            </tr>
                            <tr>
                                <td>El Salam International Hospital</td>
                                <td>Cornich El Nil , PO Box 338 , Maadi , Cairo , Egypt.</td>
                                <td>A+</td>
                            </tr>
                            <tr>
                                <td>Revive Medical Center</td>
                                <td>47 Mohamed Mazhar St , 1st Floor , Zamalek , Cairo , Egypt</td>
                                <td>B-, AB-</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>    
            </div>
        </div>
    </div>    
</main>

        </div>
    );
}
export default viewHospitalByBloodType;