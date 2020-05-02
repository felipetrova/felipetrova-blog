import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const Header = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9;
  background: ${C.DARK_GREY};

  .title {
    color: ${C.GREEN};
  }

  p {
    line-height: 23px;
    text-transform: capitalize;
  }

  div {
    height: 45px;
  }

  img {
    max-width: 50px;
    max-height: 25px;
    width: 100%;
    height: auto;
  }

  i {
    cursor: pointer;

    &:first-of-type {
      margin-left: 8px;
      font-size: 20px;
    }
  }
`
