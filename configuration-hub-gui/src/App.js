import './App.css';
import TopNavBar from './TopNavBar/TopNavBar'
import MainWindow from './MainWindow/MainWindow'
import React from 'react'
import { Container } from 'react-bootstrap'
import { NotificationContainer } from 'react-notifications'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/react-notifications/lib/notifications.css'
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css'
import '../node_modules/jsoneditor/dist/jsoneditor.min.css'


class App extends React.Component {

  componentDidMount() {
    var mainDiv = document.getElementById("test")
    mainDiv.scrollTop = mainDiv.scrollHeight
  }
  render() {

    return (
      <div className="App" id="test">
        <Container fluid id="MainAppContainer">
          <TopNavBar />
          <MainWindow />
          <NotificationContainer />
        </Container>

      </div>
    );
  }
}

export default App;
