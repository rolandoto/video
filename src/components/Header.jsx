import React from 'react';
import '../assets/styles/components/Header.scss';
import {connect} from 'react-redux'
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';
import {Link} from 'react-router-dom'
import gravatar from '../gravatar/Gravatar';
import { logaouRequest } from '../Action/Index';

const Header = (props) => {

  const {user} = props



//para validar un objecto
//cuando aqui me ntre un dato aqui me a decir si hay dato guardado o no por
//mnedio de loa longitud
const hanuser = Object.keys(props.user).length > 0


//cerrar seccion n
const hanlogo = e => {
  //va enviar un objecto vacio
  props.logaouRequest({})
}




return (
  <header className="header">
    <Link to="/">
    <img className="header__img" src={logo} alt="Platzi Video" />
    </Link>
   
    <div className="header__menu">
      <div className="header__menu--profile">
        {hanuser ? 
            <img src={gravatar(user.email)} alt=""/>
            :
            <img src={userIcon} alt="" />
      }
    

        <p>Perfil</p>
      </div>
      <ul>
    
   {hanuser  ?
 <li>
 <a href="/">{user.email}</a>
 </li>
   :
      null
   }

       

{hanuser ? 
    <li><a href="/" onClick={hanlogo}> cerrar seccion </a></li>
:


          <li>
      
          <Link to="/login">
        iniciar seccion
        </Link>
          </li>
      }   
          </ul>
    
    </div>
  </header>
  )

}
const  mapStateToProps = state => {
    return {
      user: state.user,
    }
}

const mapDispachToPros = {
  logaouRequest
}

export default connect(mapStateToProps,mapDispachToPros)(Header)
