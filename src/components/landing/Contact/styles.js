import styled from 'styled-components';
import { RADIUS } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
  padding-bottom: 20rem;
  position: relative;
`;

export const SkillsWrapper = styled.div`
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 1;
  padding-left: 2rem;
  backdrop-filter: blur(14px);
  padding: 4rem;
  font-size: 1.8rem;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }

  h1 {
    margin-bottom: 2rem;
    font-size: 2.6rem;
    color: #fff575;
  }

  p {
    flex: 0 0 56%;
    margin-bottom: 2.5rem;
    font-weight: normal;
    line-height: 1.5;
    color: #000000;
  }

  a {
    color: #000000;
  }

  ul {
    margin-top: 2rem;
    flex: 1;
    display: flex;
    justify-content: space-around;
    list-style: square;

    li {
      line-height: 1.5;
    }
  }
`;

export const Thumbnail = styled.div`
  height: auto;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
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
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 1024px) {
    padding: 2rem;
    font-size: 1.6rem;
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
