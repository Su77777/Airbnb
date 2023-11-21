import styled from 'styled-components'

export const EntireFilterWrapper = styled.div`
    
  .filter-content {
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 199;
    display: flex;
    border-bottom: 1px solid #f2f2f2;
    padding: 10px 10px;
    .item {
      padding: 6px 12px;
      margin: 0 8px 0 8px;
      border: 1px solid #eee;
      box-sizing: border-box;
      margin-right: 5px;
      font-size: 12px;
      font-weight: 700;
      color: #484848;
      cursor: pointer;
      border-radius: 3px;
      &.active {
        background-color: ${props => props.theme.color.secondColor};
        border: 1px solid ${props => props.theme.color.secondColor};
        color: #fff;
      }
    }
  }
`