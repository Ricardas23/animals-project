import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import "./App.css";
import Toolbar from "./Components/Toolbar";
import LoginPage from "./Pages/LoginPage";
import RegisterPage from "./Pages/RegisterPage";
import IndexPage from "./Pages/IndexPage";
import AddAnimalPage from "./Pages/AddAnimalPage";
import FavoritePage from "./Pages/FavoritePage";
import AboutAnimalInfo from "./Components/AboutAnimalInfo";

const initialUsers = [
  {
    username: "Ricardas",
    email: "petras@gmail.com",
    password: "Ricardas1",
    image: "https://picsum.photos/id/50/200/300",
  },
];

const allAnimals = [
  {
    name: "Pufis",
    image:
      "https://img.freepik.com/free-photo/isolated-happy-smiling-dog-white-background-portrait-4_1562-693.jpg",
    age: "10",
    about: "Friendly",
    animalType: "Dog",
  },
  {
    name: "Pupa",
    image:
      "https://www.princeton.edu/sites/default/files/styles/1x_full_2x_half_crop/public/images/2022/02/KOA_Nassau_2697x1517.jpg?itok=Bg2K7j7J",
    age: "2",
    about: "Friendly",
    animalType: "Dog",
  },
  {
    name: "Roze",
    image:
      "https://media.istockphoto.com/id/859142544/photo/a-four-year-old-male-maine-coon-cat-just-chilling-while-lying-down-on-the-floor.jpg?s=612x612&w=0&k=20&c=gytVs5T3MFRD762-B_LhPEnuzs5e5vQ1qyrnLTzg-Sg=",
    age: "4",
    about: "Soft and kind ",
    animalType: "Cat",
  },
  {
    name: "Katytis",
    image: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
    age: "1",
    about: "Soft and kid to other people",
    animalType: "Cat",
  },
];

function App() {
  const [users, setUsers] = useState(initialUsers);
  const [animals, setAnimals] = useState(allAnimals);
  const [userLoggedIn, setUserLoggedIn] = useState();
  const [favorites, setFavorites] = useState([]);

  function addFavorite(item) {
    const isInFav = favorites.find(
      (favorite) =>
        favorite.name === item.name &&
        favorite.image === item.image &&
        favorite.age === item.age
    );
    if (isInFav) return;

    setFavorites([...favorites, item]);
  }

  function removeFavorite(item) {
    const myFavorites = favorites.filter(
      (favorite) =>
        favorite.name !== item.name &&
        favorite.image !== item.image &&
        favorite.age !== item.age
    );

    setFavorites([...myFavorites]);
  }

  return (
    <div className="main-conteiner">
      <BrowserRouter>
        <Toolbar
          userLoggedIn={userLoggedIn}
          setUserLoggedIn={setUserLoggedIn}
          favorites={favorites}
        />

        <Routes>
          <Route
            path="/"
            element={<IndexPage users={users} setUsers={setUsers} />}
          ></Route>

          <Route
            path="/Register"
            element={<RegisterPage users={users} setUsers={setUsers} />}
          ></Route>

          <Route
            path="/Login"
            element={
              <LoginPage users={users} setUserLoggedIn={setUserLoggedIn} />
            }
          ></Route>

          <Route
            path="/addAnimal"
            element={
              <AddAnimalPage
                animals={animals}
                setAnimals={setAnimals}
                addFavorite={addFavorite}
                favorites={favorites}
              />
            }
          ></Route>

          <Route
            path="/favorite"
            element={
              <FavoritePage
                favorites={favorites}
                setFavorites={setFavorites}
                removeFavorite={removeFavorite}
              />
            }
          ></Route>

          <Route
            path="/addAnimal/animal"
            element={
              <AboutAnimalInfo 
                animals={animals} 
                setAnimals={setAnimals}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
