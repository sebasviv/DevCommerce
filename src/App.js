
import './App.css';
import Navbar from './components/Navbar';
import { FontAwsomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
//Componentes temp
import Integrante from './components/pages/Integrante';
import Quehacemos from './components/pages/quehacemos';
<<<<<<< HEAD
import Trabaja from './components/pages/trabaja';
import { TransitionGroup, CSSTransition } from "react-transition-group";

=======
import M_y_V from './components/MisionYVision';
import Objetive from './components/Objetivos';
import Product from './components/Producto';
import Tipo from './components/TipoEmpresa';
import Mercado from './components/Mercado';
import Financiero from './components/Financiero';
>>>>>>> 864be76d2b3cfbef9144bd612de122d37dc98a62

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
        </Switch>
      </Router>



      {/* <M_y_V/>
    <Objetive/>
    <Product/>
    <Mercado/>
<<<<<<< HEAD
    <Tipo/> */}
=======
    <Tipo/>
    <Financiero/>
>>>>>>> 864be76d2b3cfbef9144bd612de122d37dc98a62
    </>

  );
}

export default App;
