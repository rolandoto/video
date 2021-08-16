import React, { useState, useEffect } from 'react';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';
import {connect} from 'react-redux';


const Home = (props) => {

//ejemplo simylist.length > 0 quiere decir si hay una logintud mas de o
    const {mylist,trends,originals,user,practice}  = props

console.log(practice)

 

 

 
  return  (
    <div className="App">
  
      <Search />
      {mylist.length > 0 &&
        <Categories title="Mi Lista">
          <Carousel>
            {mylist.map(item =>
              <CarouselItem
               key={item.id}
                {...item} 
               
                isList/>
            )}
          </Carousel>
        </Categories>
      }
      <Categories  title="Tendencias">
        <Carousel>
          {trends.map(item =>
            <CarouselItem key={item.id} {...item} />
          )}
        </Carousel>
      </Categories>
      <Categories title="Originales de Platzi Video">
        <Carousel>
          { originals.map(item =>
            <CarouselItem key={item.id} {...item} />
            
          )}
        </Carousel>
            
      </Categories>

     
        
    
    </div>
  );
}
// react-redux 
const mapStateToProps = state => {
    return{
      //aqui lo envia como una props
      mylist: state.mylist,
      trends: state.trends,
      originals: state.originals,
      user: state.user,
      practice: state.practice
    }

}

//conetar el inital stae en tola home con los mylist
//este mapStateToProps es paa mapear
export default connect(mapStateToProps,null)(Home)