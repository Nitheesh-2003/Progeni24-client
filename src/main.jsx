import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import store from '@store/ReduxStore.jsx'
import { Provider } from 'react-redux'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
              <Route path='*' element={<App />}/>
          </Routes>
        </BrowserRouter>
      </Provider>
  </React.StrictMode>,
)
