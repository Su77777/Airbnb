import PropTypes from 'prop-types'
import React, { memo,useState,useCallback } from 'react'


import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRoom from '@/components/section-room'
import SectionTabs from '@/components/section-tabs'
import { HomeSectionV2Wrapper } from './style'
import SectionFooter from '@/components/section-footer'

const HomeSectionV2 = memo((props) => {
  
  // 从props中获取数据
  const { infoData } = props
  // 数据转换/定义内部数据
  // 确定有值以后 拿到数组的第一个name来展示
  const initialData = Object.keys(infoData.dest_list)[0]
  // useState特性: 初始化值只会在第一次渲染的时候有用,第二次第三次都没用
  const [name,setName] = useState(initialData)
  const tabNames = infoData.dest_address?.map(item => item.name)
  // 从子组件中获取数据
  const tabClickHandle = useCallback((index,item)=>{
    setName(item)
  },[])
  return (
    <HomeSectionV2Wrapper >
          <div className='discount'>
            <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
            <SectionTabs tabClick={tabClickHandle} tabNames={tabNames}></SectionTabs>
            <SectionRoom roomList={infoData?.dest_list?.[name]} itemwidth='33.3333%'></SectionRoom>
            <SectionFooter name={name}></SectionFooter>
          </div>
    </HomeSectionV2Wrapper>
  )
})

HomeSectionV2.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV2