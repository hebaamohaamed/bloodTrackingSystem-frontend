import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//home
import HomeContent from './components/contents/home'

//hospital
import hospitalBagRecieved from './components/contents/hospital/Hospital-Bag-Recieved'
import hospitalBagUsed from './components/contents/hospital/Hospital-Bag-Used'
import hospitalOptions from './components/contents/hospital/Hospital-Options'
import hospitalTrackBloodBagInfo from './components/contents/hospital/Hospital-TrackBloodBagInfo'
import hospitalTrackingBlood from './components/contents/hospital/Hospital-TrackingBlood'
import hospitalBagHistory from './components/contents/hospital/Hospital-BagHistory'
import {HospitalRetrieveBloodBags} from './components/contents/hospital/Hospital-RetrieveBloodBags'
import {HospitalRetrieveProcesses} from './components/contents/hospital/Hospital-RetrieveProcesses'
import HospitalLogin from './components/contents/hospital/Hospital-Login'
import HospitalLogout from './components/contents/hospital/Hospital-Logout'

//bloodbank
import BloodBankOptions from './components/contents/bloodbank/options'
import BloodBankLogin from './components/contents/bloodbank/Blood-Bank-Login'
import BloodBankLogout from './components/contents/bloodbank/BloodBank-Logout'
import BloodBankDonation from './components/contents/bloodbank/donation'
import BloodBankRetrieveBloodBags from './components/contents/bloodbank/Blood-Bank-RetrieveBloodBags'
import bloodBankSendBags from './components/contents/bloodbank/Blood-Bank-SendBag'
import bloodBankTrackingBlood from './components/contents/bloodbank/Blood-Bank-TrackingBlood'
import BloodBankRetrieveProcesses from './components/contents/bloodbank/Blood-Bank-RetrieveProcesses'
import BloodBankBagHistory from './components/contents/bloodbank/Blood-Bank-BagHistory'
import BloodBankTrackBloodBagInfo from './components/contents/bloodbank/Blood-Bank-TrackingBloodInfo'

//supervision
import superVisionAuthorityLogin from './components/contents/supervision/SuperVisionAuthority-Login'
import SupervisionOptions from './components/contents/supervision/Supervision-options'
import SupervisionRetrieveBloodBags from './components/contents/supervision/Supervision-RetrieveBloodBags'
import SupervisionBagHistory from './components/contents/supervision/Supervision-BagHistory'
import SupervisionRetrieveProcesses from './components/contents/supervision/Supervision-RetrieveProcesses'



//user
import UserLogin from './components/contents/users/User-Login'
import UserOptions from './components/contents/users/User-Options'
import UserRetrieveBloodBags from './components/contents/users/User-RetrieveBloodBags'
import userTrackingBlood from './components/contents/users/User-TrackingBlood'
import ViewHospitalByBloodType from './components/contents/users/ViewHospitalByBloodType'
import UserLogout from './components/contents/users/User-Logout'

//footer
import Footer from './components/footer'


function App() {
  return (
    <div className="App">
      <Router>
        
        <Route exact path="/" component={HomeContent}></Route>
        <Route exact path="/home" component={HomeContent}></Route>


        <Route exact path="/HospitalBagRecieved" component ={hospitalBagRecieved}></Route>
        <Route exact path="/HospitalBagUsed" component={hospitalBagUsed}></Route>
        <Route exact path="/HospitalOptions" component={hospitalOptions}></Route>
        <Route exact path="/HospitalTrackBloodBagInfo" component={hospitalTrackBloodBagInfo}></Route>
        <Route exact path="/HospitalTrackingBlood" component={hospitalTrackingBlood}></Route>
        <Route exact path="/HospitalBagHistory" component={hospitalBagHistory}></Route>
        <Route exact path="/HospitalLogin" component={HospitalLogin}></Route>
        <Route exact path="/HospitalLogout" component={HospitalLogout}></Route>
        <Route exact path="/HospitalRetrieveBloodBags" component={HospitalRetrieveBloodBags}></Route>
        <Route exact path="/HospitalRetrieveProcesses" component={HospitalRetrieveProcesses}></Route>



        <Route exact path="/bloodBankOptions" component={BloodBankOptions}></Route>
        <Route exact path="/bloodBankLogin" component={BloodBankLogin}></Route>
        <Route exact path="/bloodBankLogout" component={BloodBankLogout}></Route>
        <Route exact path="/bloodBankdonation" component={BloodBankDonation}></Route>
        <Route exact path="/bloodBankbloodBagRetrieve" component={BloodBankRetrieveBloodBags}></Route>
        <Route exact path="/bloodBankbloodBagSendBag" component={bloodBankSendBags}></Route>
        <Route exact path="/bloodBankbloodTracking" component={bloodBankTrackingBlood}></Route>
        <Route exact path="/bloodBankretrieveProcesses" component={BloodBankRetrieveProcesses}></Route>
        <Route exact path="/bloodBankbaghistory" component={BloodBankBagHistory}></Route>
        <Route exact path="/bloodBanktrackingbloodinfo" component={BloodBankTrackBloodBagInfo}></Route>


        <Route exact path="/SupervisionLogin" component ={superVisionAuthorityLogin}></Route>
        <Route exact path="/superVisionOptions" component={SupervisionOptions}></Route>
        <Route exact path="/superVisionretrievebags" component={SupervisionRetrieveBloodBags}></Route>
        <Route exact path="/superVisionretrieveprocesses" component={SupervisionRetrieveProcesses}></Route>
        <Route exact path="/superVisionbaghistory" component={SupervisionBagHistory}></Route>

        <Route exact path="/UserLogin" component={UserLogin}></Route>
        <Route exact path="/UserOption" component={UserOptions}></Route>
        <Route exact path="/UserRetrieveBloodBags" component={UserRetrieveBloodBags}></Route>
        <Route exact path="/UserTrackingBlood" component={userTrackingBlood}></Route>
        <Route exact path="/ViewHospitalBloodType" component={ViewHospitalByBloodType}></Route>
        <Route exact path="/UserLogout" component={UserLogout}></Route>


      </Router>
      <Footer />
    </div>
  );
}

export default App;
