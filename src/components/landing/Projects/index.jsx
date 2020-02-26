/* eslint-disable no-console */
import React from 'react';
import { Container } from 'components/common';
import Reveal from 'react-reveal/Reveal';
import Fade from 'react-reveal/Fade';
import { Wrapper, Grid, Thumbnail, InfosProjects, NomProjet, Cta, Icon } from './styles';
import projects from './projets.json';

// import freeRun_thumbnail from "../../../assets/freerun.png"

export const Projects = () => {
  return (
    <Wrapper as={Container} id="projects">
      <div>
        <h2>Projets principaux</h2>
        {projects.map(node => (
          <Grid>
            <InfosProjects reverse={node.id % 2 && 'reverse'}>
              <NomProjet reverse={node.id % 2 && 'reverse'}>
                <a href={node.link} target="_blank" rel="noopener noreferrer">
                  {node.name}
                </a>
                <Cta reverse={node.id % 2 && 'reverse'}>
                  {node.GitHub && (
                    <Icon href={node.GitHub} target="_blank" rel="noopener noreferrer">
                      <img src="/icons/github.svg" alt="Github" />
                    </Icon>
                  )}

                  <Icon href={node.link} target="_blank" rel="noopener noreferrer">
                    <img src="/icons/live.svg" alt="Github" />
                  </Icon>
                </Cta>
              </NomProjet>

              <div>
                <p>{node.description}</p>
              </div>

              <ul reverse={node.id % 2 && 'reverse'}>
                {node.stack.map(s => (
                  <Fade left cascade collapse>
                    <li>{s}</li>
                  </Fade>
                ))}
              </ul>
            </InfosProjects>

            <Thumbnail reverse={node.id % 2 && 'reverse'}>
              <a href={node.link} target="_blank" rel="noopener noreferrer">
                {node.id % 2 ? (
                  <Fade delay={400}>
                    <img src={node.image} alt={node.name} />{' '}
                  </Fade>
                ) : (
                  <Fade delay={400}>
                    <img src={node.image} alt={node.name} />{' '}
                  </Fade>
                )}
              </a>
              <div style={{ marginTop: '-2rem', marginLeft: '2rem', textAlign: 'center', paddingBottom: '1rem' }}>
                {node.design && `Design: ${node.design}`}
              </div>
            </Thumbnail>
          </Grid>
        ))}
      </div>
    </Wrapper>
  );
};
