import PropTypes from 'prop-types'
import React, { memo } from 'react'
import SectionHeader from '@/components/section-header/SectionHeader'
import SectionRoom from '@/components/section-room/index'
import { HomeSectionV1Wrapper } from './style'
const HomeSectionV1 = memo((props) => {
  const {infoData} = props
  return (
    <div>
      <HomeSectionV1Wrapper>
          <div className='good-price'>
            <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
            <SectionRoom roomList={infoData?.list} itemwidth='25%'></SectionRoom>
          </div>
      </HomeSectionV1Wrapper>
    </div>
  )
})

HomeSectionV1.propTypes = {
  infoData:PropTypes.object
}

export default HomeSectionV1