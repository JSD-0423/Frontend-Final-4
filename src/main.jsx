import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: 'cart',
        element: <div>cart</div>
      },
      {
        path: 'searchedProduct',
        element: <div>search product</div>
      }
    ]
  },
  {
    path: '*',
    element: <div>NOT FOUND || 404</div>
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
