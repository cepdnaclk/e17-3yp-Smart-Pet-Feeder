import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './Store/auth-context';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
   <AuthContextProvider>
       <BrowserRouter>
           <App />
       </BrowserRouter>
   </AuthContextProvider> ,
  document.getElementById('root')
);

