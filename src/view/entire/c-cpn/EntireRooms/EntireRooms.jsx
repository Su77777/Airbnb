import React, { memo, useCallback } from 'react'
import { EntireRoomWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header/SectionHeader'
import { useNavigate } from 'react-router-dom'
import { changeDetailInfoAction } from '@/store/modules/detail'

const EntireRooms = memo((props) => {
  const dispatch = useDispatch()
  const {roomList,totalCount} = useSelector((state)=>({
    roomList:state.entire.roomList,
    totalCount:state.entire.totalCount
  }))
  const navigate = useNavigate()
  const itemClickHandle = useCallback((item)=>{
    dispatch(changeDetailInfoAction(item))
    navigate('/detail')
  },[navigate,dispatch])
  return (
    <EntireRoomWrapper>
      <div className='entire-header'>
        <SectionHeader title={`共${totalCount}多处房子`}></SectionHeader>
      </div>
      <div className='room-list'>
        {
          roomList.map((item,index)=>{
            return (
              <RoomItem itemData={item} key={item._id} itemwidth='20%' itemClick={itemClickHandle}></RoomItem>
            )
          })
        }
      </div>
    </EntireRoomWrapper>
  )
})


export default EntireRooms