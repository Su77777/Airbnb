import React, { memo, useEffect, useRef, useState } from 'react'
import { ScrollViewWrapper } from './styled'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'

const ScrollView = memo((props) => {
  // 定义内部数据
  const [showRight,setShowRight] = useState(false)
  const [showLeft,setShowLeft] = useState(false)
  const [posIndex,setPosIndex]  = useState(0)
  // 使用ref记录状态 可以不用刷新组件的情况下 记录
  const totalDistanceRef = useRef()
  // 组件渲染完毕 判断是否显示右侧按钮
  const scrollContentRef = useRef()
  useEffect(()=>{
    const scrollWidth = scrollContentRef.current.scrollWidth //可滚动区域
    const clientWidth = scrollContentRef.current.clientWidth //本身占据宽度
    const totalDistance = scrollWidth - clientWidth
    totalDistanceRef.current = totalDistance
    setShowRight(totalDistance > 0)
  },[props.children])

  function rightClickHandle(isRight) {
    const newIndex = isRight ? posIndex + 1 : posIndex - 1
    // 获取相应索引的元素
    const newEl = scrollContentRef.current.children[newIndex]
    // 获取元素的offsetLeft值 offsetLeft 相对的是父级定位元素的偏移
    const newEloffsetLeft = newEl.offsetLeft
    console.log(newEloffsetLeft);
    scrollContentRef.current.style.transform = `translate(-${newEloffsetLeft}px)`
    // 更新索引获取下一个元素
    setPosIndex(newIndex)
    // 可滚动区域大于 获取到的元素的偏移量时 按钮消失
    setShowRight(totalDistanceRef.current > newEloffsetLeft)
    setShowLeft(newEloffsetLeft > 0)
  }
  return (
    <ScrollViewWrapper>
      {showLeft && (
        <div className='control arrow-left' onClick={e => rightClickHandle(false)}>
          <IconArrowLeft></IconArrowLeft>
        </div>
      )}
      {showRight && (
        <div className='control arrow-right' onClick={e => rightClickHandle(true)}>
          <IconArrowRight></IconArrowRight>
        </div>
      )}
      <div className='scroll'>
        <div className='scroll-content' ref={scrollContentRef}>
          {props.children}
        </div>
      </div>
    </ScrollViewWrapper>
  )
})

ScrollView.propTypes = {}

export default ScrollView