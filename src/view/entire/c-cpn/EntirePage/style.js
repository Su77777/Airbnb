import styled from 'styled-components'

export const EntirePageWrapper = styled.div`
 margin: 20px 0;
 .anticon {
  color: ${props => props.theme.color.secondColor};
 }
 .ant-pagination-item-active {
  border: 1px solid ${props => props.theme.color.secondColor};
  border-radius: 3px;
  font-weight: 700;
 }
 .ant-pagination-item-active a {
  background-color: ${props => props.theme.color.secondColor};
  color: #fff !important;
 }
 .ant-pagination-item a {
  color: ${props => props.theme.color.secondColor};
  
 }
 .totalPageSize {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  padding: 10px 10px;
  font-size: 12px;
 }
`
