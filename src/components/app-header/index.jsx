import React, { memo,useState,useRef } from 'react'
import { HeaderWrapper, SearchContent } from './style'
import { HeaderCenter,HeaderLeft,HeaderRight } from './c-cpns'
import { shallowEqual, useSelector } from 'react-redux'
import classNames from 'classnames'
import  useScrollPosition from '@/hooks/useScrollPosition'
import { ThemeProvider } from 'styled-components'

const AppHeader = memo(() => {
  const [isSearch,setIsSearch] = useState(false)
  const { headerConfig } = useSelector((state)=>({
    headerConfig:state.main.headerConfig
  }),shallowEqual)
  const { isFixed,topAlpha } = headerConfig
  // 监听滚动 启动动画
  const { scrollY } = useScrollPosition()
  console.log(scrollY);
  const preY = useRef(0)
  // 在搜索框没有弹出来的情况下 不断记录最新的scrollY
  if(!isSearch) preY.current = scrollY
  // 在弹出搜索功能的情况下 滚动的距离 - 大于之前滚动的距离 计算出滚动距离大于30 就让搜索框复原
  // Math.abs计算绝对值: 在计算结果有可能是负数的情况下 使用他们计算出来的绝对值
  if(isSearch && Math.abs(scrollY - preY.current) > 30) setIsSearch(false)
  const isAlpha = topAlpha && scrollY === 0 
  return (
    <ThemeProvider theme={{isAlpha}}>
      <HeaderWrapper className={classNames({fixed:isFixed})}>
        <div className="content">
          <div className="top">
            <HeaderLeft></HeaderLeft>
            <HeaderCenter isSearch={isAlpha || isSearch} searchClick={e => setIsSearch(true)}></HeaderCenter>
            <HeaderRight></HeaderRight>
          </div>
          <SearchContent isSearch={isAlpha || isSearch}>
          </SearchContent>
        </div>
        {isSearch && <div className="cover" onClick={e => setIsSearch(false)}></div>}
      </HeaderWrapper>
    </ThemeProvider>
  )
})

export default AppHeader