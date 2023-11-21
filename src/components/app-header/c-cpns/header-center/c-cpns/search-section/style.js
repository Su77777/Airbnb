import styled from "styled-components";

export const SearchSectionWrapper = styled.div`
.search-content {
  display: flex;
  justify-content: space-around;
  border: 1px solid #eee;
  border-radius: 24px;
  overflow: hidden;
  background: #fff;
  .item {
    position: relative;
    padding: 15px;
    width: 230px;
    border-radius: 24px;
    cursor: pointer;
    .item-text {
      font-size: 12px;
      font-weight: 700;
    }
    .item-desc {
      font-size: 12px;
      color: #717171;
    }

    .line {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 3px;
      height: 24px;
      width: 1px;
      background: #eee;
    }
    &:hover {
      background: #eee;
    }
  }
  & div:last-child {
    border-right: none;

  }
}
`