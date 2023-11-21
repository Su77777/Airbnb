import React, { memo } from 'react'
import { HeaderLeftWrapper } from './style'
import IconLogo from '@/assets/svg/icon_logo'
import { useNavigate } from 'react-router-dom'

const HeaderLeft = memo(() => {
  const navigate = useNavigate()
  function toHome() {
    navigate('/home')
  }
  return (
    <HeaderLeftWrapper>
      <div className='logo' onClick={toHome}>
        <IconLogo></IconLogo>
      </div>
    </HeaderLeftWrapper>
  )
})

export default HeaderLeft