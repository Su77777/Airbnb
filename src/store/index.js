import { configureStore } from '@reduxjs/toolkit'
import homeReducer from './modules/home.jsx'
import entireReducer from './modules/entire/index.js'
import detailReducer from './modules/detail'
import MainReducer from './modules/main'
const store = configureStore({
  reducer:{
    home:homeReducer,
    entire:entireReducer,
    detail:detailReducer,
    main:MainReducer
  }
})

export default store