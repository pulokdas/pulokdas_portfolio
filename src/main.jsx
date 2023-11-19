import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aos from 'aos';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
]);
Aos.init({
   // Animation duration in milliseconds
  once: false, // Whether animations should only happen once while scrolling down
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
