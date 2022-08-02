import React from 'react'
import { Item, Lista,Links } from './styles'


const LinksSidebar = () => {
  return (
    <Lista>
    <Links to='/category/1'><Item>Clothes</Item></Links>
    <Links to='/category/2'><Item>Electronics</Item></Links>
    <Links to='/category/3'><Item>Furnitures</Item></Links>
    <Links to='/category/4'><Item>Shoes</Item></Links>
    <Links to='/category/5'><Item>Others</Item></Links>
  </Lista>
  )
}

export default LinksSidebar