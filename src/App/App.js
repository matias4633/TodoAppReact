import './App.css';

import React from "react";
import { AppUI } from './AppUI';
import {Provider} from '../TodoContext/TodoContext';

/* const defaultTodos=[
  {
    texto:'Poner los ladrillos',
    completo:true
  },
  {
    texto:'Preparar la mescla',
    completo:true
  },
  {
    texto:'Tirar la losa',
    completo:false
  }
]; */


function App() {
  /* React.useEffect(()=>{
    console.log('Ejecucion useEffect') 
   },[todos]);   //SE EJECUTA SOLO CUANDO DETECTA UN CAMBIO, SEA ALGUN CAMBIO DE ESTADO O EN CANTIDAD DE ELEMENTOS.
  
 */
  return (
    <Provider>
      <AppUI/>
    </Provider>
    
  );
}

export default App;
