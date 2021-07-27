import UserHeader from "../../headers/user";
import retrieveImg from '../../../imgs/retrieve.jpg'
import hospitalImg from '../../../imgs/hospital.jpg'
import axios from 'axios'
import {useHistory} from 'react-router-dom'
import { useCookies } from 'react-cookie';




function UserOptions(){

  let history = useHistory();
  const [cookies] = useCookies(['user']);
  const cookie = cookies.id

  function getHospitals(event){
    event.preventDefault();
    var finalOut = "["
    axios.get(`http://localhost:5003/query/hospital/blood`)
        .then(response =>{
          var blood = response.data.out.substr(0,response.data.out.length-1)
          var bloodArray = blood.split(":")
          console.log(bloodArray)
          axios.get("http://localhost:5004/api/get/hospitals")
            .then(response =>{
              var data =response.data
              //console.log(response.data)
              console.log("All Hospitals Fetched")
              console.log(data);  
              var output ="["
              for(var i =0;i<response.data.length;i++){
                var hospital = response.data[i]
                var hospitalStr = JSON.stringify(hospital)
                var type = bloodArray[i].substr(1,bloodArray[i].length-2)
                var sub = hospitalStr.substr(0,hospitalStr.length-1)
                if(type == "")
                  sub = sub + ',"blood":'+'"'+"no blood"+'"}'
                else 
                  sub = sub + ',"blood":'+'"'+type+'"}'
                if(finalOut.length==1)
                  finalOut = finalOut + sub
                else
                  finalOut = finalOut + "," + sub  
            }
            finalOut = finalOut +"]"
            console.log(JSON.parse(finalOut));   
            axios.get(`http://localhost:5004/api/write/file?file=${finalOut}`)
            .then(response =>{
               console.log("data written")
               history.push("/ViewHospitalBloodType")            
              })
            .catch(error=>{
              console.log("TEST ERROR", error)
              alert(`http://localhost:5004/api/write/file?file=${finalOut}`)
            })

          })
            .catch(error=>{
              console.log("TEST ERROR", error)
              alert("Can't fetch Hsopitals")
          })
        })
        .catch(error=>{
          console.log("TEST ERROR", error)
    })
  }
  

  function getBlood(event){
    event.preventDefault();
    if(cookie.startsWith("R")){
      axios.get(`http://localhost:5003/query/patient?pid=${cookie}`)
      .then(response =>{
         console.log("data written")
         history.push("/UserRetrieveBloodBags")            
        })
      .catch(error=>{
        console.log("TEST ERROR", error)
})

    }else{
    
    axios.get(`http://localhost:5003/query/donor?did=${cookie}`)
            .then(response =>{
               console.log("data written")
               history.push("/UserRetrieveBloodBags")            
              })
            .catch(error=>{
              console.log("TEST ERROR", error)
    })
  }
  }

    return(
        <div>
            <UserHeader/>
            <div id="carouselMultiItemExample2" className="carousel slide carousel-dark text-center" data-mdb-ride="carousel">
<div className="carousel-inner py-4">
  <div className="carousel-item active">
    <div className="container">
      <div className="row">
        <div id="row1" className="col-md-6">
          <div className="card">
            <img
              src={retrieveImg}
              class="card-img-top"
              alt="..."
              style={{height:"500px"}}
            />
            <div className="card-body">
              <h5 className="card-title" >View Bags</h5>
              <p className="card-text">
                If you want to view all your blood bags press here.
              </p>
              <a class="btn btn-danger" onClick={(event)=>getBlood(event) } style={{color:"white"}}>View</a>
            </div>
          </div>
        </div>

        <div id="row2" className="col-md-6">
          <div className="card">
            <img
              src={hospitalImg}
              class="card-img-top"
              alt="..."
              style={{height:"500px"}}
            />
            <div className="card-body">
              <h5 className="card-title">Search for Hospital</h5>
              <p className="card-text">
                If you want to search for blood type in hospitals, press here.
              </p>
              <a class="btn btn-danger" onClick={(event)=>getHospitals(event)} style={{color:"white"}}>Search</a>
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
export default UserOptions;