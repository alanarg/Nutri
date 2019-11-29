import React from 'react';
import  {Provider} from 'react-redux';
import store from './pages/store';

//adicionando api, fica dentro da pasta services


//esse arquivo style permite fazer umas pre formatações 

import "./styles.css";

//Cada componente deve ser importado
import Routes from "./routes";

const App = () => (
  
  <div className="App">
      <Provider store={store}>  
      <Routes /> 
      </Provider>
      
  </div>
  
);


export default App;
