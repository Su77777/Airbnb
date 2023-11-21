import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { SectionTabsWrapper } from './style'
// import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import classNames from 'classnames'
import ScrollView from '@/base-ui/scrollView/ScrollView'

const SectionTabs = memo((props) => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const { tabNames = [],tabClick } = props
  function changeCurrentIndex(index,item) {
    setCurrentIndex(index)
    tabClick(index,item)
  }

  return (
    <SectionTabsWrapper>
      <ScrollView>
        {
          tabNames.map((item,index) => {
            return <div 
              className={classNames('item',{active: index === currentIndex})} 
              onClick={e => changeCurrentIndex(index,item)} 
              key={index}
            >{item}</div>
          })
        }
      </ScrollView>
    </SectionTabsWrapper>
  )
})

SectionTabs.propTypes = {
  tabNames:PropTypes.array
}

export default SectionTabs