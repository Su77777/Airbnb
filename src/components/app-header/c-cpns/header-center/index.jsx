import React, { memo,useCallback,useState } from 'react'
import { HeaderCenterWrapper } from './style'
import IconSearchBar from '@/assets/svg/icon-search-bar'
import SectionTabs from '@/components/app-header/c-cpns/header-center/c-cpns/section-tabs/SectionTabs'
import SearchSection from './c-cpns/search-section/SearchSection'
import searchTitles from '@/assets/data/search_titles.json'
import { CSSTransition } from 'react-transition-group'

const HeaderCenter = memo((props) => {
  const  { isSearch,searchClick } = props
  const titles = searchTitles.map(item => item.title)
  const [tabIndex,setTabIndex] = useState(0)
  const tabItemClick = useCallback((index)=>{
    setTabIndex(index)
  },[])
  function searchClickHandle () {
    if(searchClick) searchClick()
  }
  return (
    <HeaderCenterWrapper>
      
      <CSSTransition
        in={!isSearch}
        classNames='bar'
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={searchClickHandle}>
              <div className='text'>搜索房源和体验</div>
              <div className='icon'>
                <IconSearchBar></IconSearchBar>
              </div>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames='detail'
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-detail'>
              <SectionTabs titles={titles} tabItemClick={tabItemClick}></SectionTabs>
              <div className='infos'>
                <SearchSection searchTitles={searchTitles[tabIndex].searchInfos}></SearchSection>
              </div>
        </div>
      </CSSTransition>
       
          
        
      
      
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter