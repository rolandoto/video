import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Layout from '../components/Layout'
import Home from '../containers/Home'
import Login from '../containers/Login'
import Nofound from '../containers/Nofound'
import Player from '../containers/Player'
import Resgister from '../containers/Resgister'


const App = () =>(

    <BrowserRouter>
     <Layout>
     <Switch>
         
        <Route exact path="/"  component={Home}/>
        <Route exact path="/Login"  component={Login}/>
        <Route exact path="/Register"  component={Resgister}/>
        //player/:id una forma de pasarle propiedades a nuesra rutas
        <Route exact path="/Player/:id"  component={Player}/>
        <Route  component={Nofound}/>
    </Switch>
    </Layout>
    </BrowserRouter>
)

export  default App