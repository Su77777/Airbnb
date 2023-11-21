import * as actionType from './constants'
const initialState = {
  currentPage:0,
  roomList:[],
  totalCount:0
}

function reducer(state = initialState,action) {
  switch(action.type) {
    case actionType.CHANGE_CURRENT_PAGE:
      return {...state,currentPage:action.currentPage}
    case actionType.CHANGE_ROOM_LIST:
      return {...state,roomList:action.roomList}
    case actionType.CHANGE_TOTAL_COUNT:
      return {...state,totalCount:action.totalCount}
    default:
      return state
  }
} 

export default reducer