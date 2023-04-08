import React, { useContext } from 'react'
import Card from '../Components/Card'
import { ContextGlobal } from '../Components/utils/global.context'

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {

  const { theme, data } = useContext(ContextGlobal)

  return (
    <main className={`${theme === "dark" ? "dark" : null}`} >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */}
        {data.map((dentist, index)=>
          <Card
            key={index}
            name={dentist.name}
            username={dentist.username}
            id={dentist.id}
          />
        )}
      </div>
    </main>
  )
}

export default Home