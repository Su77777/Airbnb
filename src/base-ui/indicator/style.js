import styled from 'styled-components'

export const IndicatorWrapper = styled.div`
  overflow: hidden;
  height: ${props => props.isShowToggle ? 'auto':'0px'};
  .indicator-content {
    position: relative;
    display: flex;
    transition: transform 200ms ease;
    > * {
    flex-shrink: 0;
    }
  }
  

`