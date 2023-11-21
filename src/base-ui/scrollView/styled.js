import styled from 'styled-components'

export const ScrollViewWrapper = styled.div`
    position: relative;
    padding: 10px 0;
    .control {
      position: absolute;
      z-index: 9;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 28px;
      height: 28px;
      text-align: center;
      border-radius: 50%;
      box-shadow: 0 1px 1px 1px rgba(0,0,0,.14);
      background-color: #fff;
      border: 2px solid #fff;
      cursor: pointer;
      &.arrow-left {
        left: -15px;
        top: 50%;
        transform: translate(0,-50%);
      }
      &.arrow-right {
        right: -15px;
        top: 50%;
        transform: translate(0,-50%);
      }
    } 
    .scroll {
      overflow: hidden;
      .scroll-content {
      position: relative;
      display: flex;
      transition: transform 250ms ease;
    }
    }
`