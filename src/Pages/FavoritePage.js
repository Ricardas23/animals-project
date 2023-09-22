import React from "react";
import AnimalCard from "../Components/AnimalCard";

const FavoritePage = ({ favorites, removeFavorite }) => {
  return (
    <div>
      <div className="container">
        {favorites.map((x) => (
          <AnimalCard
            removeFavorite={removeFavorite}
            favorites={favorites}
            animal={x}
            key={x.id}
          />
        ))}
      </div>
    </div>
  );
};

export default FavoritePage;
