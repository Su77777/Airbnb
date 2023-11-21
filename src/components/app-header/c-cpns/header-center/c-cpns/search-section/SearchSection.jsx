import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SearchSectionWrapper } from './style'

const SearchSection = memo((props) => {
  const { searchTitles } = props
  return (
    <SearchSectionWrapper>
      <div className='search-content'>
          {
            searchTitles?.map((item,index)=>{
              return (
                <div className="item">
                  <div className='item-text'>{item.title}</div>
                  <div className='item-desc'>{item.desc}</div>
                  <div className='line'></div>
                </div>
                
              )
            })
          }
      </div>
    </SearchSectionWrapper>
  )
})

SearchSection.propTypes = {
  searchTitles:PropTypes.array
}

export default SearchSection