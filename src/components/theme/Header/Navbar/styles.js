import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  padding: 1.5rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: #212121;
  }
`;

export const Logo = styled.span`
  font-size: 3rem;

  backdrop-filter: blur(14px);
  padding: 0.5rem;
  a {
    color: #ffffff;

    text-transform: uppercase;
    letter-spacing: 2px;
  }
`;
