import { Navigate, createBrowserRouter } from 'react-router-dom'
import Dasboard from './layout/layout-admin/dasboard/Index'
import Option1 from './layout/layout-admin/dasboard/Option1'
import Option2 from './layout/layout-admin/dasboard/Option2'

const routers = createBrowserRouter([
  { path: '*', element: <div> not found</div> },
  {
    path: '/admin',

    children: [
      {
        element: <Dasboard />,
        children: [
          {
            index: true,
            element: <Navigate to='option1' />
          },
          {
            path: 'option1',
            element: <Option1 />
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
