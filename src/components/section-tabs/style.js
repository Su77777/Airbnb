import styled from 'styled-components'

export const SectionTabsWrapper = styled.div`
  margin-top: 15px;
  /* .arrow-left {
    width: 30px;
    height: 30px;
    line-height: 32px;
    text-align: center;
    border-radius: 50%;
    border: 1px solid #eee;
    background-color: #fff;
    color: #ccc;
  } */
  .item {
    flex-basis: 120px;
    flex-shrink: 0;
    width: 12.9999%;
    margin-right: 16px;
    padding: 14px 10px;
    box-sizing: border-box;
    border-radius: 3px;
    text-align: center;
    border: 0.5px solid #d8d8d8;
    white-space: nowrap;
    cursor: pointer;
    &:last-child {
      margin-right: 0;
    }

    &.active {
      background-color: ${props => props.theme.color.secondColor};
      color: #fff;
    }
  }
  
`