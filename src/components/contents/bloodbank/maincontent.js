import {useHistory} from 'react-router-dom'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'

import BloodBankHeader from '../../headers/bloodbank'
import HomeContent from '../home'
import BloodBankHelp from '../bloodbank/help'
import BloodBankLogin from '../bloodbank/login'

function BloodBankContent() {
    return (
      <div>
        <Router>
        <BloodBankHeader />  
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