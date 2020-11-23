
import './App.css';
import Navbar from './components/Navbar';
import { FontAwsomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//Componentes temp
import Integrante from './components/pages/Integrante';
import Quehacemos from './components/pages/quehacemos';
import Trabaja from './components/pages/trabaja';
import Financiera from './components/pages/Financiero';
import { TransitionGroup, CSSTransition } from "react-transition-group";


function App() {
  return (
    <>
      <Router>


        <Navbar />
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/devcommerce">
            <Redirect to="/home" />
          </Route>

          <Route path='/home' exact component={Home} />

          <Route path='/quienessomos' exact component={Integrante} />
          <Route path='/quehacemos' exact component={Quehacemos} />
          <Route path='/trabaja' exact component={Trabaja} />
          <Route path='/financiera' exact component={Financiera} />
        </Switch>
      </Router>
    </>

  );
}

export default App;
