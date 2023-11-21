import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { EntirePageWrapper } from './style'
import { Pagination } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { changeCurrentPage } from '@/store/modules/entire/createActions';

const EntirePage = memo((props) => {
  const {totalCount} = props
  const {currentPage} = useSelector((state) => ({
    currentPage:state.entire.currentPage
  }))
  const [page,setPage] = useState(1)
  const dispatch = useDispatch()
  function changePage(page) {
    dispatch(changeCurrentPage(page))
    setPage(page)
  }
  const startPage = (currentPage * 20) + 1//开始的page
  const endPage = (currentPage + 1) * 20 // 结束的page
  const totalPage = Math.ceil(totalCount / 20) - 1
  return (
    <EntirePageWrapper>
      <Pagination 
      total={totalCount} 
      onChange={changePage} 
      showSizeChanger={false} 
      current={page}
      defaultPageSize={22}
    ></Pagination>
    <div className='totalPageSize'>
      <span>第{startPage}-{endPage}个房源,共超过{totalPage}页房源</span>
    </div>
    </EntirePageWrapper>
  )
})

EntirePage.propTypes = {
  totalCount:PropTypes.string
}
export default EntirePage