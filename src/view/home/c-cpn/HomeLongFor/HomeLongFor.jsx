import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { HomeLongForWrapper } from './style'
import SectionHeader from '@/components/section-header/SectionHeader'
import LongforItem from '@/components/longfor-item'

const HomeLongFor = memo((props) => {
  const { infoData } = props
  return (
    <HomeLongForWrapper>
      <SectionHeader titile={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
      <div className='longfor-list'>
        {
          infoData.list.map((item,index) => {
            return (
              <LongforItem infoData={item} key={item.city}></LongforItem>
            )
          })
        }
      </div>
    </HomeLongForWrapper>
  )
})

HomeLongFor.propTypes = {
  infoData:PropTypes.object
}

export default HomeLongFor