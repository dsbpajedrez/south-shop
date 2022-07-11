import { GlobalStyle } from './globalStyles/GlobalSyles';

import Main from './componentes/main/Main'
import LayOut from './template/LayOut';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <LayOut>
      <GlobalStyle/> 
      <Main/>
    </LayOut>
    </BrowserRouter>
  );
}

export default App;
