import styled from "styled-components";

export const LongForItemWrapper = styled.div`
  width: 20%;
  flex-shrink: 0;

  .inner {
    position: relative;
    padding: 8px;
  }
  .cover {
    width: 100%;
  }
  .bg-cover {
    position: absolute;
    right: 8px;
    left: 8px;
    bottom: 0;
    height: 60%;
    background-image: linear-gradient(
      -180deg,
      rgba(0, 0, 0, 0) 3%,
      rgb(0, 0, 0) 100%
    );
  }
  .info {
    position: absolute;
    right: 0;
    left: 0;
    bottom: 25%;
    z-index: 9;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .city {
      font-weight: 700;
    }
    .price {
      margin-top: 5px;
    }
  }
`;
