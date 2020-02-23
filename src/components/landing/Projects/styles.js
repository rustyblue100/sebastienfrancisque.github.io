import styled, { css } from 'styled-components';
import { COLOR1, COLOR2, COLOR3, BLACK, WHITE, RADIUS, BLUR } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  padding: 2rem 0;
  width: 100%;
  min-height: 100vh;
  backdrop-filter: blur(${BLUR});

  h2 {
    font-size: 2.6rem;
    color: #fff575;
    padding-top: 4rem;
    padding-left: 4rem;
  }
`;

export const Grid = styled.div`
  display: grid;
  padding: 4rem;

  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  margin-bottom: 12rem;

  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

export const InfosProjects = styled.div`
  grid-column: 1 / 8;
  z-index: 2;
  p {
    background-color: ${COLOR1};
    padding: 2rem 4rem;
    font-size: 1.8rem;
    line-height: 1.7;
    border-radius: ${RADIUS};
  }

  h4 {
    color: #fff575;
    font-size: 16px;
    font-family: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'Lucida Console', Monaco, monospace;
    font-weight: normal;
    margin: 0px 0px 20px 3px;
  }

  ul {
    margin: 4rem 0 0 0;
    display: flex;
    justify-content: flex-start;
    list-style: none;
    font-size: 1.4rem;
    font-weight: 700;

    li {
      color: #fff575;
      margin-right: 2rem;
    }

    ${props =>
      props.reverse &&
      css`
        justify-content: flex-end;
      `}
  }

  ${props =>
    props.reverse &&
    css`
      grid-column: 6 / -1;
      order: 2;
    `}
`;

export const NomProjet = styled.h3`
  display: flex;
  align-items: top;
  font-size: 2.8rem;
  a {
    color: ${COLOR1};
  }

  ${props =>
    props.reverse &&
    css`
      flex-direction: row-reverse;
    `}
`;

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  ${props =>
    props.reverse &&
    css`
      justify-content: flex-start;
      margin-left: unset;
      margin-right: auto;
    `}
`;

export const Thumbnail = styled.div`

  grid-column: 8/ -1;
  margin-left: -3rem;
  img {
    width: 100%;
    transition: all .2s;
    &:hover{
      filter unset
    }
  }

  ${props =>
    props.reverse &&
    css`
      grid-column: 1 / 6;
      order: 1;
    `}
`;

export const Icon = styled.a`
  margin-left: 2rem;
  img {
    width: 2.4rem;
    fill: #6c63ff;
  }
`;
