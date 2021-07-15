import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContent from './components/contents/home'
import HospitalContent from './components/contents/hospital/maincontent'
import BloodBankContent from './components/contents/bloodbank/maincontent'
import SuperContent from './components/contents/supervision/maincontent'
import UserContent from './components/contents/users/maincontent'
import Footer from './components/footer'
import BloodBankOptions from './components/contents/bloodbank/options'
import hospitalBagRecieved from './components/contents/hospital/Hospital-Bag-Recieved'
import hospitalBagUsed from './components/contents/hospital/Hospital-Bag-Used'
import hospitalLogin from './components/contents/hospital/Hospital-Login'
import userLogin from './components/contents/users/User-Login'
import userOptions from './components/contents/users/User-Options'
import userRetrieveBloodBags from './components/contents/users/User-RetrieveBloodBags'
import userTrackingBlood from './components/contents/users/User-TrackingBlood'
import userTrackingBoodBagInfo from './components/contents/users/User-TrackingBoodBagInfo'
import viewHospitalByBloodType from './components/contents/users/ViewHospitalByBloodType'


function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomeContent}></Route>
        <Route exact path="/home" component={HomeContent}></Route>
        <Route exact path="/hospital" component={HospitalContent}></Route>
        <Route exact path="/bloodbank" component={BloodBankContent}></Route>
        <Route exact path="/supervision" component={SuperContent}></Route>
        <Route exact path="/user" component={UserContent}></Route>
        <Route exact path="/options" component={BloodBankOptions}></Route>
        <Route exact path="/HospitalBagRecieved" component ={hospitalBagRecieved}></Route>
        <Route exact path="/HospitalBagUsed" component={hospitalBagUsed}></Route>
        <Route exact path="/HospitalLogin" component={hospitalLogin}></Route>
        <Route exact path="/UserLogin" component={userLogin}></Route>
        <Route exact path="/UserOption" component={userOptions}></Route>
        <Route exact path="/UserRetrieveBloodBags" component={userRetrieveBloodBags}></Route>
        <Route exact path="/UserTrackingBlood" component={userTrackingBlood}></Route>
        <Route exact path="/UserTrackingBloodInfo" component={userTrackingBoodBagInfo}></Route>
        <Route exact path="/ViewHospitalBloodType" component={viewHospitalByBloodType}></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
