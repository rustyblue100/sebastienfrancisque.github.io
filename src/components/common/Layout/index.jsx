/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Footer } from 'components/theme';
import styled from 'styled-components';
import Fade from 'react-reveal/Fade';
import backgroundImg from '../../../assets/thumbnail/background7.jpg';
import { Global } from './styles';
import './fonts.css';
import { COLOR1, COLOR2, COLOR3, BLACK, WHITE, RADIUS, BLUR } from './variables';

const GlobalWrapper = styled.div`
  background-image: url(${backgroundImg});
  background-repeat: no-repeat;
  background-size: cover;
  position: fixed;
  overflow: scroll;
  height: 100vh;
  width: 100%;
`;

const GitHub = styled.div`
  font-size: 1.2em;
  position: fixed;
  bottom: 20%;
  right: 3.5rem;
  z-index: 99999;

  width: 2.4rem;
`;

export const Layout = ({ children }) => {
  useEffect(() => {
    const pointers = document.querySelectorAll('.pointer');
    const pointer = document.querySelector('.pointer');

    document.addEventListener('mousemove', e => {
      pointers.forEach(p => p.setAttribute('style', `top: ${e.pageY - 0}px; left: ${e.pageX - 0}px;`));
    });

    document.addEventListener('click', e => {
      pointer.classList.add('expand');

      setTimeout(() => {
        pointer.classList.remove('expand');
      }, 500);
    });
  });

  return (
    <>
      <Global />

      <div className="pointer pointer1"></div>
      <div className="pointer pointer2"></div>
      <div className="pointer pointer3"></div>
      <div className="pointer pointer4"></div>
      <div className="pointer pointer5"></div>

      <span
        style={{
          fontSize: '1.2em',
          position: 'fixed',
          top: '50%',
          right: '-7rem',
          zIndex: 99999,
          color: 'white',
          transform: 'rotate(90deg)',
        }}
      >
        <a
          style={{
            color: 'white',
            letterSpacing: '2px',
          }}
          href="mailto:sebastienfrancisque@gmail.com"
        >
          <Fade duration={1000} left>
            sebastienfrancisque@gmail.com
          </Fade>
        </a>
      </span>

      <GitHub>
        <a href="https://github.com/rustyblue100" alt="sebastien git hub" target="_blank" rel="noopener noreferrer">
          <Fade duration={1000} left>
            <img src="/icons/github.svg" alt="Github" />{' '}
          </Fade>
        </a>
      </GitHub>

      <GlobalWrapper>{children}</GlobalWrapper>
      <Footer />
    </>
  );
};
