import logo from './logo.svg';
import './App.css';
import TopNavBar from './TopNavBar/TopNavBar'
import MainWindow from './MainWindow/MainWindow'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <TopNavBar/>
      <MainWindow/>
    </div>
  );
}

export default App;
