import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { LongForItemWrapper } from './style'

const LongforItem = memo((props) => {
  const { infoData } = props
  return (
    <LongForItemWrapper>
      <div className='inner'>
        <img className='cover' src={infoData.picture_url} alt="" />
        <div className='bg-cover'></div>
        <div className='info'>
          <div className='city'>{infoData.city}</div>
          <div className='price'>均价 {infoData.price}</div>
        </div>
      </div> 
    </LongForItemWrapper>
  )
})

LongforItem.propTypes = {
  infoData:PropTypes.object
}

export default LongforItem