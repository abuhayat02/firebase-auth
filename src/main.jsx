import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './components/Root/Root.jsx'
import Home from './components/Home/Home';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import CreateMyContext from './ContextApiProvider/CreateMyContext.jsx'
import Privet from './PrivetRoute/Privet.jsx'

let myRouters = createBrowserRouter([
  {
    path: '/',
    element: <Root></Root>,
    children: [
      {
        path: '/',
        element: <Privet><Home></Home></Privet>
      },
      {
        path: '/about',
        element: <Privet><About></About></Privet>
      },
      {
        path: '/contact',
        element: <Privet><Contact></Contact></Privet>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]

  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CreateMyContext>
      <RouterProvider router={myRouters}>

      </RouterProvider>
    </CreateMyContext>
  </StrictMode>,
)
