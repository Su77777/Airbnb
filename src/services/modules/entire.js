import { SyAxios } from "../request";

export function getEntireRoomList(offset = 0,limit = 20) {
  return SyAxios.get({
    url:'/entire/list',
    params:{
      offset,
      limit
    }
  })
}