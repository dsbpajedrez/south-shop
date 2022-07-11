import React from 'react'
import { Item, Lista,Links } from './styles'


const LinksSidebar = () => {
  return (
    <Lista>
    <Item><Links to='/'>Home</Links></Item>
    <Item><Links to='/'>Productos</Links></Item>
    <Item><Links to='/'>Productos</Links></Item>
    <Item><Links to='/'>Terminos y condiciones</Links></Item>
  </Lista>
  )
}

export default LinksSidebar