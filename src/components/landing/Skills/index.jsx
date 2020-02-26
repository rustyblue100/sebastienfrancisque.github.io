import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import Fade from 'react-reveal/Fade';
import worker from '../../../assets/thumbnail/worker.png';
import { Wrapper, Details, Thumbnail, Box, Square } from './styles';

export const Skills = () => (
  <Wrapper as={Container} id="about">
    <Fade>
      <Details>
        <h1>À Propos</h1>
        <Box>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim iste amet quaerat recusandae doloremque a
            dolor nulla odio, labore laudantium porro atque voluptates nam similique beatae tenetur nemo optio dolores?
            <br />
            <br />
            Voici quelques technologies avec lesquelles j'ai travaillé récemment :
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
          Me joindre
        </Button>
      </Details>
    </Fade>
  </Wrapper>
);
