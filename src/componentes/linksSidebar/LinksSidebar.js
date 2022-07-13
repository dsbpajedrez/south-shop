import React from 'react'
import { Item, Lista,Links } from './styles'


const LinksSidebar = () => {
  return (
    <Lista>
    <Links to='/'><Item>Home</Item></Links>
    <Links to='/'><Item>Productos</Item></Links>
    <Links to='/'><Item>Productos</Item></Links>
    <Links to='/'><Item>Terminos y condiciones</Item></Links>
  </Lista>
  )
}

export default LinksSidebar