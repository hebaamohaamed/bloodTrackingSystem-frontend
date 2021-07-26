import HomeHeader from '../headers/home'
import {Carousel, Row, Col, Card, CardGroup} from 'react-bootstrap'
import { Component } from 'react'
import bloodDonation from '../../imgs/blood-donation2.jpg'
import bloodRecieve from '../../imgs/blood-recieve5.jpg'
import bloodTypes from '../../imgs/blood-types7.jpg'
import hospital from '../../imgs/hospital2.jpg'
import user from '../../imgs/donor.png'
import supervision from '../../imgs/supervision.jpg'
import bloodbank from '../../imgs/bloodbank3.jpg'
import alaa from '../../imgs/alaa.jpg'
import aya from '../../imgs/aya.jpeg'
import catherine from '../../imgs/catherine.jpg'
import heba from '../../imgs/heba.jpeg'
import omar from '../../imgs/omar.jpeg'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class HomeContent extends Component {
 
  componentDidMount() {
    const script = document.createElement("script");

    script.src = "js/myScript.js";
    script.async = true;

    document.body.appendChild(script);
    var tabLinks = document.querySelectorAll(".tablinks");
    var tabContent = document.querySelectorAll(".tabcontent");

    tabLinks.forEach(function(el) {
      el.addEventListener("click", openTabs);
    });


    function openTabs(el) {
      var btnTarget = el.currentTarget;
      var country = btnTarget.dataset.country;

      tabContent.forEach(function(el) {
          el.classList.remove("active");
      });

      tabLinks.forEach(function(el) {
          el.classList.remove("active");
      });

      document.querySelector("#" + country).classList.add("active");
      
      btnTarget.classList.add("active");
}

  


  }
    render(){
       
    return (
      <div>
      <div id="home">
        <HomeHeader />
        <div >
        <br></br> <br></br> <br></br> <br></br>
      </div>

        <Carousel id="Carousel" style={{ position: 'relative' }} fade={true}>
          <Carousel.Item interval={2000}>
            <img
              className="image"
              src={bloodTypes}
              alt="First slide"
            />
            <Carousel.Caption>
              <h3>Search For Blood Bags</h3>
              <p>Find Blood Type At The Nearest Hospital</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="image"
              src={bloodDonation}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Trace Your Blood</h3>
              <p>Make Sure That Your Blood Goes To The Right Places</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="image"
              src={bloodRecieve}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Know Blood History</h3>
              <p>Make Sure The Blood Is 100% Safe And Where It Was</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>

      <div id="logins">
      <br></br> <br></br> <br></br> <br></br>
      </div>


        <CardGroup id="cards">
          <Card className="col-md-3">
            <Card.Img variant="top" src={hospital} />
            <Card.Body>
              <Card.Title>HOSPITAL</Card.Title>
              <Card.Text>
                login as Hospital to know blood bag history and confirm it's usage.
              </Card.Text>
              <Link to="/HospitalLogin">
               LOGIN
              </Link>
            </Card.Body>
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={bloodbank}/>
            <Card.Body>
              <Card.Title>BLOODBANK</Card.Title>
              <Card.Text>
              login as Blood Bank to add new donations and send to hospitals.
              </Card.Text>
              <Link to="bloodBankLogin">
               LOGIN
              </Link>
            </Card.Body>
            
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={supervision} />
            <Card.Body>
              <Card.Title>MINISTRY OF HEALTH</Card.Title>
              <Card.Text>
              login as Ministry organization to track blood hisotry with no ristrictions.
              </Card.Text>
              <Link to="/SupervisionLogin">
               LOGIN
              </Link>
            </Card.Body>
            
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={user} />
            <Card.Body>
              <Card.Title>DONOR/PATIENT</Card.Title>
              <Card.Text>
              login as Donor or Patient to track blood and search for blood in hospitals.
              </Card.Text>
              <Link to="/UserLogin">
               LOGIN
              </Link>
            </Card.Body>
          </Card>
        </CardGroup>
       
       
        <div id="about">
          <br></br> <br></br> <br></br> <br></br>
      </div>

            <div class="about">
        <a class="bg_links social portfolio" href="https://www.rafaelalucas.com" target="_blank">
            <span class="icon"></span>
        </a>
        <a class="bg_links social dribbble" href="https://dribbble.com/rafaelalucas" target="_blank">
            <span class="icon"></span>
        </a>
        <a class="bg_links social linkedin" href="https://www.linkedin.com/in/rafaelalucas/" target="_blank">
            <span class="icon"></span>
        </a>
        <a class="bg_links logo"></a>
      </div>


      <section id="wrapper">
        <div class="content">
           
            <div class="tabs">
              <button class="tablinks active" data-country="Technology"><p data-title="Technology">Our Technology</p></button>
              <button class="tablinks" data-country="Search"><p data-title="Search">Blood Search</p></button>
              <button class="tablinks" data-country="Tracking"><p data-title="Tracking">Blood Tracking</p></button>
            </div>

            
            <div class="wrapper_tabcontent">
            <div id="Tracking" class="tabcontent">
                  <h3>Tracking</h3>
                  <p>Blood Tracking system processes involving recording blood donors, blood bag collection, will be systematized and organized, hence, improving the healthcare management for blood banks.
                    <br></br>
                    -The ministry can supervise the whole data with no restrictions
                    <br></br>
                    -The blood banks can keep track of thier donated blood
                    <br></br>
                    -The hospitals can trace tha blood to the blood bank to make sure it's safe and not expired
                    <br></br>
                    -The donors can track thier blood to make sure it goes to the right places
                    <br></br>
                    -The patients can trace the bloos to make sure it's safe
                     </p>
              </div>

              <div id="Technology" class="tabcontent active">
                  <b>
                  <h3>Technology</h3>
                  <p>We implemented a comprehensive prototype of the blockchain-based blood chain system using Private blockchain network
    We use in blood donation (BTS) System Private Block chain because the system wants to restricted read permissions also provide a greater level of privacy to the users, a feature not available in Public Blockchains not allow users to have access to read the data
    The organization in control has the power to change the rules of a Private Blockchain and may also decline transactions based on their established rules and regulations. </p>
                  </b>
              </div>

              <div id="Search" class="tabcontent">
                  <h3>Search</h3>
                  <p>As a patient or a donor you Users can search for the type of there available blood in hospitals and look for it in google maps </p>
              </div>

             
            </div>
        </div>
      </section>

        <div id="ourTeam">
          <br></br> <br></br> <br></br> <br></br>
      </div>

        <section class="team" id="team">
            <div class="container text-center">
                <h2>Our
                    <span>Team</span></h2>
                <p><br></br></p>
                <div class="row">
                    <div class="member teamCards col-md-4" >
                        <div class="box">
                            <div class="image">
                                <img src={aya} alt="team" class="img-fluid" />
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/profile.php?id=100003943173808"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/ayaelbadrawey?s=09"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/ayaelbadrawey?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <h3>Aya Elbadrawy</h3>
                            <h4>Web Developer</h4>
                        </div>
                    </div>
                  
                    <div class="member middle col-md-4">
                        <div class="box">
                            <div class="image">
                                <img src={alaa} alt="team" class="img-fluid" />
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/alaa.saeedd.1422"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://instagram.com/alaasaeedd_?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <h3>Alaa Saeed</h3>
                            <h4>Web Developer</h4>
                        </div>
                    </div>
                    
                    <div class="member last col-lg-4 col-md-4">
                        <div class="box">
                            <div class="image">
                                <img src={omar} alt="team" class="img-fluid" />
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/omartariik1"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/Tarekk_Jr?s=09"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/omartariik?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <h3>Omar Tarek</h3>
                            <h4>Web Developer</h4>
                        </div>
                    </div>
                  </div>
                  <br></br>
                  <br></br>
                  <div class="row">
                    <div className="col-md-2"></div>
                    <div class="member first2 col-md-4">
                        <div class="box">
                            <div class="image">
                                <img src={heba} alt="team" class="img-fluid" />
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/heba.mohmed.1426"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/hebaamohaammed?s=09"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/hebaamuhaamed?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <h3>Heba Mohamed</h3>
                            <h4>Web Developer</h4>
                        </div>
                    </div>
                    <div class="member second col-md-4">
                        <div class="box">
                            <div class="image">
                                <img src={catherine} alt="team" class="img-fluid" />
                                <div class="social-icons">
                                    <a href="https://www.facebook.com/Catherine2310"><i class="fab fa-facebook-f"></i></a>
                                    <a href="https://twitter.com/wontfind_?s=09"><i class="fab fa-twitter"></i></a>
                                    <a href="https://instagram.com/catherineatef23?utm_medium=copy_link"><i class="fab fa-instagram"></i></a>
                                </div>
                                <div class="overlay"></div>
                            </div>
                            <h3>Catherine Atef</h3>
                            <h4>Web Developer</h4>
                        </div>
                    </div>
                    <div className="col-md-2"></div>
                </div>
                <br></br>
                <br></br>
                <br></br>
            </div>
        </section>
     </div>
         
     </div>
    );
  } 
}
  
  export default HomeContent;