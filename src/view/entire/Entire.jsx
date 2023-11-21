import React, { memo, useEffect } from 'react'
import { EntireWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import { fetchEntireRoomList } from '@/store/modules/entire/createActions'
import EntireFilter from './c-cpn/EntireFilter/EntireFilter'
import filterData from '@/assets/data/filter_data.json'
import EntireRooms from './c-cpn/EntireRooms/EntireRooms'
import AppFooter from '@/components/app-footer'
import EntirePage from './c-cpn/EntirePage/EntirePage'
import { changeHeaderConfigAction } from '@/store/modules/main'

const Entire = memo(() => {
  const {totalCount,currentPage} = useSelector((state)=>({
    totalCount:state.entire.totalCount,
    currentPage:state.entire.currentPage
  }))
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchEntireRoomList())
    dispatch(changeHeaderConfigAction({isFixed:true}))
  },[dispatch,currentPage])
  return (
    <EntireWrapper>
      <EntireFilter filterData={filterData}></EntireFilter>
      <EntireRooms></EntireRooms>
      <div className='page'>
        <EntirePage totalCount={totalCount}></EntirePage>
      </div>
      <AppFooter></AppFooter>
    </EntireWrapper>
  )
})

export default Entire