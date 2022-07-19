import React from 'react'
import { Item, Lista,Links } from './styles'


const LinksSidebar = () => {
  return (
    <Lista>
    <Links to='/'><Item>Home</Item></Links>
    <Links to='/'><Item>Productos</Item></Links>
    <Links to='/login'><Item>Login</Item></Links>
    <Links to='/register'><Item>Registro</Item></Links>
  </Lista>
  )
}

export default LinksSidebar