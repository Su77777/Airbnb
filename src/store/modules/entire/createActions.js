import { getEntireRoomList } from '@/services/modules/entire'
import * as actionType from './constants'
export const changeCurrentPage = (currentPage) => ({
  type: actionType.CHANGE_CURRENT_PAGE,
  currentPage
})

export const changeRoomList = (roomList) => ({
  type:actionType.CHANGE_ROOM_LIST,
  roomList
})

export const changeTotalCount = (totalCount) => ({
  type:actionType.CHANGE_TOTAL_COUNT,
  totalCount
})


export function fetchEntireRoomList() {
  return async (dispatch,getState) => {
   const currentPage = getState().entire.currentPage
   const res = await getEntireRoomList(currentPage * 20)
   dispatch(changeRoomList(res.list))
   dispatch(changeTotalCount(res.totalCount))
  }
}