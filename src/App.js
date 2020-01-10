import React from 'react';
import PropTypes from 'prop-types';

function Food({name, picture, rating}) {
  return <div>
    <h2>I like {name}</h2>
    <h4>{rating}/5.0</h4>
    <img width="350px" height="350px" src={picture} alt={name}></img>
  </div>;
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired, // check type and exist
  rating : PropTypes.number  // only check type.
};


const foodILike = [
  {
    id:1,
    name: "bagle",
    image:
      "https://kep.itechegypt.com/wp1/wp-content/uploads/2019/08/Bagle-Butter.jpg"
    , rating: 5
  },
  {
    id:2,
    name:"coffee",
    image:"https://cdn-image.foodandwine.com/sites/default/files/1568907144/Coffee-National-Coffee-Day-FT-Blog0919.jpg"
  
    , rating: 4.6  
  }
]


function renderFood(dish) {
  return <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating}/>
}

function App() {
  return (
  <div>
    {console.log(foodILike.map(renderFood))}
    {foodILike.map(renderFood)}}    
  </div>
  );
}

export default App;
