import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HomeContent from './components/contents/home'
import HospitalContent from './components/contents/hospital/maincontent'
import BloodBankContent from './components/contents/bloodbank/maincontent'
import SuperContent from './components/contents/supervision/maincontent'
import UserContent from './components/contents/users/maincontent'
import Footer from './components/footer'
import BloodBankOptions from './components/contents/bloodbank/options'
import BloodBankLogin from './components/contents/bloodbank/login'
import BloodBankDonation from './components/contents/bloodbank/donation'
import BloodBankRetrieveBloodBags from './components/contents/bloodbank/Blood-Bank-RetrieveBloodBags'
import bloodBankSendBags from './components/contents/bloodbank/Blood-Bank-SendBag'
import hospitalBagRecieved from './components/contents/hospital/Hospital-Bag-Recieved'
import hospitalBagUsed from './components/contents/hospital/Hospital-Bag-Used'
import retrieveAll from './components/contents/supervision/RetrieveAll'
import superVisionAuthorityLogin from './components/contents/supervision/SuperVisionAuthority-Login'
import hospitalOptions from './components/contents/hospital/Hospital-Options'
import hospitalTrackBloodBagInfo from './components/contents/hospital/Hospital-TrackBloodBagInfo'
import hospitalTrackingBlood from './components/contents/hospital/Hospital-TrackingBlood'
import hospitalBagHistory from './components/contents/hospital/Hospital-BagHistory'
import {RetrieveBloodBags} from './components/contents/hospital/RetrieveBloodBags'
import {RetrieveProcesses} from './components/contents/hospital/Hospital-RetrieveProcesses'
import {HospitalLogin} from './components/contents/hospital/Hospital-Login'

import bloodBankTrackingBlood from './components/contents/bloodbank/Blood-Bank-TrackingBlood'
import BloodBankRetrieveProcesses from './components/contents/bloodbank/Blood-Bank-RetrieveProcesses'




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
        <Route exact path="/bloodBankLogin" component={BloodBankLogin}></Route>
        <Route exact path="/donation" component={BloodBankDonation}></Route>
        <Route exact path="/bloodBagRetrieve" component={BloodBankRetrieveBloodBags}></Route>
        <Route exact path="/bloodBagSendBag" component={bloodBankSendBags}></Route>
        <Route exact path="/HospitalBagRecieved" component ={hospitalBagRecieved}></Route>
        <Route exact path="/HospitalBagUsed" component={hospitalBagUsed}></Route>

        <Route exact path="/RetrieveAll" component={retrieveAll}></Route>
        <Route exact path="/SupervisionLogin" component ={superVisionAuthorityLogin}></Route>
        <Route exact path="/HospitalOptions" component={hospitalOptions}></Route>
        <Route exact path="/HospitalTrackBloodBagInfo" component={hospitalTrackBloodBagInfo}></Route>
        <Route exact path="/HospitalTrackingBlood" component={hospitalTrackingBlood}></Route>
        <Route exact path="/HospitalBagHistory" component={hospitalBagHistory}></Route>
        <Route exact path="/RetrieveBloodBag" component={RetrieveBloodBags}></Route>
        <Route exact path="/RetrieveProcesses" component={RetrieveProcesses}></Route>
        <Route exact path="/HospitalLogin" component={HospitalLogin}></Route>

        <Route exact path="/bloodTracking" component={bloodBankTrackingBlood}></Route>
        <Route exact path="/retrieveProcesses" component={BloodBankRetrieveProcesses}></Route>



      </Router>
      <Footer />
    </div>
  );
}

export default App;
