import styled from 'styled-components';
import { RADIUS, BLUR } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  backdrop-filter: blur(${BLUR});
`;

export const Details = styled.div`
  flex: 1;
  padding: 4rem;
  font-size: 1.8rem;
  max-width: 100%;
  margin-bottom: 20rem;

  @media (max-width: 1024px) {
    padding: 2rem;
    flex-direction: column;
    font-size: 1.6rem;
    margin-bottom: 4rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.6rem;
    color: #fff575;
    padding: 2rem;
  }

  p {
    flex: 0 0 50%;
    margin-bottom: 2.5rem;
    font-weight: normal;
    line-height: 1.5;
    color: #000000;
    @media (max-width: 1024px) {
      flex: 1;
    }
  }

  ul {
    margin-top: 2rem;
    flex: 1;

    list-style: square;

    li {
      line-height: 1.5;
    }
  }
`;

export const Thumbnail = styled.div`
  height: auto;
  flex: 0 0 30%;
  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  @media (max-width: 680px) {
    display: none;
  }

  img {
    width: 100%;
  }
`;

export const Box = styled.div`
  background-color: #dffffe;
  border-radius: ${RADIUS};
  padding: 8rem 4rem;
  display: flex;

  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 2rem;
    border-radius: ${RADIUS};
  }
`;

export const Square = styled.div`
  z-index: -1;
  background-color: red;
  display: block;
  transform: rotate(40deg);

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
  }
`;
