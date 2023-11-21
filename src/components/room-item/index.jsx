import PropTypes from 'prop-types'
import React, { memo, useRef, useState } from 'react'
import { Rate,Carousel } from 'antd';
import { RoomItemWrapper } from './style'
import IconArrowLeft from '@/assets/svg/icon-arrow-left';
import IconArrowRight from '@/assets/svg/icon-arrow-right';
import Indicator from '@/base-ui/indicator/Indicator';
import classNames from 'classnames';

const RoomItem = memo((props) => {
  const { itemData,itemwidth = '25%',itemClick } = props
  const [selectIndex,setSelectIndex] = useState(0)
  const carouselRef = useRef()
  // 动态展示评分组件
  function isShowStarRating() {
    if(itemData.star_rating) {
      return (
        <div className='rate'> 
          <Rate className='star' disabled allowHalf defaultValue={itemData.star_rating} />
          <div className='star-comment'>
            {itemData.bottom_info?.content && <span>{itemData.reviews_count}</span> }
            {itemData.bottom_info?.content}
          </div>
        </div>
        
      )
    }else {
      return (
        <div style={{fontSize:12,color:'#aaa'}}>暂无评分</div>
      )
    }
  }
  // 控制左右按钮
  function controlClickHandle(isRight = true,event) {
    isRight ? carouselRef.current.next() : carouselRef.current.prev()

    // 最新的索引
    let newIndex = isRight ? selectIndex + 1 : selectIndex - 1
    if(newIndex < 0) newIndex = itemData.picture_urls.length - 1
    if(newIndex > itemData.picture_urls.length - 1) newIndex = 0
    setSelectIndex(newIndex)
    event.stopPropagation()
  }
  const coverEl = (
    <div className='cover'>
    <img src={itemData.picture_url} alt="" />
  </div>
  )
  const swiperEl = (
      <div className="swiper">
      <div className='control'> 
        <div className='left' onClick={e => controlClickHandle(false,e)}>
          <IconArrowLeft height={30} width={30}></IconArrowLeft>
        </div>
        <div className='right' onClick={e => controlClickHandle(true,e)}>
          <IconArrowRight height={30} width={30}></IconArrowRight>
        </div>
      </div>
      <Carousel dots={false} ref={carouselRef}>
        {
          itemData?.picture_urls?.map((item,index)=>{
            return <div className='cover' key={item}>
              <img src={item} alt="" />
            </div>
          })
        }
      </Carousel>
      <div className='indicator'>
        <Indicator selectIndex={selectIndex}>
          {
            itemData.picture_urls?.map((item,index) => {
              return <div className='item'>
                <span className={classNames('dot',{active:selectIndex === index})} key={item}></span>
              </div>
            }) 
          }
        </Indicator>
      </div>
    </div>
  )
  function roomItemClick  () {
    if(itemClick) itemClick(itemData)
  }
  return (
    <RoomItemWrapper itemwidth={itemwidth} onClick={roomItemClick}>
      {
        itemData.picture_urls ? swiperEl : coverEl
      }
      <div className='desc-box'>
        <div className='intro'>
          {itemData.verify_info.messages.join('·')}
        </div>
        <div className='desc'>
          {itemData.name}
        </div>
      </div>
      <div className='price'>
        {itemData.price_format}/晚
      </div>
      {isShowStarRating()}
    </RoomItemWrapper>
  )
})

RoomItem.propTypes = {
  itemData:PropTypes.object,
  itemwidth:PropTypes.string

}

export default RoomItem