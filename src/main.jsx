import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Navbar } from './components/Navbar/Navbar.jsx'
import Home from './pages/Home/Home.jsx'
import { Search } from './pages/Search/Search.jsx'
import { GlobalStyled } from './GlobalStyled.jsx'
import ErrorPage from './pages/ErrorPage/error-page.jsx'
import { Authentication } from './pages/Authentication/Authentication.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navbar />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Home />,
    }, {
      path: '/search/:title',
      element: <Search />,
    }]
  },
  {
    path: '/auth',
    element: <Authentication />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyled />
    <RouterProvider router={router} />
  </React.StrictMode>,
)
