import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from '../../../assets/thumbnail/seb.png';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => (
  <Wrapper>
    <Header />
    <IntroWrapper as={Container} id="intro">
      <Details>
        <div data-sal="fade" data-sal-duration="400" data-sal-easing="ease">
          <h4>Bonjour, mon nom est</h4>
        </div>

        <div data-sal="slide-up" data-sal-duration="400" data-sal-delay="300" data-sal-easing="ease">
          <h1>Sébastien Francisque.</h1>
        </div>

        <div data-sal="flip-down" data-sal-duration="500" data-sal-delay="500" data-sal-easing="ease">
          <h2> Je fais du dévelopment web.</h2>
        </div>

        <Button as={AnchorLink} href="#contact">
          Me joindre
        </Button>
      </Details>
      <div data-sal="flip-left" data-sal-duration="600" data-sal-delay="600" data-sal-easing="ease">
        <Thumbnail>
          <img src={dev} alt="Sébastien Francisque" />
        </Thumbnail>
      </div>
    </IntroWrapper>
  </Wrapper>
);
