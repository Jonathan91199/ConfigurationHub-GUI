import './App.css';
import TopNavBar from './TopNavBar/TopNavBar'
import MainWindow from './MainWindow/MainWindow'
import React from 'react'
import { NotificationContainer } from 'react-notifications'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-notifications/lib/notifications.css'


class App extends React.Component {

  componentDidMount() {
    var mainDiv = document.getElementById("test")
    mainDiv.scrollTop = mainDiv.scrollHeight
  }
  render() {

    return (
      <div className="App" id="test">
        <TopNavBar />
        <MainWindow />
        <NotificationContainer />
      </div>
    );
  }
}

export default App;
