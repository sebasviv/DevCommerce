
import './App.css';
import Navbar from './components/Navbar';
import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';
import Integrante from './components/Integrante';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact />
      </Switch>
    </Router>
      
    <Integrante />
    </>
    
  );
}

export default App;
