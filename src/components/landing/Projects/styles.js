import styled, { css } from 'styled-components';
import { COLOR1, COLOR2, COLOR3, BLACK, WHITE, RADIUS, BLUR } from '../../common/Layout/variables';

export const Wrapper = styled.div`
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
  margin-bottom: 16rem;

  gap: 1.2rem 1.2rem;

  @media (max-width: 960px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    padding: 2rem;
    margin-bottom: 0rem;
    gap: 0;
  }
`;

export const InfosProjects = styled.div`
  grid-column: 1 / 8;
  z-index: 2;

  @media (max-width: 1024px) {
    order: 2;
  }

  p {
    background-color: ${COLOR1};
    padding: 2rem 4rem;
    font-size: 1.8rem;
    line-height: 1.7;
    border-radius: ${RADIUS};

    @media (max-width: 1024px) {
      font-size: 1.6rem;
      padding: 2rem;
    }
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
    flex-wrap: wrap;
    justify-content: flex-start;
    list-style: none;
    font-size: 1.4rem;
    font-weight: 700;

    @media (max-width: 1024px) {
      font-size: 1.2rem;
      padding-bottom: 4rem;
    }

    li {
      color: #fff575;
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }

    @media (min-width: 1024px) {
      ${props =>
        props.reverse &&
        css`
          justify-content: flex-end;
        `}
    }
  }

  ${props =>
    props.reverse &&
    css`
      grid-column: 6 / -1;
      order: 2;
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

      @media (max-width: 1024px) {
        flex-direction: row;
      }
    `}
`;

export const Cta = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-left: auto;

  img {
    min-width: 2.4rem;
  }

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

  max-width:49.7rem;

  transition:all .2s ease-out ;

  @media (max-width: 1024px) {
    order: 1;
  }


  &:hover{
    transform:scale(1.02)
  }

  ${props =>
    props.reverse &&
    css`
      grid-column: 1 / 6;
      order: 1;

      @media (max-width: 1024px) {
        order: 1;
      }
    `}
`;

export const Icon = styled.a`
  margin-left: 2rem;
  img {
    width: 2.4rem;
    fill: #6c63ff;
  }
`;
