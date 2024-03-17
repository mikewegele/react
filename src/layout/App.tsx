import React from 'react';
import { Provider } from 'react-redux';
import {store} from "../store/Store";
import Router from "./Router";
import {BrowserRouter} from "react-router-dom";


const App = () => {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </Provider>
  );
}

export default App;