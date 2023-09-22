import { useRef, useState } from "react";
import AnimalCard from "./AnimalCard";

const AddAnimal = ({ animals, setAnimals, addFavorite, favorites }) => {
  const animalInput = useRef();
  const animalImageInput = useRef();
  const aboutAnimalInput = useRef();
  const animalAgeInput = useRef();
  const dogInput = useRef();
  const catInput = useRef();
  const typeRef = useRef();
  const rangeInputRef = useRef()
  const [getError, setError] = useState("");
  const [typeSelected, setTypeSelected] = useState("");
  const [typeFilterAge, setTypeFilterAge] = useState();

  const [filteredAnimals,  setFilteredAnimals] = useState(animals)

  function setType(e) {
    setTypeSelected(e.target.value);
  }

  function showAge(e) {
    setTypeFilterAge(e.target.value)
  }

  function filterAge() {
    const filterItem = {
      age: rangeInputRef.current.value,
      type: typeRef.current.value
    }

    console.log(filterItem);
    let filtered
    if(filterItem.type === 'All'){
      console.log(filterItem.type);
      filtered = animals.filter(x => x.age === filterItem.age)

    }else {
      filtered = animals.filter(x => x.animalType === filterItem.type && x.age === filterItem.age  )
    }

    console.log(filtered);
    setFilteredAnimals(filtered)
  }

  function restart() {
    setFilteredAnimals(animals)
  }


  function addAnimal() {
    if (animalInput.current.value.length < 4) {
      return setError("User name is too short");
    }

    if (animalInput.current.value.length > 20) {
      return setError("User name is too long");
    }

    if (!animalImageInput.current.value.includes("http")) {
      return setError("select valid image.");
    }

    if (animals.length === 20) {
      return setError("Max Has been reached");
    }

    console.log(typeSelected);

    const myPost = {
      name: animalInput.current.value,
      image: animalImageInput.current.value,
      age: animalAgeInput.current.value,
      about: aboutAnimalInput.current.value,
      animalType: typeSelected,
    };
    setAnimals([...animals, myPost]);

    setError("");
  }

  return (
    <div className="addAnimal-container">
      <div className="animal-info">
        <input ref={animalInput} type="text" placeholder="Username"></input>
        <input ref={animalAgeInput} type="number" placeholder="Age"></input>
        <input
          ref={animalImageInput}
          type="text"
          id="image"
          placeholder="Image"
        />
        <input
          ref={aboutAnimalInput}
          type="text"
          placeholder="Tell us about animal"
        />

        <div className="dog">
          <input
            ref={dogInput}
            onChange={setType}
            type="radio"
            id="dog"
            name="choose"
            value="Dog"
          />
            <label for="dog">Dog</label>
        </div>

        <div className="cat">
          <input
            ref={catInput}
            onChange={setType}
            type="radio"
            id="cat"
            name="choose"
            value="Cat"
          />
            <label for="cat">Cat</label>
        </div>

        <button className="btn-addAnimal" onClick={addAnimal}>
          Add Animal
        </button>
        {getError && <h3 style={{ color: "red" }}>{getError}</h3>}

      <div className="filteringTab">
        <select
          name="type"
          id="type"
          ref={typeRef}
        >
          <option value="All">Show All</option>

          <option value="Cat">Cat</option>

          <option value="Dog">Dog</option>
        </select>

        <div>
          
          <input ref={rangeInputRef} onChange={showAge} type="range" id="age" name="age" min="1" max="15" />
          <label for="age">Select age: {typeFilterAge} </label>
          <button onClick={filterAge}>Submit</button>
          <button onClick={restart}>Reset all filters</button>
        </div>
      </div>

      </div>

        

      <div className="containerSecond">
        <div className="afterBox">
          {filteredAnimals
            .map((x) => (
              <AnimalCard
                animal={x}
                addFavorite={addFavorite}
                favorites={favorites}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AddAnimal;
