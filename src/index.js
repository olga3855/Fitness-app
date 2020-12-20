import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reducer from './store/reducers/index';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// import {db} from "./firebase/firebase";

//  db.ref('products').once('value').then(snap => {
//    snap.val()
//   console.log(snap.val())
// })


const store = createStore(
  reducer
)


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

