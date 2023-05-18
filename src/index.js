/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Quiz from './components/quiz/Quiz';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './index.css';
import Questions from './components/questions/PlayQuestions';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <Quiz />
  },
  {
    path: '/questions',
    element: <Questions />
  },
])

root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


