import HomeHeader from '../headers/home'
import blank from '../../imgs/blank.png'
import {Carousel, Row, Col, Card, CardGroup} from 'react-bootstrap'
import { Component } from 'react'
import bloodDonation from '../../imgs/blood-donation.jpg'
import bloodRecieve from '../../imgs/blood-recieve.jpg'
import bloodTypes from '../../imgs/blood-types.jpg'
import bloodTypes2 from '../../imgs/blood-types2.jpg'
import bloodTested from '../../imgs/blood-tested.jpg'
import hospital from '../../imgs/hospital.jpg'
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
        <HomeHeader />
        <div id="home">
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
              <h3>First slide label</h3>
              <p>Search For Blood Type At The Nearest Hospital</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="image"
              src={bloodDonation}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Track Your Donated Blood With Our Trusted Technology</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={2000}>
            <img
              className="image"
              src={bloodRecieve}
              alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Make Sure The Blood Is 100% Safe With Our Trusted Technology</p>
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
                This is a wider card with supporting text below as a natural lead-in to.
                
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
            <Card.Img variant="top" src={blank} />
            <Card.Body>
              <Card.Title>BLOODBANK</Card.Title>
              <Card.Text>
                This card has supporting text below as a natural lead-in to add.
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
            <Card.Img variant="top" src={blank} />
            <Card.Body>
              <Card.Title>SUPERVISION</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural lead-in to.
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
            <Card.Img variant="top" src={blank} />
            <Card.Body>
              <Card.Title>DONOR/PATIENT</Card.Title>
              <Card.Text>
              This card has supporting text below as a natural lead-in to addition.
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
              <button class="tablinks active" data-country="London"><p data-title="London">London</p></button>
              <button class="tablinks" data-country="Paris"><p data-title="Paris">Paris</p></button>
              <button class="tablinks" data-country="Barcelona"><p data-title="Barcelona">Barcelona</p></button>
              <button class="tablinks" data-country="Madrid"><p data-title="Madrid">Madrid</p></button>
            </div>

            
            <div class="wrapper_tabcontent">
              <div id="London" class="tabcontent active">
                  <b>
                  <h3>London</h3>
                  <p>London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces: Hyde Park and Regent Park are the largest. The City is the oldest part of London.London is the capital of Great Britain. It is one of the greatest cities in the world. It is an important business and financial centre. It is an intellectual centre, too. Everywhere in London, there are open spaces: Hyde Park and Regent Park are the largest. The City is the oldest part of London. </p>
                  </b>
              </div>

              <div id="Paris" class="tabcontent">
                  <h3>Paris</h3>
                  <p>Paris is in the Paris department of the Paris-Isle-of-France region The French historic, political and economic capital, with a population of only 2.5 million is located in the northern part of France. One of the most beautiful cities in the world. Home to historical monuments such as Notre Dame, the Eiffel tower (320m), Bastille, Louvre and many more. </p>
              </div>

              <div id="Barcelona" class="tabcontent">
                  <h3>Barcelona</h3>
                  <p>Barcelona has been an urban laboratory since the high Medieval Ages. A place of diversity, a backdrop for a multiplicity of social and cultural processes on multiple scales that reflect different ways of constructing the future, a city with a long experience of urban life and social innovations. </p>
              </div>

              <div id="Madrid" class="tabcontent">
                  <h3>Madrid</h3>
                  <p>Madrid is in the middle of Spain, in the Community of Madrid. The Community is a large area that includes the city as well as small towns and villages outside the city. 7 million people live in the Community. More than 3 million live in the city itself. 
                  </p>
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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    <br></br>incididunt ut labore et dolore magna aliqua.</p>
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