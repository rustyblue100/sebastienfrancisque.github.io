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
            J'ai plus de deux années d'expérience dans le codage de sites web personnalisés utilisant HTML, CSS, PHP et
            Javascript, tout en cultivant une forte curiosité en matière des dernières tendances du web.
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
