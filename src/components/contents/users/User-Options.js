import UserHeader from "../../headers/user";
import retrieveImg from '../../../imgs/retrieve.jpg'
import hospitalImg from '../../../imgs/hospital.jpg'

function userOptions(){
    return(
        <div>
            <UserHeader/>
            <div id="carouselMultiItemExample2" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
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
                If you want to view all your blood bags press here.
              </p>
              <a href="#!" class="btn btn-danger">View</a>
            </div>
          </div>
        </div>

        <div id="row2" className="col-lg-4 d-none d-lg-block">
          <div className="card">
            <img
              src={hospitalImg}
              class="card-img-top"
              alt="..."
            />
            <div className="card-body">
              <h5 className="card-title">Search for Hospital</h5>
              <p className="card-text">
                If you want to search for blood type in specific hospital, press here.
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
export default userOptions;