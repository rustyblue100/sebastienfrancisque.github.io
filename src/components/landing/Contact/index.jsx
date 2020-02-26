import React from 'react';
import { Container } from 'components/common';
import Fade from 'react-reveal/Fade';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import { Wrapper, Details, SkillsWrapper, Box } from './styles';

export const Contact = () => (
  <Wrapper id="contact">
    <SkillsWrapper as={Container}>
      <Fade>
        <Details>
          <h1>Me joindre</h1>
          <Box>
            <p>
              Par courriel: <a href="mailto:sebastienfrancisque@gmail.com">sebastienfrancisque@gmail.com</a>
            </p>

            <p>
              Par téléphone: <a>(514) 758-4967</a>
            </p>
          </Box>
        </Details>
      </Fade>
    </SkillsWrapper>
    <AnchorLink
      style={{ position: 'absolute', bottom: '5rem', right: '10rem', color: 'brown', fontSize: '1.4rem' }}
      href="#haut"
    >
      retour vers le haut ↑
    </AnchorLink>
  </Wrapper>
);
