/* eslint-disable react/prop-types */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <div data-sal="fade" data-sal-duration="2000" data-sal-delay="200" data-sal-easing="ease">
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">À propos</AnchorLink>
      <AnchorLink href="#projects">Projets</AnchorLink>
      <AnchorLink href="#contact">Me joindre</AnchorLink>
    </Wrapper>
  </div>
);

export default NavbarLinks;
