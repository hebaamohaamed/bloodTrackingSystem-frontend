import SuperHeader from "../../headers/supervision";
import retrieveImg from '../../../imgs/retrieve.jpg'
import viewprocess from '../../../imgs/viewProcesses.jpeg'


function SupervisionOptions(){
    return(
        <div>
            <SuperHeader/>
            <div style={{marginTop:"80px"}} id="carouselMultiItemExample2" Name="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
<div className="carousel-inner py-4">
  <div className="carousel-item active">
    <div className="container">
      <div className="row">
        <div id="row1" className="col-lg-4">
          <div className="card">
            <img
              src={retrieveImg}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">View Bags</h5>
              <p className="card-text">
                If you want to view all Hospitals' and Blood Banks' blood bags press here.
              </p>
              <a href="#!" class="btn btn-danger">View</a>
            </div>
          </div>
        </div>

        <div id="row2" className="col-lg-4 d-none d-lg-block">
          <div className="card">
            <img
              src={viewprocess}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">View Processes</h5>
              <p className="card-text">
                If you want to view all Hospitals' and Blood Banks' Processes, press here.
              </p>
              <a href="#!" class="btn btn-danger">Search</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</div>
        </div>
    );
}
export default SupervisionOptions;