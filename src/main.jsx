import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Aos from 'aos';
import Projectdetails from './Components/Projectdetails.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/:id",
    element: <Projectdetails/>,
    loader: async ({ params }) => {
      // Fetch data based on the project ID (params.id)
      const response = await fetch('/projects.json');
      const data = await response.json();

      // Find the project with the matching ID
      const project = data.find((project) => project.id === parseInt(params.id, 10));

      return project;
    },
  }
]);
Aos.init({
   // Animation duration in milliseconds
  once: false,
  // Whether animations should only happen once while scrolling down
});
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>,
)
