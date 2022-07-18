import { GlobalStyle } from './globalStyles/GlobalSyles';

import Main from './componentes/Main/Main'
import LayOut from './template/LayOut';
import { BrowserRouter } from 'react-router-dom';
import ProductoContext from './contextos/CarritoContexto';

function App() {
  return (
    <BrowserRouter>
    <ProductoContext>
    <LayOut>
      <GlobalStyle/> 
      <Main/>
    </LayOut>
    </ProductoContext>
    </BrowserRouter>
  );
}

export default App;
