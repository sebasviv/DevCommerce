
import './App.css';
import Navbar from './components/Navbar';
import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Componentes temp
import Integrante from './components/pages/Integrante';
import Quehacemos from './components/pages/quehacemos';


function App() {
  return (
    <>
   <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/quienessomos' exact component={Integrante} />
          <Route path='/quehacemos' exact component={Quehacemos} />
        </Switch>
      </Router>
      
    </>
    
  );
}

export default App;
