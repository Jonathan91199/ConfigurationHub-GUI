import './App.css';
import TopNavBar from './TopNavBar/TopNavBar'
import MainWindow from './MainWindow/MainWindow'

import {NotificationContainer} from 'react-notifications'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-notifications/lib/notifications.css'


function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <MainWindow/>
      <NotificationContainer/>
    </div>
  );
}

export default App;
