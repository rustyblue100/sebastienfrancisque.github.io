import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import Flip from 'react-reveal/Flip';
import dev from '../../../assets/thumbnail/seb.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container}>
      <Details>
        <Fade bottom duration={400}>
          <h4>Bonjours, mon nom est</h4>
        </Fade>

        <Fade bottom duration={400} delay={200}>
          <h1>Sébastien Francisque.</h1>
        </Fade>

        <Flip bottom duration={1400} delay={250}>
          <h2> Je fais du dévelopment web.</h2>
        </Flip>

        <Button as={AnchorLink} href="#contact">
          Me rejoindre
        </Button>
      </Details>
      <Flip left duration={1000} delay={0}>
        <Thumbnail>
          <img src={dev} alt="Sébastien Francisque" />
        </Thumbnail>
      </Flip>
    </IntroWrapper>
  </Wrapper>
);
