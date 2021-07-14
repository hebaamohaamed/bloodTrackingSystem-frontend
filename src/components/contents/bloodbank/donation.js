import {useHistory} from 'react-router-dom'

function BloodBankDonation() {
  let history = useHistory();
    return (
    <div className='signup-container'>
      <div className='right-container'>
        <header>
          <h1>Blood Info, Be careful!</h1>
          <div className='set'>
            <div className='Date'>
              <label for='Date'>Date</label>
              <input id='Date' placeholder="MM/DD/YYYY" type='date' />
            </div>
            <div className='Expire'>
              <label for='Expire'>Expire</label>
              <input id='Expire' placeholder='MM/DD/YYYY' type='date' />
            </div>
          </div>
          <div className='set'>
              <div className='Test'>
                <label for='Test'>Test</label>
                <input id='Test' placeholder="Secure/Not Secure" type='text' />
              </div>
              <div className='Temperature'>
                <label for='Temperature'>Temperature</label>
                <input id='Temperature' placeholder='20C' type='text' />
              </div>
            </div>
          <div className='longInput'>
              <label for='Millimeters'>Millimeters</label>
              <div className='radio-container'>
                  <input id='Millimeters' placeholder='20C' type='text' />
              </div>   
          </div>
          <div className='longInput'>
              <label for='A+'>Blood Type</label>
              <div className='radio-container'>
                <input id='A+' name='pet-weight' type='radio' value='A+' />
                <label for='A+'>A+</label>

                <input id='B+' name='pet-weight' type='radio' value='B+' />
                <label for='B+'>B+</label>

                <input id='O+' name='pet-weight' type='radio' value='O+' />
                <label for='O+'>O+</label>

                <input id='AB+' name='pet-weight' type='radio' value='AB+' />
                <label for='AB+'>AB+</label>

                <input id='A-' name='pet-weight' type='radio' value='A-' />
                <label for='A-'>A-</label>

                <input id='B-' name='pet-weight' type='radio' value='B-' />
                <label for='B-'>B-</label>

                <input id='O-' name='pet-weight' type='radio' value='O-' />
                <label for='O-'>O-</label>

                <input id='AB-' name='pet-weight' type='radio' value='AB-' />
                <label for='AB-'>AB-</label>
              </div>
            </div>
          <div className='longInput'>
              <label for='Email'>Email</label>
              <div className='radio-container'>
                  <input id='Email' placeholder="Write patient's Email" type='text' />
              </div>   
          </div>
          
        </header>
        <footer>
          <div className='set'>
              <a id="new" href="/" >New Donor</a>
              <a id="existing" href="/" >Existing Donor</a>
          </div>
        </footer>
      </div>
    </div>
    );
  }
  
  export default BloodBankDonation;