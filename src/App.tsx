import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'react-toastify/dist/ReactToastify.css';
import Dasboard from './layout/layout-admin/dasboard/Index'
import { RouterProvider } from 'react-router-dom'
import routers from './routes'
import { ToastContainer } from 'react-toastify'
//http://localhost:8282/data?_page=3&_limit=10
function App() {
  //npm i prettier eslint-config-prettier eslint-plugin-prettier -D

  return <>

    <RouterProvider router={routers} />
    <ToastContainer/>
  </>
}

export default App
