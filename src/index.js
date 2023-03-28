import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

// Baslangic deyerler obyekti
const initialState = {
  count: 0,
  bgColor: `rgb(255,255,255)`,
  newValue: 'daxil edilecek metn',
}



const store = createStore((state = initialState, action) => {
  switch(action.type){
    case 'INCREMENT': {
      return {...state, count: state.count + 1}
    };
    case 'DECREMENT': {
      return {...state, count: state.count - 1}
    };

    case "CHANGE_BACKGROUND": {
      return {...state,bgColor: `rgb(${Math.ceil(Math.random() * 256-1)},${Math.ceil(Math.random() * 256-1)},${Math.ceil(Math.random() * 256-1)})`}
    };

    case "CHANGE_TEXT": {
      return {...state, newValue: action.text}
    }

    default: return state
  }


})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);