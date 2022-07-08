import { GlobalStyle } from './globalStyles/GlobalSyles';

import Main from './componentes/main/Main'
import LayOut from './template/LayOut';

function App() {
  return (
    <LayOut>
      <GlobalStyle/> 
      <Main/>
    </LayOut>
  );
}

export default App;
