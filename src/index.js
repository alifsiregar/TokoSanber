import React from 'react';
import ReactDOM from 'react-dom';
import './tailwind.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore} from "redux";
import { Provider } from "react-redux";
import isLogged from './Reducers/isLogged'
const store = createStore(isLogged, +  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

// Pada file index.js ini, saya membuat store untuk redux dimana store ini akan digunakan sebagai alat untuk menyimpan 
// sebuah boolean. Dimana boolean ini akan saya gunakan untuk membuat fitur light mode dan dark mode pada Header

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
