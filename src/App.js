import { useContext, useEffect, useState } from 'react';
import { GlobalStyle } from './globalStyles/GlobalSyles';

import Main from './componentes/main/Main'
import LayOut from './template/LayOut';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductoContext, { ctxProducto } from './contextos/CarritoContexto';

import {getFirestore, getDoc,doc} from 'firebase/firestore'
import LogIn from './pages/login/LogIn';
import Ragister from './pages/register/Register';
import NotFound from './componentes/NotFound/NotFound';
import { onAuthStateChanged, getAuth } from 'firebase/auth';
import { credential } from './componentes/ConfigFirebase/Config';

const auth = getAuth(credential)
function App() {
  const [user, setUser] = useState(null)

  onAuthStateChanged(auth, (usuarioFireBase)=>{
    if(usuarioFireBase){
      setUser(usuarioFireBase)
    }else{
      setUser(null)
    }

  })
  
  return (
    <BrowserRouter>
    <ProductoContext>
    <LayOut>
      <GlobalStyle/>       
      <Routes>
        <Route exact path='/*' element={user?<Main/>:<LogIn/>}/>
        <Route exact path='/register/*' element={user?<Main/>:<Ragister/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </LayOut>
    </ProductoContext>
    </BrowserRouter>
  );
}

export default App;
