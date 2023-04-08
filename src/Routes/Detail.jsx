import React, { useEffect, useState, useContext } from 'react'
import { ContextGlobal } from '../Components/utils/global.context'
import { useParams } from 'react-router-dom';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  const [userData, setUserData] = useState({});

  const { theme } = useContext(ContextGlobal)

  const { id } = useParams();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)

        if (!response.ok) {
          throw new Error(`Something went wrong, Error ${response.status}`)
        }

        const data = await response.json()

        setUserData(data)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchDataFromApi()
  }, [id])

  const {name, email, username, website} = userData

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico

  return (
    <>
      <h1 className={`${theme === "dark" ? "dark" : null}`}>Detail Dentist {id} </h1>
      {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
      {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
      <table  className={`${theme === "dark" ? "dark" : null}`}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Username</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{name}</td>
            <td>{email}</td>
            <td>{username}</td>
            <td>{website}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default Detail