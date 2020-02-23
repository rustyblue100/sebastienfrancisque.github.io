import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import Fade from 'react-reveal/Fade';
import worker from '../../../assets/thumbnail/worker.png';
import { Wrapper, SkillsWrapper, Details, Thumbnail, Box, Square } from './styles';

export const Skills = () => (
  <Wrapper id="about">
    <SkillsWrapper as={Container}>
      <Fade>
        <Details>
          <h1>À Propos</h1>
          <Box>
            {' '}
            <p>
              Hello! I'm Brittany, a software engineer based in Boston, MA who enjoys building things that live on the
              internet. I develop exceptional websites and web apps that provide intuitive, pixel-perfect user
              interfaces with efficient and modern backends.
              <br />
              <br />
              Shortly after graduating from Northeastern University, I joined the engineering team at Upstatement where
              I work on a wide variety of interesting and meaningful projects on a daily basis. Here are a few
              technologies I've been working with recently:
            </p>
            <Thumbnail>
              <img src={worker} alt="travail web" />
            </Thumbnail>
            <ul>
              <li>Wordpress</li>
              <li>ACF</li>
              <li>HTML & (S)CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript (ES6+)</li>
              <li>React</li>
              <li>Gatsby</li>
              <li>Node.js</li>
              <li>Git</li>
            </ul>
          </Box>

          <br />
          <br />
          <Button as={AnchorLink} href="#contact">
            Hire me
          </Button>
        </Details>
      </Fade>
    </SkillsWrapper>
  </Wrapper>
);
