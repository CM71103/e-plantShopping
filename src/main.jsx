import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import store from './store.js'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)


// Provider makes Redux store available to all components.

// Without this:

// useSelector
// useDispatch

// will not work.



// 9. React.StrictMode
// <React.StrictMode>

// Special development mode.

// Helps detect:

// unsafe code
// deprecated features
// bugs

// Only for development.



{/* <Provider store={store}>

This is VERY important.

It shares Redux store with entire app.

Now every component can access Redux using:

useSelector()
useDispatch() */}