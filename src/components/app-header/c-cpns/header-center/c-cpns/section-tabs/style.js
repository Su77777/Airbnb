import styled from 'styled-components'

export const SectionTabsWrapper = styled.div`
  .tabs {
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 16px;
    height: 80px;
    color: ${props => props.theme.isAlpha ? '#fff':'#222'};
    .item {
      text-align: center;
      width: 96px;
      padding-bottom: 10px;
      margin-right: 10px;
      cursor: pointer;      
      &.active {
        border-bottom: 2px solid ${props => props.theme.isAlpha ? '#fff':'#222'};
      }

    }
  }
`