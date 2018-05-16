import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// Browser Router - interacts with the history library and decides what to do in response to the changes in the URL
// Route determines what components to show based on the URL
// Switch eliminates the issue of ReactRouter showing multiple components when parts of the path are shared
//  Switch looks at all the routes - put most specific routes on top
import { BrowserRouter, Route, Switch } from "react-router-dom";
import promise from 'redux-promise'
// import App from "./components/app";
import reducers from "./reducers";
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';



const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

//Route must have a path (usually string) and a component
//can hardcode or import a header/navbar if we wanted to
//: in route === wildcard
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/new" component={PostsNew} />
          <Route path="/" component={PostsIndex} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);


// <Route path="/posts/:id" component={PostsShow} />
// <Route path="/posts/new" component={PostsNew} />