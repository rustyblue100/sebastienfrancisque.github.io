import React from 'react';
import { Container } from 'components/common';
import { Wrapper, Flex, Links, Details } from './styles';
import social from './social.json';

export const Footer = () => (
  <Wrapper>
    <Flex as={Container}>
      <Details>
        <h2>Sébastien Francisque</h2>
        <span>© Tous droits réservés. | {new Date().getFullYear()}</span>

        <br />
        <br />
        <a style={{ float: 'right' }} href="https://www.freepik.com/free-photos-vectors/business">
          Business vector created by pikisuperstar - www.freepik.com
        </a>
      </Details>
    </Flex>
  </Wrapper>
);
