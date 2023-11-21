import React, { memo,useEffect } from 'react'
import { HomeWrapper } from './style'
import { useDispatch, useSelector } from 'react-redux'
// 组件库引用

// 组件引用
import HomeBanner from './c-cpn/HomeBanner/HomeBanner'
import { fetchHomeDataAction } from '@/store/modules/home'
import AppFooter from '@/components/app-footer'
import HomeSectionV1 from './c-cpn/HomeSectionV1/HomeSectionV1'
import HomeSectionV2 from './c-cpn/HomeSectionV2/HomeSectionV2'
import HomeLongFor from './c-cpn/HomeLongFor/HomeLongFor'
import HomeSectionV3 from './c-cpn/HomeSectionV3/HomeSectionV3'
import { isEmptyObject } from '@/utils'
import { changeHeaderConfigAction } from '@/store/modules/main'




const Home = memo(() => {
  // 从store中获取数据
  const { goodPriceInfo,highScoreInfo,homeDiscountInfo,recommendInfo,longforInfo,plusInfo } = useSelector((state)=>({
    goodPriceInfo:state.home.goodPriceInfo,
    highScoreInfo:state.home.highScoreInfo,
    homeDiscountInfo:state.home.homeDiscountInfo,
    recommendInfo:state.home.recommendInfo,
    longforInfo:state.home.longforInfo,
    plusInfo:state.home.plusInfo
  }))
  
  // 派发异步事件:发送网络请求
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchHomeDataAction())
    dispatch(changeHeaderConfigAction({isFixed:true,topAlpha:true}))
  },[dispatch])
  
  return (
      <HomeWrapper>
          <HomeBanner></HomeBanner>
          {isEmptyObject(homeDiscountInfo) && <HomeSectionV2 infoData={homeDiscountInfo}></HomeSectionV2>}
          {isEmptyObject(recommendInfo) && <HomeSectionV2 infoData={recommendInfo}></HomeSectionV2>}
          {isEmptyObject(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1>}
          {isEmptyObject(highScoreInfo) && <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
          {isEmptyObject(longforInfo) &&   <HomeLongFor infoData={longforInfo}></HomeLongFor>}
          {isEmptyObject(plusInfo) && <HomeSectionV3 infoData={plusInfo}></HomeSectionV3>}
        <AppFooter></AppFooter>
      </HomeWrapper> 
  )
})

export default Home