import PropTypes from 'prop-types'
import React, { memo,useState } from 'react'
import { EntireFilterWrapper } from './style'
import classNames from 'classnames'

const EntireFilter = memo((props) => {
  const [selectItems,setSelectItems] = useState([])
  const { filterData } = props
  function itemClickHandle(item) {
    const newItems = [...selectItems]
    if(newItems.includes(item)) { //移除操作
      const itemIndex = newItems.findIndex(filterItem => filterItem === item)
      newItems.splice(itemIndex,1)
    }else {//添加操作
      newItems.push(item)
    }
    
    setSelectItems(newItems)
  }
  return (
    <EntireFilterWrapper>
      <div className='filter-content'>
        {
          filterData.map((item,index)=>{
            return (
              <div className={classNames('item',{active:selectItems.includes(item)})} key={index} onClick={e=> itemClickHandle(item)}>{item}</div>
            )
          })
        }
      </div>
    </EntireFilterWrapper>
  )
})

EntireFilter.propTypes = {
  filterData:PropTypes.array
}

export default EntireFilter