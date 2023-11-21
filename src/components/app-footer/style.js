import styled from "styled-components"

export const AppFooterWrapper  = styled.div`
  border-top: 1px solid #ebebeb;
  .wrapper {
    width: 1032px;
    margin: 0 auto;
    padding: 48px 24px;
    box-sizing: border-box;

  }
  .list {
    position: relative;
    left: 105px;
    display: flex; 
    .list-item {
      flex: 1;
      .name{
      font-weight: 700;
      margin-bottom: 16px;
      }
      .list-iten {
        text-align: left;
        .name-list {
          cursor: pointer;
          display: inline-block;
          margin-bottom: 10px;
          color: #767676;
          &:hover {
            text-decoration: underline;
          }
        }
        
      }
    }
  }
  .statement {
    margin-top: 30px;
    border-top: 1px solid #EBEBEB;
    padding: 20px;
    color: #767676;
    text-align: center;
  }
`