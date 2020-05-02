import styled from 'styled-components';
import * as C from '~/styles/Constants';

export const CardRepo = styled.div`
  width: 100%;
  min-height: 150px;
  background-color: ${C.DARK_GREY};
  border-radius: 6px;
  color: ${C.WHITE};
  display: block;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: inset 0 0 0 5px ${C.GREEN};
    cursor: pointer;

    strong {
      color: ${C.GREEN};
    }
  }

  a {
    color: ${C.WHITE};
    
    p {
      font-family: 'robotothin';

      strong {
        font-family: 'robotomedium';
      }
    }
  }
`;
