import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter } from 'react-router-dom';

import './index.css';
import App from './App';
import { AuthContextProvider } from './Store/auth-context';
import 'bootstrap/dist/css/bootstrap.min.css';


ReactDOM.render(
   <AuthContextProvider>
       <HashRouter>
           <App />
       </HashRouter>
   </AuthContextProvider> ,
  document.getElementById('root')
);

