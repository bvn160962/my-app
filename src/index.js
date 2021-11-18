import React, {StrictMode, useContext} from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Faq from './components/Faq'
//import './index.css';
import "./assets/styles/index.scss";
import { BrowserRouter } from 'react-router-dom';
import App from './App';

export const ArticleContext = React.createContext(null);

ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Layout>
        <App />
		  </Layout>    
    </BrowserRouter>
  </StrictMode>,
  document.getElementById('root')
);

