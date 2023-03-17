import{ createContext } from 'react'

const Cart = createContext();

const Context = ( { chilcden }) => {

  return (
    <Cart.Provider>
        {chilcden}
    </Cart.Provider>
  )
}

export default Context;