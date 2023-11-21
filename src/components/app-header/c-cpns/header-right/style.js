import styled from 'styled-components'
export const HeaderRightWrapper  = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  color: ${props => props.theme.isAlpha ? '#fff': props.theme.textColor.primaryColor};
  
  .btns {
    display: flex;
    .btn {
      height: 18px;
      line-height: 18px;
      padding: 12px 15px;
      border-radius: 22px;
      cursor: pointer;
      &:hover {
        background-color: ${props => props.theme.isAlpha ? '#fff': '#eee'};
        color: ${props => props.theme.isAlpha ? '#222': props.theme.textColor.primaryColor};
      }
    }
  }
  .profile {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 42px;
    width: 77px;
    border: 1px solid #ccc;
    border-radius: 25px;
    background-color: #fff;
    box-sizing: border-box;
    cursor: pointer;
    margin-right: 24px;
    margin-left: 5px;
    color: ${props=>props.theme.textColor.primaryColor};
    ${props => props.theme.mixin.boxShadow}
    .panel {
      position: absolute;
      right: 0;
      top: 60px;
      width: 240px;
      background-color: #fff;
      border: 1px solid #eee;
      border-radius: 10px;
      box-shadow: 0 0 6px rgba(0,0,0,.18);
      color: #555;
    }
    .top {
      border-bottom: 1px solid #eee;
    }
    .top,.bottom {
      padding: 5px 0px;
      .item {
        padding: 0 16px;
        height: 35px;
        line-height: 35px;
        &:hover {
          background-color: #eee;
        }
      }
    }
  }

`