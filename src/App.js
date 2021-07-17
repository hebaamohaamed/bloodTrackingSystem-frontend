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
import {HospitalLogin} from './components/contents/hospital/Hospital-Login'


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
        <Route exact path="/HospitalLogin" component={HospitalLogin}></Route>
      </Router>
      <Footer />
    </div>
  );
}

export default App;
