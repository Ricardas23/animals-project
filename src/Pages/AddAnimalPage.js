import React from "react";
import AddAnimal from "../Components/AddAnimal";



const AddAnimalPage = ({ animals, setAnimals, addFavorite, favorites }) => {
  return (
    <div>
      <AddAnimal
        addFavorite={addFavorite}
        animals={animals}
        setAnimals={setAnimals}
        favorites={favorites}
      />
    </div>
  );
};

export default AddAnimalPage;
