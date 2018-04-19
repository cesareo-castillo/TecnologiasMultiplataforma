import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {    
    Nav,
    NavItem
  } from 'reactstrap';

  class Sidebar extends Component{
    // eslint-disable-next-line
    constructor(props){
        super(props);
        this.state = {
            home:'nav-link active',
            contacto:'nav-link'
        };
    }
    activeLink = (pagina) =>{
        return "nav-link " + ((this.props.pagina) === pagina ? 'active':'');
    }

    
    render(){
        let session = sessionStorage.getItem('session');
        var navperfil = 
        <NavItem>            
            <Link className={this.activeLink('perfil')} to="/perfil">Perfil</Link>
        </NavItem>
        var login = 
        <NavItem>            
            <Link className={this.activeLink('login')} to="/login">Login</Link>
        </NavItem>
        var logout = 
        <NavItem>            
            <Link className={this.activeLink('logout')} to="/logout">Logout</Link>
        </NavItem>
       return(        
        <div>
            <Nav vertical pills>
            <h4>Tu Blog</h4>
            <NavItem>
                {/*<Link className={this.state.home} onClick={(e)=>{this.setState({home:'nav-link active',contacto:'nav-link'});}} to="/home">Home</Link>*/}
                <Link className={this.activeLink('home')} to="/home">Home</Link>
            </NavItem>
            <NavItem>
                {/*<Link className={this.state.contacto} onClick={(e)=>{this.setState({home:'nav-link',contacto:'nav-link active'});}} to="/contacto">Contacto</Link>*/}
                <Link className={this.activeLink('contacto')} to="/contacto">Contacto</Link>
            </NavItem>
            {session ? navperfil : ''}            
            {session ? logout : login}
            </Nav>
        </div>
       );
    }
  }

  export default Sidebar;