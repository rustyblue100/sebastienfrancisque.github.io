import styled from 'styled-components';
import { COLOR1, COLOR2, COLOR3, BLACK, WHITE, RADIUS, BLUR } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  @media (max-width: 960px) {
    height: 100%;
    margin-bottom: 4rem;
  }
`;

export const IntroWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(${BLUR});

  @media (max-width: 960px) {
    margin-top: 0;
    flex-direction: column-reverse;
    position:unset;

    top:0
    left:0;
    transform: unset;
  }
`;

export const Details = styled.div`
  flex: 0 0 70%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
    text-align: center;
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 600;
    color: #dffffe;
    font-size: 65px;
    line-height: 1.1;
    margin: 0px;

    @media (max-width: 680px) {
      font-size: 3rem;
    }
  }

  h2 {
    font-size: 65px;
    line-height: 1.1;
    color: #72a9a7;
    padding-bottom: 2rem;

    @media (max-width: 680px) {
      font-size: 3rem;
    }
  }

  h4 {
    color: #fff575;
    font-size: 16px;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    font-weight: normal;
    margin: 0px 0px 20px 3px;

    @media (max-width: 680px) {
      font-size: 1.2rem;
    }
  }
`;

export const Thumbnail = styled.div`
  margin-left: auto;
  @media (max-width: 960px) {
    width: 100%;
    margin-top: 0rem;
  }

  img {
    border-radius: 50%;
    border: 2px solid ${COLOR1};
    padding: 1rem;
    width: 25rem;
    height: 25rem;
    object-fit: cover;
    object-position: -45px 0px;
    filter: sepia(91%) saturate(56%);
    transition: all 0.2s;

    @media (max-width: 960px) {
      width: 18rem;
      height: 18rem;
      object-position: unset;
    }

    &:hover {
      filter: unset;
    }
  }
`;
