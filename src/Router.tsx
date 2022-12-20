import { createBrowserRouter } from 'react-router-dom'
import Home from './Home'
import Detail from './Detail'
import Layout from './components/Layout'
import Each from './Each'
import NotFound from './NotFound'

const routerList = [
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/detail',
        element: <Detail />,
      },
      {
        path: '/each/:id',
        element: <Each />
      },
      {
        path: '*',
        element: <NotFound />
      }
    ]
  }
]
const router = createBrowserRouter(routerList)

export default router;
