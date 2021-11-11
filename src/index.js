import React, {StrictMode, useContext} from 'react';
import ReactDOM from 'react-dom';
import Layout from './components/Layout';
import Faq from './components/Faq'
//import './index.css';
import "./assets/styles/index.scss"

export const ArticleContext = React.createContext(null);

ReactDOM.render(
  <StrictMode>
    	<Layout>
		    <div className="container">
          <ArticleContext.Provider>
            <Faq />
          </ArticleContext.Provider>
		    </div>
		  </Layout>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
