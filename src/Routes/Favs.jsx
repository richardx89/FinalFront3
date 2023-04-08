import React, { useContext, useState } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {

  const { theme } = useContext(ContextGlobal)

  const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || []) ;

  const handleRemoveFav = (id) =>{
    // console.log("to remove"+id)
    const newFavorites = favorites.filter((element) => element.id !== id)
    localStorage.setItem("favorites", JSON.stringify(newFavorites))
    setFavorites(newFavorites)
  }

  return (
    <>
      <h1 className={`${theme === "dark" ? "dark" : null}`}>Dentists Favs</h1>
      <div className={`card-grid ${theme === "dark" ? "dark" : null}`}>
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {favorites.map((dentist, index)=>
          <Card
            key={index}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
            remove={handleRemoveFav}
          />
        )}
      </div>
    </>
  );
};

export default Favs;
