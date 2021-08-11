import React from 'react';
import './assets/App.css';
import Header from './components/Header/Header';
//rotas de percurso do menu.
import { BrowserRouter as Router, Redirect, Route,Switch} from 'react-router-dom';

// Import Web Page Views.
import index from'./views/index/index';
import rotas from'./views/rotas';
import sobre from './views/sobre';
import DefaulPadrao from './views/404' 
/*Import footer e footer Ico. */
import Footer from './components/Footer/Footer';
import Endereco from './assets/img/icones/endereco.png';
import Telefone from './assets/img/icones/telefone.png';
import Calendario from './assets/img/icones/calendario.png';


 

export default function App(){
    return (
    <div className="App">
      <Router>
          <Header/>
          <Switch>
          <Route path="/"  exact component={index}/>
          <Route path="/sobre/" exact component={sobre}/>
          <Route path="/rotas/" exact component={rotas}/>
          <Route path="*">
          <Redirect exactfrom="/" to="/"/>
          </Route>
          </Switch>   
          <Footer enderecoIco={Endereco} endereco="Endereço Av.123,222 - Rio de Janeiro RJ" telefoneIco={Telefone} contato="Cel:5521000000000" calendarioIco={Calendario} calendario="Faça sua reserva pelo Booking.com"/>
       </Router>
    </div>
  );
}

 
