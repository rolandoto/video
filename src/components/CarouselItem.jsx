import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/components/CarouselItem.scss';
import playIcon from '../assets/static/play-icon.png';
import plusIcon from '../assets/static/plus-icon.png';
import {connect} from 'react-redux'
import { deletefavorite, setFavorite } from '../Action/Index';
import { IoMdTrash } from "react-icons/io";
import { Link } from 'react-router-dom';
const CarouselItem = (props) => {
  //otro metodo de recibir lo props
  const { cover, title, year, contentRating, duration,id,isList} = props
  
  const handlesetfavorite = () => {
    props.setFavorite({
        cover, title, year, contentRating, duration,id
      })
  }

//
//aqui recibe el id para enviar el reduccer y borrar con filter
  const handelete = (itenid) => {
    props.deletefavorite(itenid)

  }

//borrar en el click
  const setdelete = () => {
    handelete(id)
  }
  
  return(
      <div className="carousel-item">
      <img className="carousel-item__img" src={cover} alt={title}  />
      <div className="carousel-item__details">
        <div>
         <Link to={`/Player/${id}`}>
         <img className="carousel-item__details--img" 
          src={playIcon} 
          alt="Play Icon"
            />
         </Link>
         
              {/**esto es para validarr para mp repetir muchas cosas 
               * en su estado original viene un false
               */}
          {isList  ? 
        
            <IoMdTrash  onClick={setdelete}   size={20} color="#21c08b"/>
              :
              <img className="carousel-item__details--img" 
          src={plusIcon} 
          alt="Plus Icon" 
          onClick={handlesetfavorite}/>
          }
        {/**el aqui me dice como no le estoy pasando validacion entonces 
         * esto aqui con predeterminado me pasa que es false 
         */}
        
        </div>
        <p className="carousel-item__details--title">{title}</p>
        <p className="carousel-item__details--subtitle">
          {`${year} ${contentRating} ${duration}`}
          
        </p>
      </div>
    </div>
);
  }
CarouselItem.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  year: PropTypes.number,
  contentRating: PropTypes.string,
  duration: PropTypes.number,
}

const mapDispachToPros  = {
  setFavorite,
  deletefavorite
  
} 



 

export default connect(null,mapDispachToPros)(CarouselItem)