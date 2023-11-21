import React, { memo, useEffect} from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailWrapper } from './style'
import AppFooter from '@/components/app-footer'

import DetailPicture from './c-cpn/detail-picture/DetailPicture'
import { changeHeaderConfigAction } from '@/store/modules/main'


const Detail = memo(() => {
  const { detailInfo } = useSelector((state)=>({
    detailInfo:state.detail.detailInfo
  }),shallowEqual)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed:false}))
  },[dispatch])
  return (
    <DetailWrapper>
      <DetailPicture pictureUrls={detailInfo.picture_urls}></DetailPicture>
      <AppFooter></AppFooter>
    </DetailWrapper>
  )
})

export default Detail