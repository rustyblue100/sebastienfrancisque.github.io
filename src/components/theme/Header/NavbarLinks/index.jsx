/* eslint-disable react/prop-types */
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Fade from 'react-reveal/Fade';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Fade duration={2000} delay={600}>
    <Wrapper desktop={desktop}>
      <AnchorLink href="#about">À propos</AnchorLink>
      <AnchorLink href="#projects">Projets</AnchorLink>
      <AnchorLink href="#contact">Me joindre</AnchorLink>
    </Wrapper>
  </Fade>
);

export default NavbarLinks;
