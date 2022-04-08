import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Projets from "../components/Projets";

const Container = styled.div`
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
  text-align: center;
  margin: 0 5rem;
`;

const Intro = styled.div`
  display: grid;
  grid-row-gap: 4em;
  grid-template-columns: 1fr 1fr;
  line-height: 2.4rem;
  justify-content: space-between;

  @media (max-width: 600px) {
    grid-column-gap: 2em;
  }
`;

const Quote = styled.h3`
  text-align: left;
  font-size: 6rem;
  line-height: 2.4rem;

  @media (max-width: 768px) {
    font-size: 4rem;
  }

  @media (max-width: 600px) {
    font-size: 2.6rem;
  }

  @media (max-width: 400px) {
    font-size: 2rem;
  }
`;

const Quote2 = styled.div`
  font-size: 1.4rem;
  justify-self: start;
  text-align: left;
  color: gray;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }

  @media (max-width: 600px) {
    line-height: 1.5;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const Stack = styled.div`
  font-size: 1.4rem;
  justify-self: start;
  text-align: left;
  color: #656262;
  line-height: 2rem;
  background-color: #cbbfff;
  width: 100%;
  height: 112%;
  z-index: 999;

  @media (max-width: 768px) {
    font-size: 1rem;
  }

  @media (max-width: 600px) {
    font-size: 0.8rem;
    line-height: 1.5;
  }

  @media (max-width: 400px) {
    font-size: 0.7rem;
  }
`;

const SecondMenu = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Point = styled.span``;

const Picture = styled.div`
  justify-self: end;
`;

const Qualification = styled.div`
  display: grid;
  grid-row-gap: 4em;
  grid-template-columns: 1fr 1fr;
  line-height: 2.4rem;
  justify-content: space-between;
  align-items: top;

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
  }
`;
const Footer = styled.div`
  border-top: 1px solid gray;
  padding: 40px 10px;
`;

const stagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};
export default function Home() {
  return (
    <>
      <Head>
        <title> Sébastien Francisque</title>
        <meta name="description" content="Développeur web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />

        <main>
          <Intro>
            <Quote>
              {" "}
              Dévelopeur web<Point>.</Point>
            </Quote>
            <SecondMenu>
              <a href="mailto:lacouleurlavie@orange.fr">Écrivez moi</a>
              <a href="tel:+33680233479">Appelez moi</a>
              <a href="https://www.facebook.com/jeanne.artiste.peintre">
                Facebook
              </a>
              <a href="https://www.instagram.com/jeanneartistepeintre">
                Instagram
              </a>
            </SecondMenu>

            <Quote2>
              Bonjour!
              <br /> Je suis un développeur web basé à Montréal avec plus de
              trois années d&apos;expériences dans la conception de sites et
              d&apos;applications web. Je cultive une forte curiosité en matière
              des dernières tendances du web et éprouve un réel plaisir à
              relever de nouveaux défis
            </Quote2>
            <Picture>
              <Image
                src="/seb2.jpeg"
                width={400}
                height={600}
                objectFit="cover"
                alt="Sébastien Francisque"
              />
            </Picture>
          </Intro>
        </main>
      </Container>

      <section>
        <Qualification>
          <Image
            src="/14105_generated.jpg"
            width={700}
            height={700}
            alt="Sébastien Francisque"
          />

          <Stack>
            <motion.ul variants={stagger} initial="hidden" animate="visible">
              <li>React</li>
              <li>Next.js</li>
              <li>Gatsby</li>
              <li>SASS</li>
              <li>Styled components</li>
              <li>Airtable</li>
              <li>Cloudinary</li>
              <li>Mui</li>
              <li>Bootstrap</li>
              <li>Framer motion</li>
              <li>Pusher-js</li>
              <li>Git</li>
              <li>MongoDB</li>
              <li>Firebase</li>
              <li>Prismic</li>
              <li>Sanity</li>
              <li>Wordpress</li>
              <li>PHP</li>
            </motion.ul>
          </Stack>
        </Qualification>
      </section>
      <section
        style={{
          position: "relative",
          borderTop: "1px solid gray",
        }}
      >
        <div style={{ width: "100vw" }}></div>
        <Projets />
      </section>

      <Footer>
        <div>
          <div className="Container-sc-1vlfcxf-0 eYAwIj styles__Flex-sc-1qtafnq-1 doFbIk">
            <div className="styles__Details-sc-1qtafnq-3 cNHyXc">
              <h2>Sébastien Francisque</h2>© Tous droits réservés.{" "}
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
