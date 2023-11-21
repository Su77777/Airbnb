import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeSectionV3Wrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import RoomItem from '@/components/room-item'
import ScrollView from '@/base-ui/scrollView/ScrollView'
import SectionFooter from '@/components/section-footer'

const HomeSectionV3 = memo((props) => {
  const { infoData } = props
  return (
    <HomeSectionV3Wrapper>
      <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
      <div className='room-list'>
        <ScrollView>
          {
            infoData.list.map((item,index)=>{
              return (
                <RoomItem itemData={item} itemwidth='20%' key={item.id}></RoomItem>
              )
            })
          }
        </ScrollView>
      </div>
      <SectionFooter name='Plus'></SectionFooter>
    </HomeSectionV3Wrapper>
  )
})

HomeSectionV3.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV3