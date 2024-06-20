import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Contact from './Contact.jsx'
import Blog from './Blog.jsx'
import Forums from './Forums.jsx'


const router = createBrowserRouter([
  {
    path: "/", element: <App />, children: [
  
    ]
  },
  {path:'/contact',element:<Contact />},
  {path:'/forums',element:<Forums />},
  {path:'/blog',element:<Blog />}
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />

)
