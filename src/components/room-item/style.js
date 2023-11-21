import styled from 'styled-components'

export const RoomItemWrapper = styled.div`
position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  width: ${props => props.itemwidth};
  padding: 8px;
  .cover {
    position: relative;
    padding: 66.666% 8px 0;
    box-sizing: border-box;
    border-radius: 3px;
    overflow: hidden;
    img {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      
    }
  }
  .swiper {
    .control {
      color: #fff;
      
      .left,.right {
        position: absolute;
        display: none;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        z-index: 9;
        top: 20;
        width: 60px;
        height: 192px;
        cursor: pointer;
        
      }
      .right {
        background: linear-gradient(to right,transparent 0%,rgba(0,0,0,0.25) 100%);
        right: 8px;
      }
      .left {
        background: linear-gradient(to left,transparent 0%,rgba(0,0,0,0.25) 100%);

      }
    }
    .indicator {
      position: absolute;
      z-index: 99;
      bottom: 120px;
      left: 50%;
      transform: translateX(-50%);
      width: 30%;
      .item {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 14.29%;
         .dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ddd;
          &.active {
          width: 8px;
          height: 8px;
          background-color: #fff;

          }
        }
        
      }

    }
    &:hover {
      .left,.right {
        display: flex;
      }
    }
  }
  .desc-box {
    .intro {
      margin-top: 10px;
      font-size: 12px;
      font-weight: 700;
      color: ${props => props.theme.color.secondColor};
    }
    .desc {
      margin: 5px 0;
      font-weight: 700;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
    
  }
  .price {
      font-size: 12px;
      margin-bottom: 5px;
    }
  .rate{
    .star {
      font-size: 12px;
      margin-right: 3px;
      color: ${props => props.theme.color.primaryColor};
    }
    .star-comment {
      display: inline-block;
      font-weight: 700;
      font-size: 12px;
      color: ${props => props.theme.textColor.secondColor};
    }
  }
  
`