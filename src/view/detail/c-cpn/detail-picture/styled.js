import styled from 'styled-components'

export const DetailPictureWrapper = styled.div`
  .detail-content {
    position: relative;
    display: flex;
    justify-content: space-between;
    height:556px;
    background: #222;
    .item {
      width: 50%;
    }
    .left {
      padding: 1px;
      box-sizing: border-box;     
      .over-box {
        overflow: hidden;
        height: 100%;
      }
    }
    .right {
      display: flex;
      flex-wrap: wrap;
      .right-item {
      padding: 1px;
      box-sizing: border-box;
      width: 50%;
      .over-box {
        width: 100%;
        height: 276px;
        overflow: hidden;
      }
    }
    }
    
    .picture {
      width: 100%;
      height: 100%;
      cursor: pointer;
      transition: transform 200ms ease;
      object-fit: cover;
        &:hover  {
          transform: scale(1.1);
        }
    }
    .share-and-collect {
      position: absolute;
      top: 20px;
      right: 0;
      display: flex;
      .item {
        display: flex;
        align-items: center;
        height: 18px;
        width: 52px;
        padding: 7px 15px;
        margin-right: 20px;
        color: #222;
        border: 1px solid #222;
        background: #fff;
        font-weight: 700;
        border-radius: 8px;
        cursor: pointer;
        &:hover {
          background: #eee;
        }
        .text {
          margin-left: 5px;
        }
      }
    }
    .check-picture {
        position: absolute;
        bottom: 24px;
        right: 20px;
        text-align: center;
        height: 18px;
        line-height: 18px;
        padding: 7px 15px;
        margin-right: 20px;
        color: #222;
        background: #fff;
        font-weight: 700;
        border-radius: 3px;
        box-shadow: rgba(0, 0, 0, 0.14) 0px 1px 1px 1px;
        cursor: pointer;
    }
  }
`