import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Experience from "./routes/Experience.jsx"
import DevShowcase from './routes/DevShowcase.jsx';
import CreativeShowcase from "./routes/CreativeShowcase.jsx"
import Contact from './routes/Contact.jsx';

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
