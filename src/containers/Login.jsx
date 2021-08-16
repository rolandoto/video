import React, { useState } from 'react'
import googleicom from '../assets/static/google-icon.png'
import Twiter from '../assets/static/twitter-icon.png'
import '../assets/styles/components/Login.scss'
import {Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { loginruests } from '../Action/Index'
const Login = (props) => {


  const [form,setValues] = useState({
    email: '',
    password:''
  })
 

  const handInput = (event) => {
      setValues({
        ...form,
        [event.target.name] : event.target.value
      })
  }

  const  handlsubmit = (e) => {
    e.preventDefault();
    //aqui me esta nenviedno el formulario a redux reducer
    props.loginruests(form)
    props.history.push('/')
    
  }


  console.log(handInput)

    return (
        <div>
             <section className="login">
    <section className="login__container">
      <h2>Inicia sesión</h2>
      <form className="login__container--form" onSubmit={handlsubmit}>
            <input 
            name="email"
            className="input"
            type="text" 
            placeholder="Correo"
            onChange={handInput}
              />
            <input
            name="password"
            className="input"
              type="password" 
              placeholder="Contraseña"
              onChange={handInput}/>

            <button className="button">Iniciar sesión</button>
            <div className="login__container--remember-me">
              <label>
                <input type="checkbox" id="cbox1" value="first_checkbox"/>Recuérdame
              </label>
              <a href="/">Olvidé mi contraseña</a>
            </div>
      </form>
      <section className="login__container--social-media">
        <div><img src={googleicom}/> Inicia sesión con Google</div>
        <div><img src={Twiter}/> Inicia sesión con Twitter</div>
      </section>
      <p className="login__container--register">No tienes ninguna cuenta 
     
    <Link to="/Resgister">
    Resgistrate
    </Link></p>
    </section>
    
  </section>
        </div>
    )
} 

const mapDispacthToPros =  {
  loginruests,
};
export default connect(null,mapDispacthToPros)(Login)
