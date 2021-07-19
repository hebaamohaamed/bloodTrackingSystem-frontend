import HomeHeader from '../headers/home'
import blank from '../../imgs/blank.png'
import {Carousel, Row, Col, Card, CardGroup} from 'react-bootstrap'
import { Component } from 'react'
import bloodDonation from '../../imgs/blood-donation2.jpg'
import bloodRecieve from '../../imgs/blood-recieve5.jpg'
import bloodTypes from '../../imgs/blood-types7.jpg'
import hospital from '../../imgs/hospital2.jpg'
import user from '../../imgs/donor.png'
import supervision from '../../imgs/supervision.jpg'
import bloodbank from '../../imgs/bloodbank3.jpg'
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
                login as a hospital organization<br></br> trace blood history and confirm it's usage
                
              </Card.Text>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LOGIN
              </a>
            </Card.Body>
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={bloodbank}/>
            <Card.Body>
              <Card.Title>BLOODBANK</Card.Title>
              <Card.Text>
              login as a blood bank organization<br></br> add new donations and send to hospitals
              </Card.Text>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LOGIN
              </a>
            </Card.Body>
            
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={supervision} />
            <Card.Body>
              <Card.Title>SUPERVISION</Card.Title>
              <Card.Text>
              login as a ministry organization<br></br> trace blood hisotry with no ristrictions
              </Card.Text>
              <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LOGIN
              </a>
            </Card.Body>
            
          </Card>
          <Card className="col-md-3">
            <Card.Img variant="top" src={user} />
            <Card.Body>
              <Card.Title>DONOR/PATIENT</Card.Title>
              <Card.Text>
              login as a donor or patient<br></br>trace blood, search for blood in hospitals
              </Card.Text>
            
                <a href="#">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                LOGIN
              </a>
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
              <button class="tablinks active" data-country="London"><p data-title="London">Our Technology</p></button>
              <button class="tablinks" data-country="Paris"><p data-title="Paris">Blood Search</p></button>
              <button class="tablinks" data-country="Barcelona"><p data-title="Barcelona">Blood Tracing</p></button>
            </div>

            
            <div class="wrapper_tabcontent">
              <div id="London" class="tabcontent active">
                  <b>
                  <h3>Technology</h3>
                  <p> </p>
                  </b>
              </div>

              <div id="Paris" class="tabcontent">
                  <h3>Search</h3>
                  <p>As a patient or a donor you can search for blood type in your city with blockchain technology </p>
              </div>

              <div id="Barcelona" class="tabcontent">
                  <h3>Tracing</h3>
                  <p>Barcelona has been an urban laboratory since the high Medieval Ages. A place of diversity, a backdrop for a multiplicity of social and cultural processes on multiple scales that reflect different ways of constructing the future, a city with a long experience of urban life and social innovations. </p>
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
                   
                    <div class="member" id="first">
                        <div class="box">
                            <div class="image">
                                <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" />
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
                  
                    <div class="member middle col-lg-4 col-md-4">
                        <div class="box">
                            <div class="image">
                                <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" />
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
                                <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" />
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
                  <div class="row">

                    <div class="member first2 col-lg-6 col-md-6">
                        <div class="box">
                            <div class="image">
                                <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" />
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
                    <div class="member second col-lg-6 col-md-6">
                        <div class="box">
                            <div class="image">
                                <img src="https://i.ibb.co/JC4skS0/team-animate.jpg" alt="team" class="img-fluid" />
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
                </div>
                
            </div>
        </section>
     </div>   
    );
  } 
}
  
  export default HomeContent;