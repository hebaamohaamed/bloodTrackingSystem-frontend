import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//home
import HomeContent from './components/contents/home'

//hospital
import HospitalContent from './components/contents/hospital/maincontent'
import hospitalBagRecieved from './components/contents/hospital/Hospital-Bag-Recieved'
import hospitalBagUsed from './components/contents/hospital/Hospital-Bag-Used'
import hospitalOptions from './components/contents/hospital/Hospital-Options'
import hospitalTrackBloodBagInfo from './components/contents/hospital/Hospital-TrackBloodBagInfo'
import hospitalTrackingBlood from './components/contents/hospital/Hospital-TrackingBlood'
import hospitalBagHistory from './components/contents/hospital/Hospital-BagHistory'
import {HospitalRetrieveBloodBags} from './components/contents/hospital/Hospital-RetrieveBloodBags'
import {HospitalRetrieveProcesses} from './components/contents/hospital/Hospital-RetrieveProcesses'
import {HospitalLogin} from './components/contents/hospital/Hospital-Login'

//bloodbank
import BloodBankContent from './components/contents/bloodbank/maincontent'
import BloodBankOptions from './components/contents/bloodbank/options'
import BloodBankLogin from './components/contents/bloodbank/Blood-Bank-Login'
import BloodBankLogout from './components/contents/bloodbank/BloodBank-Logout'
import BloodBankDonation from './components/contents/bloodbank/donation'
import BloodBankRetrieveBloodBags from './components/contents/bloodbank/Blood-Bank-RetrieveBloodBags'
import bloodBankSendBags from './components/contents/bloodbank/Blood-Bank-SendBag'
import bloodBankTrackingBlood from './components/contents/bloodbank/Blood-Bank-TrackingBlood'
import BloodBankRetrieveProcesses from './components/contents/bloodbank/Blood-Bank-RetrieveProcesses'

//supervision
import SuperContent from './components/contents/supervision/maincontent'
import retrieveAll from './components/contents/supervision/RetrieveAll'
import superVisionAuthorityLogin from './components/contents/supervision/SuperVisionAuthority-Login'


//user
import UserContent from './components/contents/users/maincontent'

//footer
import Footer from './components/footer'



function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path="/" component={HomeContent}></Route>
        <Route exact path="/home" component={HomeContent}></Route>


        <Route exact path="/hospital" component={HospitalContent}></Route>
        <Route exact path="/HospitalBagRecieved" component ={hospitalBagRecieved}></Route>
        <Route exact path="/HospitalBagUsed" component={hospitalBagUsed}></Route>
        <Route exact path="/HospitalOptions" component={hospitalOptions}></Route>
        <Route exact path="/HospitalTrackBloodBagInfo" component={hospitalTrackBloodBagInfo}></Route>
        <Route exact path="/HospitalTrackingBlood" component={hospitalTrackingBlood}></Route>
        <Route exact path="/HospitalBagHistory" component={hospitalBagHistory}></Route>
        <Route exact path="/HospitalLogin" component={HospitalLogin}></Route>


        <Route exact path="/bloodbank" component={BloodBankContent}></Route>
        <Route exact path="/bloodBankOptions" component={BloodBankOptions}></Route>
        <Route exact path="/bloodBankLogin" component={BloodBankLogin}></Route>
        <Route exact path="/bloodBankLogout" component={BloodBankLogout}></Route>
        <Route exact path="/bloodBankdonation" component={BloodBankDonation}></Route>
        <Route exact path="/bloodBankbloodBagRetrieve" component={BloodBankRetrieveBloodBags}></Route>
        <Route exact path="/bloodBankbloodBagSendBag" component={bloodBankSendBags}></Route>
        <Route exact path="/bloodBankbloodTracking" component={bloodBankTrackingBlood}></Route>
        <Route exact path="/bloodBankretrieveProcesses" component={BloodBankRetrieveProcesses}></Route>


        <Route exact path="/supervision" component={SuperContent}></Route>

        <Route exact path="/user" component={UserContent}></Route>


        <Route exact path="/RetrieveAll" component={retrieveAll}></Route>
        <Route exact path="/SupervisionLogin" component ={superVisionAuthorityLogin}></Route>



      </Router>
      <Footer />
    </div>
  );
}

export default App;
