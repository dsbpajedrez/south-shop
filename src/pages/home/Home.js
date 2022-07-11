import React from 'react'
import Productos from '../../componentes/productos/Productos'
import useLlamadoAPI from '../../hooks/useLlamadoAPI'

const Home = () => {
  const API_PRODUCTS ='https://api.escuelajs.co/api/v1/products'
  const pasarelaProductos = useLlamadoAPI(API_PRODUCTS)
  return (
    <div>
      Home: Nuestros Productos
      <Productos products={pasarelaProductos}/>

    </div>
  )
}

export default Home