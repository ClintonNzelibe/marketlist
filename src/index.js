import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import UiApp from './Uiapp';
import App from './App';
import Listers from './Listers';

import reportWebVitals from './reportWebVitals';
import Recipe from './Recipe';
import ListersB from './ListersB';
import { ListProvider } from './context/ListContext';




const root = ReactDOM.createRoot(document.getElementById('root'));
const myTeam = "Barca"
root.render(
  <React.StrictMode>
   <ListProvider>
     {/* <Recipe/> */}
    {/* <App/> */}
    {/* <Listers/> */}
    <ListersB/>
   </ListProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
