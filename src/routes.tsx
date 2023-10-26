import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import Dasboard from './layout/layout-admin/dasboard/Index'
import Option1 from './layout/layout-admin/dasboard/Option1'
import Option2 from './layout/layout-admin/dasboard/Option2'
import Signin from './pages/login/Signin'
import { GetItemCookie } from './utils'
import { useContext, useEffect } from 'react'
import { AppContext } from './contexts/app.contexts'

const CheckLogin = () => {
    const {setProfile,profile} = useContext(AppContext)
  const login = false

  useEffect(() => {
    const {email} = localStorage.getItem('profile')
    console.log(email)
  }, [profile])

  return login ? <Outlet /> : <Navigate to='/login' />
}

const routers = createBrowserRouter([
  { path: '*', element: <div> not found</div> },
  { path: '/login', element: <Signin /> },

  {
    path: '/admin',
    element: <Dasboard />,
    children: [
      {
        children: [
          {
            index: true,
            element: <Navigate to='option2' />
          },
          {
            path: 'option1',
            element: <CheckLogin />,
            children: [
              {
                index: true,
                element: <Option1 />
              }
            ]
          },
          {
            path: 'option2',
            element: <Option2 />
          }
        ]
      }
    ]
  }
])
export default routers
