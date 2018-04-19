import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import App from './components/app/App';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
// import ComponenteFuncional from './ejemplos/componentefuncional/funcional.js';
// import Normal from './ejemplos/componentenormal/normal.js';
// import Puro from './ejemplos/componentepuro/puro.js';
import Home from './pages/containers/home.js';
import Contacto from './pages/containers/contacto.js';
import Perfil from './pages/containers/perfil.js';
import Login from './pages/containers/login.js';
import Logout from './pages/containers/logout.js';
//import data from './datos.json';

//var MyName = 'Cesáreo Castillo Torres';

//ReactDOM.render(<ComponenteFuncional Nombre={MyName} />, document.getElementById('root'));
//ReactDOM.render(<Normal />, document.getElementById('root'));
//ReactDOM.render(<Puro />, document.getElementById('root'));
//ReactDOM.render(<Home datos={data}/>, document.getElementById('root'));
//ReactDOM.render(<App />, document.getElementById('root'));

//React Router
//ReactDOM.render(<Contacto/>, document.getElementById('root'));
ReactDOM.render(
    <BrowserRouter>
    <div>
        {/*
        <Redirect from="/" to="/home" />        
        <Route path='/home' component={Home} />
        <Route path='/contacto' component={Contacto} />        
         */}
        <Switch>
        <Route exact path='/' component={Home}/>
        {/* both /roster and /roster/:number begin with /roster */}
        <Route path='/home' component={Home}/>
        <Route path='/contacto' component={Contacto}/>
        <Route path='/perfil' component={Perfil}/>
        <Route path='/login' component={Login}/>
        <Route path='/logout' component={Logout}/>
        </Switch>
    </div>
    </BrowserRouter>
    ,document.getElementById('root'))

registerServiceWorker();
