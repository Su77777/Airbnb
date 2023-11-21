import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex = 0,isShowToggle = true} = props
  const indiContentRef = useRef()
  useEffect(()=>{
    // 根据传进来的索引获取item
    const selectItemEl = indiContentRef.current.children[selectIndex]
    // 获取item的offsetLeft
    const selectItemEloffsetLeft = selectItemEl.offsetLeft
    // 获取item的宽度
    const selectItemElWidth =  selectItemEl.clientWidth
    // 获取盒子的宽度
    const contentWidth = indiContentRef.current.clientWidth
    const contentScroll = indiContentRef.current.scrollWidth
    let distance = selectItemEloffsetLeft + selectItemElWidth * 0.5 - contentWidth * 0.5

    if(distance < 0) distance = 0 //左边的情况处理 如果distance小于0的话就不用让distance移动
    const totalDistance = contentScroll - contentWidth
    if(distance > totalDistance) distance = totalDistance //右边的情况处理
    indiContentRef.current.style.transform  = `translate(${-distance}px)`
  },[selectIndex])
  return (
    <IndicatorWrapper isShowToggle={isShowToggle}>
      <div className='indicator-content' ref={indiContentRef}>
      {
        props.children
      }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {
  selectIndex:PropTypes.number
}

export default Indicator