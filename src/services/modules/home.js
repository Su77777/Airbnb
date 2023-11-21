import { SyAxios } from "../request";

export  function getHomeGoodPriceData() {
  return SyAxios.get({
    url:'/home/goodprice'
  })
}

export function getHomeHighScoreData() {
  return SyAxios.get({
    url:'/home/highscore'
  })
}

export function getHomeDisCountData() {
  return SyAxios.get({
    url:'/home/discount'
  })
}

export function getHomeHotRecommendData(){
  return SyAxios.get({
    url:'/home/hotrecommenddest'
  })
}
export function getHomeLongForData() {
  return SyAxios.get({
    url:'/home/longfor'
  })
}
export function getHomePlusData() {
  return SyAxios.get({
    url:'/home/plus'
  })
}