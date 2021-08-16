import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getvideo } from '../Action/Index'
import Nofound from './Nofound'
const Player = (props) => {

   

    const handback = () => {
        props.history.goBack()
    } 

    const {id} = props.match.params;


    useEffect(()=> {
        props.getvideo(id)
   },[])
   
    //para validar un objecto si hay un datos 
    const hasplaying = Object.keys(props.playing).length> 0

    
    return hasplaying ? (
        <div className="Player">
            <video  controls autoPlay>
                <source src={   props.playing.source} type="video/mp4">
               
                </source>
                 
            </video>
            <div className="player-black"></div>
        <button type="button" onClick={handback}>
            regresar 
        </button>
        
        </div>
    ): <Nofound/>

}

const mapStateToProps = state =>{
    return {
        playing: state.playing
    }
}

const mapDispachToPros = {
    getvideo
}


export default connect(mapStateToProps,mapDispachToPros)(Player)