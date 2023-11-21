import styled from 'styled-components'

export const HeaderCenterWrapper  = styled.div`
position: relative;
display: flex;
justify-content: center;
height: 48px;
.search-bar {
  position: absolute;
  display: flex;
  height: 48px;
  width: 300px;
  box-sizing: border-box;
  justify-content: space-between;
  align-items: center;
  padding: 0 8px;
  border: 1px solid #ddd;
  border-radius: 24px;
  font-size: 16px;
  color: ${props => props.theme.textColor.secondColor};
  font-weight: 600;
  cursor: pointer;
  ${props => props.theme.mixin.boxShadow}
  .text {
    padding: 0 16px;
  }
  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 32px;
    height: 32px;
    background-color: ${props => props.theme.color.primaryColor};
    border-radius: 50%;
    color: #fff;
  }
}
.search-detail {
  position: relative;
  transform-origin: 50% 0 ;//动画优化
  will-change: transform,opacity;//动画优化
  .infos {
    position: absolute;
    right: 40%;
    transform: translateX(50%);
  }
}
.detail-exit {
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
.detail-exit-active {
  transition: all 250ms ease;
  transform: scale(0.35,0.727273) translateY(-58px);
  opacity: 0;
}
.detail-enter {
  transform: scale(0.35,0.727273) translateY(-58px);
  opacity: 0;
}
.detail-enter-active {
  transition: all 250ms ease;
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
.bar-enter {
  transform: scale(2.85714,1.375) translateY(58px);
  opacity: 0;
}
.bar-enter-active {
  transition: all 250ms ease;
  transform: scale(1.0) translateY(0);
  opacity: 1;
}
.bar-exit {
  opacity: 0;
}
`