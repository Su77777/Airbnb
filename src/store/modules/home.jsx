import { getHomeDisCountData, getHomeGoodPriceData,getHomeHighScoreData,getHomeHotRecommendData,getHomeLongForData,getHomePlusData } from '@/services'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchHomeDataAction = createAsyncThunk('fetchHomeData', (payload,{ dispatch })=>{
   getHomeGoodPriceData().then(res => {
    dispatch(changeGoodPriceInfoAction(res))
  })
  getHomeHighScoreData().then(res => {
    dispatch(changeHighScoreInfoAction(res))
  })
  getHomeDisCountData().then(res => {
    dispatch(changeHomeDiscountAction(res))
  })
  getHomeHotRecommendData().then(res => {
    dispatch(changeHomeHotRecommendDestAction(res))
  })
  getHomeLongForData().then(res => {
    dispatch(changeHomeLongForAction(res))
  })
  getHomePlusData().then(res => {
    dispatch(changeHomePlusInfoAction(res))
  })
})

const homeSlice = createSlice({
  name:'home',
  initialState:{
    goodPriceInfo:{

    },
    highScoreInfo:{

    },
    homeDiscountInfo:{
      
    },
    recommendInfo:{},
    longforInfo:{},
    plusInfo:{}
  },
  reducers:{
    changeGoodPriceInfoAction(state,{ payload }) {
      state.goodPriceInfo = payload
    },
    changeHighScoreInfoAction(state,{ payload }) {
      state.highScoreInfo = payload
    },
    changeHomeDiscountAction(state,{ payload }) {
      state.homeDiscountInfo = payload
    },
    changeHomeHotRecommendDestAction(state,{ payload }) {
      state.recommendInfo = payload
    },
    changeHomeLongForAction(state,{payload}){
      state.longforInfo = payload
    },
    changeHomePlusInfoAction(state,{ payload }){
      state.plusInfo = payload
    }
  },
  extraReducers:{
    // [fetchHomeDataAction.fulfilled](state,{ payload }){
    //   console.log(payload);
    //   state.goodPriceInfo = payload
    // }
  }
})

export const { changeGoodPriceInfoAction,changeHighScoreInfoAction,changeHomeDiscountAction,changeHomeHotRecommendDestAction,changeHomeLongForAction,changeHomePlusInfoAction } = homeSlice.actions

export default homeSlice.reducer