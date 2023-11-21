import styled from 'styled-components'

export const PictureBrowseWrapper = styled.div`
    position: fixed;
    display: flex;
    flex-direction: column;
    z-index: 999;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: #333;
    .top {
      height: 86px;
      position: relative;
      .close {
        position: absolute;
        top: 29px;
        right: 20px;
        height: 86px;
        cursor: pointer;
      }
    }
    .content {
      position: relative;
      flex: 1;
      display: flex;
      justify-content: center;
      .control {
        position: absolute;
        z-index: 1;
        right: 0;
        left: 0;
        top: 0;
        bottom: 0;
        display: flex;
        justify-content: space-between;
        color: #fff;
        .btn {
          display: flex;
          justify-content: center;
          align-items: center;
          width: 83px;
          height: 100%;
          cursor: pointer;
        }
      }
      .picture {
        position: relative;
        height: 100%;
        width: 100%;
        max-width: 105vh;
        overflow: hidden;
        img {
          position: absolute;
          top: 0;
          right: 0;
          left: 0;
          bottom: 0;
          margin: 0 auto;
          height: 100%;
          user-select: none;
        }
        .pic-enter {
          transform: translateX(${props => props.isNext ? '100%' : '-100%'});
          opacity: 0;
        }
        .pic-enter-active {
          transform: translate(0);
          opacity: 1;
          transition: all 200ms ease;
        }
        .pic-exit {
          opacity: 1;
        }
        .pic-exit-active {
          opacity: 0;
          transition: all 200ms ease;
        }
      }
    }
    .footer {
      display: flex;
      justify-content: center;
      height: 100px;
      margin-top: 10px;
      .info {
        position: absolute;
        bottom: 10px;
        max-width: 105vh;
        color: #fff;
  
        .desc {
          display: flex;
          justify-content: space-between;
          margin: 12px 0 10px 0;
          font-size: 12px;
          .count,.toggle {
            span {
              margin-right: 5px;
            }
          }
          .toggle {
            cursor: pointer;
          }
          
        }
        .list {
            transition: height 200ms ease;
            height: ${props => props.isShowToggle ? '67px':'0px'};
            .item {
              margin-right: 10px;
              img {
                width: 100px;
                height: 67px;
                opacity: 0.5;
                cursor: pointer;
              }
              &.active img {
                  opacity: 1;
              }
            }
          }
      }
    }
`