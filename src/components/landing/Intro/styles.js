import styled from 'styled-components';
import { COLOR1, COLOR2, COLOR3, BLACK, WHITE, RADIUS } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`;

export const IntroWrapper = styled.div`
  margin-top: 14rem;
  box-sizing: border-box;
  padding: 4rem 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  backdrop-filter: blur(14px);
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const Details = styled.div`
  flex: 0 0 70%;

  @media (max-width: 960px) {
    width: 100%;
    margin-bottom: 2rem;
  }

  h1 {
    margin-bottom: 2rem;
    font-weight: 600;
    color: #dffffe;
    font-size: 65px;
    line-height: 1.1;
    margin: 0px;

    @media (max-width: 680px) {
      font-size: 30pt;
    }
  }

  h2 {
    font-size: 65px;
    line-height: 1.1;
    color: #72a9a7;
    padding-bottom: 2rem;
  }

  h4 {
    color: #fff575;
    font-size: 16px;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    font-weight: normal;
    margin: 0px 0px 20px 3px;

    @media (max-width: 680px) {
      font-size: 26pt;
    }
  }
`;

export const Thumbnail = styled.div`
  margin-left: auto;
  @media (max-width: 960px) {
    width: 100%;
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

    &:hover {
      filter: unset;
    }
  }
`;
