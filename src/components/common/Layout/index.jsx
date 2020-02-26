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
  background-attachment: fixed;
  background-size: 100% 100%;
  width: 100%;

  @media only screen and (max-width: 768px) {
  }
`;

const EmailAside = styled.div`
  font-size: 1.2em;
  position: fixed;
  top: 50%;
  right: -7rem;
  z-index: 99999;
  z-index: 99999;
  transform: rotate(90deg);

  @media (max-width: 680px) {
    display: none;
  }
`;

const GitHub = styled.div`
  font-size: 1.2em;
  position: fixed;
  bottom: 20%;
  right: 3.5rem;
  z-index: 99999;
  width: 2.4rem;

  @media (max-width: 680px) {
    display: none;
  }
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
      <EmailAside>
        <a
          style={{
            color: 'white',
            letterSpacing: '2px',
          }}
          href="mailto:sebastienfrancisque@gmail.com"
        >
          <div data-sal="slide-right" data-sal-duration="1400" data-sal-delay="200">
            sebastienfrancisque@gmail.com
          </div>
        </a>
      </EmailAside>
      <GitHub>
        <a href="https://github.com/rustyblue100" alt="sebastien git hub" target="_blank" rel="noopener noreferrer">
          <div data-sal="slide-right" data-sal-duration="1400" data-sal-delay="400">
            <img src="/icons/github.svg" alt="Github" />{' '}
          </div>
        </a>
      </GitHub>
      <GlobalWrapper>
        {children}

        <Footer />
      </GlobalWrapper>
    </>
  );
};
