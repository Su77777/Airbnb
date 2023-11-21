import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTabsWrapper } from './style'
import classNames from 'classnames'

const SectionTabs = memo((props) => {
  const {tabItemClick} = props
  const [currentIndex,setCurrentIndex] = useState(0)
  const { titles } = props
  function itemClickHandle(index) {
    setCurrentIndex(index)
    if(tabItemClick) tabItemClick(index)
  }
  return (
    <SectionTabsWrapper >
      <div className='tabs'>
        {
          titles.map((item,index)=>{
            return (
              <div className={classNames('item',{active: index === currentIndex})} onClick={e => itemClickHandle(index)}>{item}</div>
            )
          })
        }
      </div>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  titles:PropTypes.array
}

export default SectionTabs