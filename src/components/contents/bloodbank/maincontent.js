import {useHistory} from 'react-router-dom'
import BloodBankHeader from '../../headers/bloodbank'
import BloodBankLogin from '../bloodbank/login'

function BloodBankContent() {
  let history = useHistory();
    return (
      <div>
        <BloodBankHeader />
        <BloodBankLogin />
        
      </div>
    );
  }
  
  export default BloodBankContent;