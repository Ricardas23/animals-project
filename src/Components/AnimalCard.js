import React, { useState } from "react";

const AnimalCard = ({ animal, addFavorite, removeFavorite, favorites}) => {


  const isInFav = favorites.find(
    (favorite) =>
      favorite.name === animal.name &&
      favorite.image === animal.image &&
      favorite.age === animal.age
  )

  return (
    <div>



      <div className="animalCard">
            <div className="addAnimalimg">
          <img src={animal.image} />
          <h3 className="font">Name: {animal.name}</h3>
          <p className="font">{animal.animalType}</p>
          <p className="font">Age: {animal.age}</p>
        <div className="aboutanimal-text">
          <p className="font">About me: {animal.about}</p>
        </div>
        </div>



        <div className="btn-favorite">
          <div>
            <button className="font" onClick={() => addFavorite(animal)}>
              Add To Favorites
            </button>
            {isInFav && (
              <button className="font" onClick={() => removeFavorite(animal)}>
                Remove From Favorites
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AnimalCard;
