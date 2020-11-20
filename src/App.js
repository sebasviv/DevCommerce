
import './App.css';
import Navbar from './components/Navbar';
import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Componentes temp
import Integrante from './components/Integrante';
import M_y_V from './components/MisionYVision'

function App() {
  return (
    <>
   <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
        </Switch>
      </Router>
      
    <Integrante />
    <M_y_V/>
    </>
    
  );
}

export default App;
