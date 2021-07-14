import {useHistory} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import BloodBankHeader from '../../headers/bloodbank'
import HomeContent from '../home'
import BloodBankHelp from './help'
import BloodBankLogin from './login'
import BloodBankDonation from './donation'
import BloodBankOptions from './options'


function BloodBankContent() {
  let history = useHistory();
    return (
      <div>
        <Router>
        <BloodBankHeader /> 
        <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        <button onClick={()=>{history.push("/options");}}>go to options</button>
        <switch>
          <Route exact path="/bloodbank/help"><BloodBankHelp /> </Route>
          <Route exact path="/bloodbank/login"><BloodBankLogin /></Route>
          <Route exact path="/bloodbank"><BloodBankLogin /></Route>
       </switch>
       </Router>
      
      </div>
    );
  }
  
  export default BloodBankContent;