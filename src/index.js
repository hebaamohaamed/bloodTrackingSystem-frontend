import React from 'react';
import ReactDOM from 'react-dom';
import { CookiesProvider } from "react-cookie";


import './fontawesome';
import './css/options.css';
import './css/Blood-Bank-NewDonation.css'
import './css/headers.css'
import './css/Hospital-Bag-Recieved.css'
import './css/Login-form.css'
import './css/User-RetrieveBloodBags.css'
import './css/Hospital-Options.css'
import './css/TrackingBlood.css'
import './css/RetrieveBloodBags.css'
import './css/Hospital-BagHistory.css'
import './css/home.css'
import './css/footer.css'


import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
    <App />
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

