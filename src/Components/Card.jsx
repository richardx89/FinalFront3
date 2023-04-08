import React from "react";
import doctorImage from "../assets/images/doctor.jpg"
import { Link, useLocation } from "react-router-dom";


const Card = ({ name, username, id, remove }) => {

  const { pathname } = useLocation();
  
  const actionFav = () => {
    
    if(pathname === "/favs"){
      remove(id)
      alert("El dentista se elimino de tus favoritos")
      return
    }

    const favDentist = { 
      name: name,
      username: username,
      id: id
    }

    if(!localStorage.getItem("favorites")){

      const favorites = [favDentist]

      localStorage.setItem("favorites", JSON.stringify(favorites))
      alert("El dentista fue agregado a sus favoritos")
    } else{

      const localStorageFavs = JSON.parse(localStorage.getItem("favorites"))

      const favoriteDentistIndex = localStorageFavs.findIndex((element) => element.id === favDentist.id)

      if(favoriteDentistIndex >= 0){
        localStorageFavs[favoriteDentistIndex] = favDentist
        alert("El dentista ya se encuentra agregado a tus favoritos")
      }else{
        localStorageFavs.push(favDentist)
        alert(`El dentista ${name} ha sido agregado a sus favoritos`)
      }
      localStorage.setItem("favorites", JSON.stringify(localStorageFavs))
    }

  }

  return (

    <div className="card">
      <Link to={`/dentist/${id}`}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <img 
        src={doctorImage} 
        alt='doc-img' 
        className="imgCard" />

        <p>{name}</p>
        <p>{username}</p>
        <small>{id}</small>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
      </Link>
      <button onClick={actionFav} className="favButton">
        {pathname === "/home" ? "Add" : "Remove"}
      </button>
      
    </div>
  );
};

export default Card;
