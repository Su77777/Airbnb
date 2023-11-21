import styled from 'styled-components'

export const HeaderLeftWrapper = styled.div`
  display: flex;
  flex: 1;
  .logo {
    margin-left: 24px;
    cursor: pointer;
    color: ${props => props.theme.isAlpha ? '#fff': props.theme.color.primaryColor};
    
  }
`