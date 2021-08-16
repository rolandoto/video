import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { loagouregister } from '../Action/Index'
import '../assets/styles/components/Register.scss'
const Resgister = (props) => {

  const {practice} = props
  console.log(practice)
  const [form,setform] = useState({
    email:'',
    nombre:'',
    passaword:''
  })


  const handnput = (event) =>{
    setform({
      ...form,
      [event.target.name]:event.target.value
    })
  }



  const handform = (e) => {
    e.preventDefault()
    props.loagouregister(form)
    props.history.push('/')
    


  }
    



    return (
        <div>
            <section className="register">
    <section className="register__container">
      <h2>Regístrate</h2>
      <form className="register__container--form" onSubmit={handform}>
        <input 
        name="nombre"
        className="input"
         type="text" 
         placeholder="Nombre"
         onChange={handnput}/>

        <input 
        name="email"
        className="input"
         type="text"
          placeholder="Correo"
          onChange={handnput}/>

        <input
        name="passaword"
         className="input" 
         type="password" 
         placeholder="Contraseña"
         onChange={handnput}/>
        <button className="button">Registrarme</button>
      </form>
     <Link to="/login">iniciar  seccion</Link>
    </section>
  </section>
        </div>
    )
}

const mapDispachToPros = {
  loagouregister
}




export default connect(null,mapDispachToPros)(Resgister)