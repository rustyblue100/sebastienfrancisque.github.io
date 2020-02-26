import footerIllustration from 'assets/illustrations/footer.svg';
import styled from 'styled-components';
import { COLOR1, COLOR2, COLOR3, BLUR } from '../../common/Layout/variables';

export const Wrapper = styled.div`
  padding: 4rem 0 4rem 0;
  backdrop-filter: blur(${BLUR});

  @media (max-width: 1960px) {
    padding: 4rem 0 4rem;
  }
`;

export const Flex = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: space-between;

  @media (max-width: 680px) {
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
`;

export const Links = styled.div`
  display: flex;
  align-items: center;

  a {
    margin: 0 0.5rem;

    img {
      margin: 0;
    }

    &:first-child,
    &:last-child {
      margin: 0;
    }
  }
`;

export const Details = styled.div`
  text-align: center;
  margin: 0 auto;
  color: ${COLOR1};
  a {
    color: ${COLOR2};
  }
  @media (max-width: 680px) {
    margin-bottom: 2rem;
  }
`;
