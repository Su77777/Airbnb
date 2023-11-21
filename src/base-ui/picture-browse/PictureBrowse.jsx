import PropTypes from 'prop-types'
import React, { memo, useEffect,useState } from 'react'
import { PictureBrowseWrapper } from './style'
import IconClose from '@/assets/svg/icon_close'
import IconArrowLeft from '@/assets/svg/icon-arrow-left'
import IconArrowRight from '@/assets/svg/icon-arrow-right'
import { SwitchTransition,CSSTransition } from 'react-transition-group'
import IconTriangleBottom from '@/assets/svg/icon_triangle_bottom'
import Indicator from '../indicator/Indicator'
import classNames from 'classnames'
import IconTriangleTop from '@/assets/svg/icon_triangle_top'

const PictureBrowse = memo((props) => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const [isNext,setIsNext] = useState(true)
  const [isShowToggle,setIsShowToggle] = useState(true)
  const { pictureUrls,closeClick } = props
  useEffect(()=>{
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = 'auto'
    }
  },[])
  function closeClickHandle () {
    if(closeClick) closeClick()
  }
  function isRightClickHandle(isRight = true) {
    let newIndex = isRight ? currentIndex + 1 : currentIndex - 1
    if(newIndex < 0) newIndex = pictureUrls.length - 1
    if(newIndex > pictureUrls.length - 1) newIndex = 0
    setCurrentIndex(newIndex)
    setIsNext(isRight)
  }
  function listItemClickHandle(index) {
    // 判断点击的当前图片是左边还是右边
    // 如果当前点击的图片的index 小于正在展示的图片就判断是左边 反之
    setIsNext(index > currentIndex)
    setCurrentIndex(index)
  }
  return (
    <PictureBrowseWrapper isNext={isNext} isShowToggle={isShowToggle}>
      <div className='top' onClick={closeClickHandle}>
        <div className='close'>
          <IconClose></IconClose>
        </div>
      </div>
      <div className="content">
        <div className="control">
          <div className='btn left' onClick={e => isRightClickHandle(false)}>
            <IconArrowLeft width={77} height={77}></IconArrowLeft>
          </div>
          <div className='btn right' onClick={e => isRightClickHandle(true)}>
            <IconArrowRight width={77} height={77}></IconArrowRight>
          </div>
        </div>
        <div className="picture">
          <SwitchTransition mode='in-out'>
            <CSSTransition key={pictureUrls[currentIndex]} classNames='pic' timeout={200}>
              <img src={pictureUrls[currentIndex]} alt="" />
            </CSSTransition>
          </SwitchTransition>
        </div>
      </div>
      <div className="footer">
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{currentIndex + 1}/{pictureUrls.length }</span>
              <span>room apartment 图片{currentIndex + 1}</span>
            </div>
            <div className='toggle' onClick={e => setIsShowToggle(!isShowToggle)}>
              <span>{isShowToggle ? '隐藏':'显示'}照片列表</span>
              {isShowToggle ? <IconTriangleBottom></IconTriangleBottom> : <IconTriangleTop></IconTriangleTop>}
            </div>
          </div>
          <div className='list'>
            <Indicator selectIndex={currentIndex} isShowToggle={isShowToggle}>
              {
                pictureUrls.map((item,index) => {
                  return (
                    <div className={classNames('item',{ active:currentIndex === index})} key={item}  onClick={e => listItemClickHandle(index)}>
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowseWrapper>
  )
})
PictureBrowse.propTypes = {
  closeClick:PropTypes.func,
  pictureUrls:PropTypes.array
}
export default PictureBrowse