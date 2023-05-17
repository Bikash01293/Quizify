import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Quiz from './components/quiz/Quiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Quiz />
  },
])

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


