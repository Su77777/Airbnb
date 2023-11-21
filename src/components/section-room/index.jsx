import PropTypes from 'prop-types'
import React, { memo } from 'react'
import RoomItem from '@/components/room-item'
import { SectionRoomWrapper } from './style'
const SectionRoom = memo((props) => {
  const { roomList,itemwidth } = props
  return (
      <SectionRoomWrapper >
              {
                roomList?.slice(0,8).map((item,index)=>{
                  return <RoomItem itemData={item} itemwidth={itemwidth} key={item.id} ></RoomItem>
                })
              }
      </SectionRoomWrapper>
  )
})

SectionRoom.propTypes = {
  roomList:PropTypes.array,
  itemwidth:PropTypes.string
}

export default SectionRoom