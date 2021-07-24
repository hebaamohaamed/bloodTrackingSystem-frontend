import {useHistory} from 'react-router-dom'
import SuperHeader from '../../headers/supervision'

function SuperContent() {
  let history = useHistory();
    return (
      <div>
        <SuperHeader />
        <h1>Supervision Content</h1>
        <button onClick={()=>{history.push("/supervisionLogin");}}>login</button>
        <button onClick={()=>{history.push("/superVisionOptions");}}>options</button>
        <button onClick={()=>{history.push("/superVisionretrievebags");}}>retrieve bags</button>
        <button onClick={()=>{history.push("/superVisionbaghistory");}}>bag history</button>
        <button onClick={()=>{history.push("/superVisionretrieveprocesses");}}>retrieve processes</button>
      </div>
    );
  }
  
  export default SuperContent;