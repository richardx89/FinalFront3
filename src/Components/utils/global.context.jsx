import React, { useReducer, useEffect } from "react";

export const ContextGlobal = React.createContext({
  theme: "light",
  data: [],
  changeTheme: () => { },
});

const defaultContextState = {
  theme: "light",
  data: []
}

const contextReducer = (state, action) => {

  if (action.type === "THEME") {

    return {
      theme: action.theme === "light" ? "dark" : "light",
      data: state.data
    }
  }

  if (action.type === "DATA") {

    return {
      theme: defaultContextState.theme,
      data: [...action.data]
    }
  }

  return defaultContextState;

}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useReducer

  const [contextState, dispatchContextAction] = useReducer(contextReducer, defaultContextState);

  const switchTheme = theme => {
    dispatchContextAction({ type: 'THEME', theme: theme })
  }

  const fetchData = data => {
    dispatchContextAction({ type: 'DATA', data: data })
  }

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        if (!response.ok) {
          throw new Error(`Something went wrong, Error ${response.status}`)
        }

        const data = await response.json()

        fetchData(data)

      } catch (error) {
        console.log(error.message)
      }
    }
    fetchDataFromApi()
  }, [])


  const globalContext = {
    theme: contextState.theme,
    data: contextState.data,
    changeTheme: switchTheme
  }

  return (
    <ContextGlobal.Provider value={globalContext}>
      {children}
    </ContextGlobal.Provider>
  );
};
