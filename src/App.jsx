import React, { memo, useEffect } from 'react'
import { useLocation, useRoutes } from 'react-router-dom'
import routes from './router'
// 组件导入
import AppHeader from './components/app-header'

const App = memo(() => {
  const location = useLocation()
    useEffect(()=>{
      window.scrollTo(0,0)
    },[location.path])
  return (
    <div>
      <AppHeader className='header'>header</AppHeader>
      <div className='content'>
        {useRoutes(routes)}
      </div>
      <div className='footer'>footer</div>
    </div>
  )
})

export default App