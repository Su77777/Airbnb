import React, { memo, useEffect, useState } from 'react'
import { HeaderRightWrapper } from './style'
import IconGlobal from '@/assets/svg/icon_global'
import IconMenu from '@/assets/svg/icon_menu'
import IconAvatar from '@/assets/svg/icon_avatar'

const HeaderRight = memo(() => {
  // panel显示/隐藏处理
  const [isShow,setIsShow] = useState(false)
  // 副作用代码
  useEffect(()=>{
    function windowClickHandle(){
      setIsShow(false)
    }
    window.addEventListener('click',windowClickHandle,true)
    return () => {
      window.removeEventListener('click',windowClickHandle)
    }
  },[])
  // 监听profile点击
  function profileClickHandle() {
    setIsShow(true)
  }
  return (
    <HeaderRightWrapper>
      <div className='btns'>
        <span className='btn'>登陆</span>
        <span className='btn'>注册</span>
        <span className='btn'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className='profile' onClick={profileClickHandle}>
          <IconMenu></IconMenu>
          <IconAvatar></IconAvatar>

          {isShow && (
            <div className='panel'>
            <div className='top'>
              <div className='item'>登陆</div>
              <div className='item'>注册</div>
            </div>
            <div className='bottom'>
              <div className='item'>出租房源</div>
              <div className='item'>开展体验</div>
              <div className='item'>帮助</div>
            </div>
          </div>
          )}
      </div>
    </HeaderRightWrapper>
  )
})

export default HeaderRight