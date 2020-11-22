
import './App.css';
import Navbar from './components/Navbar';
import {FontAwsomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons';

import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
//Componentes temp
<<<<<<< HEAD
import Integrante from './components/pages/Integrante';
import Quehacemos from './components/pages/quehacemos';

=======
import Integrante from './components/Integrante';
import M_y_V from './components/MisionYVision';
import Objetive from './components/Objetivos';
import Product from './components/Producto';
>>>>>>> c3bfc4a03ea531eeb22943e7cb4d4d04674581c8

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
      
<<<<<<< HEAD
=======
    <Integrante />
    <M_y_V/>
    <Objetive/>
    <Product/>
>>>>>>> c3bfc4a03ea531eeb22943e7cb4d4d04674581c8
    </>
    
  );
}

export default App;
