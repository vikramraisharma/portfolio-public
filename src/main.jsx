import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Experience from "./routes/exp.jsx"
import DevShowcase from './routes/devShowcase.jsx';
import CreativeShowcase from "./routes/creativeShowcase.jsx"
import Contact from './routes/contact.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/experience",
    element: <Experience/>
  },
  {
    path: "/showcase/code",
    element: <DevShowcase/>
  },
  {
    path: "/showcase/create",
    element: <CreativeShowcase/>
  },
  {
    path: "/contact",
    element: <Contact/>
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
