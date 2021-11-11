import React, { Component } from "react";
import ItemArticle from "./ItemArticle";
import Form from "./Form";
import { useState } from "react/cjs/react.development";
import Articles from './Articles';


const defaultState = [
    {
      id: 1,
      title: "First article title",
      about: "First article about",
    },
    {
      id: 2,
      title: "Second article title",
      about: "Second article about",
    },
]

export const ArticleContext = React.createContext();

function Faq () {
const [articles, setArticles] = useState(defaultState);




    return (
      <ArticleContext.Provider value={[articles, setArticles]}>
        <div>
          <Articles />
          <Form />
        </div>
      </ArticleContext.Provider>
    );
  
}

export default Faq;
