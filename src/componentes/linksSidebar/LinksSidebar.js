
import React, { useContext } from 'react'
import { ctxProducto } from '../../contextos/CarritoContexto';
import { Item, Lista,Links } from './styles'
import { signOut, getAuth } from 'firebase/auth'
import { credential } from '../ConfigFirebase/Config'

const auth = getAuth(credential)


const LinksSidebar = () => {
  const {state, setState} =useContext(ctxProducto)

  const toSignOut = (arg)=>{
    setState({
      ...state,
      user:null
    })
    signOut(arg)
  }
  return (
    <Lista>
    <Links to='/category/1'><Item>Clothes</Item></Links>
    <Links to='/category/2'><Item>Electronics</Item></Links>
    <Links to='/category/3'><Item>Furnitures</Item></Links>
    <Links to='/category/4'><Item>Shoes</Item></Links>
    <Links to='/category/5'><Item>Others</Item></Links>
    {state?.user?<Links onClick={()=> toSignOut(auth)} to='#'><Item style={{color:'red'}}>Sign out</Item></Links>:<></>}
  </Lista>
  )
}

export default LinksSidebar