import { lazy } from "react"
import { Navigate } from 'react-router-dom'

const Detail = lazy(()=> import('../view/detail/Detail'))
const Home = lazy(()=> import('../view/home/Home'))
const Entire = lazy(()=> import('../view/entire/Entire'))

const routes = [
  {
    path:'/',
    element:<Navigate to='/home'></Navigate>
  },
  {
    path:'/detail',
    element:<Detail></Detail>
  },
  {
    path:'/home',
    element:<Home></Home>
  },
  {
    path:'/entire',
    element:<Entire></Entire>
  }
]

export default routes