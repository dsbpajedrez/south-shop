import React from 'react'
import { Item, List, Redirection } from './styles'


const MenuPhone = () => {
  return (
    <List>
        <Item><Redirection to='/category/1'>Clothes</Redirection></Item>
        <Item><Redirection to='/category/2'>Electronics</Redirection></Item>
        <Item><Redirection to='/category/3'>Furniture</Redirection></Item>
        <Item><Redirection to='/category/4'>Shoes</Redirection></Item>
        <Item><Redirection to='/'>Home</Redirection></Item>
        <Item><Redirection to='#'>Sign out</Redirection></Item>      
    </List>
  )
}

export default MenuPhone