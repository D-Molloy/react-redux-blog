import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
// Browser Router - interacts with the history library and decides what to do in response to the changes in the URL
// Route determines what components to show based on the URL
import { BrowserRouter, Route } from "react-router-dom";
import App from "./components/app";
import reducers from "./reducers";

const createStoreWithMiddleware = applyMiddleware()(createStore);

class Hello extends React.Component {
  render() {
    return <div>Hello!</div>;
  }
}
class Goodbye extends React.Component {
  render() {
    return <div>Goodbye!</div>;
  }
}
//Route must have a path (usually string) and a component
ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Route path="/hello" component={Hello} />
        <Route path="/goodbye" component={Goodbye} />
      </div>
    </BrowserRouter>
  </Provider>,
  document.querySelector(".container")
);
