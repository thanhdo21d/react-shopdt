import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dasboard from './layout/layout-admin/dasboard/Index'
import { RouterProvider } from 'react-router-dom'
import routers from './routes'
//http://localhost:8282/data?_page=3&_limit=10
function App() {
  const [count, setCount] = useState(0)
  //npm i prettier eslint-config-prettier eslint-plugin-prettier -D

  return <>

    <RouterProvider router={routers}/>
  </>
}

export default App
