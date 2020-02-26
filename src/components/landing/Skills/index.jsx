import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { Container, Button } from 'components/common';
import worker from '../../../assets/thumbnail/worker.png';
import { Wrapper, Details, Thumbnail, Box, Square } from './styles';

export const Skills = () => (
  <Wrapper as={Container} id="about">
    <Details>
      <h1>À Propos</h1>
      <div data-sal="fade" data-sal-duration="500" data-sal-easing="ease">
        <Box>
          <div>
            <p>
              Bonjour! Je suis un développeur web basé à Montréal avec plus de deux années d'expériences dans la
              conception de sites web personnalisés utilisant HTML, CSS, PHP et Javascript. Je cultive une forte
              curiosité en matière des dernières tendances du web et éprouve un réel plaisir à relever de nouveaux défis
              <br />
              <br />
              Voici quelques technologies avec lesquelles j'ai travaillé récemment :
            </p>
            <ul>
              <li>Wordpress</li>
              <li>ACF</li>
              <li>HTML & (S)CSS</li>
              <li>Bootstrap</li>
              <li>JavaScript (ES6+)</li>
              <li>Gatsby</li>
              <li>React</li>
              <li>Git</li>
              <li>Linux</li>
            </ul>
          </div>

          <Thumbnail>
            <img src={worker} alt="travail web" />
          </Thumbnail>
        </Box>
      </div>

      <br />
      <br />
      <Button as={AnchorLink} href="#contact">
        Me joindre
      </Button>
    </Details>
  </Wrapper>
);
