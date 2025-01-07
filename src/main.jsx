import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

<<<<<<< HEAD
import Experience from "./routes/Experience.jsx"
import DevShowcase from './routes/DevShowcase.jsx';
import CreativeShowcase from "./routes/CreativeShowcase.jsx"
import Contact from './routes/Contact.jsx';
=======
import Experience from "/src/routes/Experience.jsx"
import CodeShowcase from '/src/routes/DevShowcase.jsx';
import CreativeShowcase from "/src/routes/CreativeShowcase.jsx"
import Contact from '/src/routes/Contact.jsx';
>>>>>>> c553838 (images gone)

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
<<<<<<< HEAD
    element: <DevShowcase/>
=======
    element: <CodeShowcase/>
>>>>>>> c553838 (images gone)
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
