import SuperHeader from "../../headers/supervision";
import retrieveImg from '../../../imgs/retrieve.jpg'
import viewprocess from '../../../imgs/viewProcesses.jpeg'
import {useHistory} from 'react-router-dom'

import axios from 'axios'


function SupervisionOptions(){

  let history = useHistory();


  function AxiosB(event){
    event.preventDefault();
    alert("here")
    axios.get(`http://localhost:5002/query/all/bags`)
		.then(response =>{
		  let output = (response.data.output);
		  console.log("All Blood is fetched")
		  console.log(output)
		  process = output
		  history.push('/superVisionretrievebags')
	
		})
		.catch(error=>{
		  console.log("TEST ERROR", error)
		 
  })
}

function AxiosP(event){
  event.preventDefault();
  alert("here")
  axios.get(`http://localhost:5002/query/all/process`)
  .then(response =>{
    let output = (response.data.output);
    console.log("All processes is fetched")
    console.log(output)
    process = output
    history.push('/superVisionretrieveprocesses')

  })
  .catch(error=>{
    console.log("TEST ERROR", error)
   
})
}

    return(
        <div>
            <SuperHeader/>
            <div style={{marginTop:"80px"}} id="carouselMultiItemExample3" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
<div className="carousel-inner py-4">
  <div className="carousel-item active">
    <div className="container">
      <div className="row">
        <div id="sRow1" className="col-lg-4">
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
              <a class="btn btn-danger" onClick={(event)=>AxiosB(event)}>View</a>
            </div>
          </div>
        </div>

        <div id="sRow2" className="col-lg-4 d-none d-lg-block">
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
              <a onClick={(event)=>AxiosP(event)} class="btn btn-danger">View</a>
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