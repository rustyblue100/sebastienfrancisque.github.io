import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";
import Header from "../components/Header";
import { motion } from "framer-motion";
import Projets from "../components/Projets";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 0 40px;

  @media (max-width: 960px) {
    padding: 0 40px;
  }
`;

const Intro = styled.div`
  display: grid;
  grid-row-gap: 4em;
  grid-template-columns: repeat(2, 1fr);
  line-height: 2.4rem;
  justify-content: space-between;

  @media (max-width: 660px) {
    grid-column-gap: 1em;
    grid-row-gap: 1em;
    grid-template-columns: minmax(0, 1fr) 160px;

    ul {
      line-height: 2;
      margin-bottom: 80px;
    }
  }
`;

const Quote = styled.h3`
  text-align: left;
  font-size: 6rem;
  line-height: 0.45;

  @media (max-width: 900px) {
    font-size: 4rem;
  }

  @media (max-width: 660px) {
    font-size: 1.8rem;
  }

  @media (max-width: 400px) {
    font-size: 1.8rem;
  }
`;

const Quote2 = styled.div`
  font-size: 1.4rem;
  justify-self: start;
  text-align: left;
  color: gray;

  @media (min-width: 2000px) {
    font-size: 3.4rem;
    line-height: 2;
  }

  @media (max-width: 768px) {
    font-size: 1.2rem;
    margin-bottom: 60px;
  }

  @media (max-width: 660px) {
    font-size: 1rem;
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

  @media (max-width: 660px) {
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

const Picture = styled(motion.div)`
  margin-top: -24px;
  justify-self: end;
`;

const ProjetWrapper = styled(motion.div)`
  @media (max-width: 660px) {
    padding: 0 20px;
  }
`;

const Qualification = styled.div`
  display: grid;
  grid-row-gap: 4em;
  grid-template-columns: repeat(2, 1fr);
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
  padding: 40px 20px;
`;

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: 20 },
};

const spot = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -200 },
};

const stagger = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.5 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};
export default function Home() {
  const [width, setWidth] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }

    function handleResize() {
      return window.location.reload();
    }

    if (width > 800) {
      return window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);
  const isMobile = width < 768; //Add the width you want to check for here (now 768px)

  const coordinates = () => {
    switch (true) {
      case width > 902:
        return {
          y: [0, -20, -40],
          x: [100, 120, 100],
        };
      case width > 600 && width < 900:
        return {
          y: [0, -20, -40],
          x: [53, 70, 53],
        };
      case width > 476 && width < 599:
        return {
          y: [0, -7, -15],
          x: [44, 40, 44],
        };
      case width < 475:
        return {
          y: [0, -10, -20],
          x: [35, 50, 35],
        };
      default:
    }
  };

  return (
    <>
      <Head>
        <title>Sébastien Francisque</title>
        <meta name="description" content="Développeur web" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Header />
        <main>
          <Intro>
            <Quote>
              Développeur
              <br /> we
              <Point
                as={motion.div}
                animate={coordinates()}
                transition={{
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                  repeatDelay: 1,
                  duration: 2,
                }}
              >
                b
              </Point>
            </Quote>
            <SecondMenu>
              <a href="#propos">À propos</a>
              <a href="#projets">Projets</a>
              <a href="mailto:sebastien@folospot.com">Écrivez moi</a>
              <a href="tel:15147584967">
                <nowrap>514.758.4967</nowrap>
              </a>
            </SecondMenu>

            <Quote2 id="propos">
              Bonjour!
              <br /> Je suis un développeur web basé à Montréal avec plus de
              trois années d&apos;expériences dans la conception de sites et
              d&apos;applications web. Je cultive une forte curiosité en matière
              des dernières tendances du web et éprouve un réel plaisir à
              relever de nouveaux défis
            </Quote2>
            <Picture
              initial="hidden"
              animate="visible"
              variants={variants}
              transition={{ duration: 1.4 }}
            >
              <Image
                src="/seb3.jpeg"
                width={width < 2000 ? 400 : 800}
                height={width < 2000 ? 600 : 1600}
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
            layout="responsive"
            alt="Sébastien Francisque"
          />

          <Stack>
            <ul
              as={motion.ul}
              variants={stagger}
              initial="hidden"
              animate="visible"
            >
              <motion.li variants={item}>React</motion.li>
              <motion.li variants={item}>NextJS</motion.li>
              <motion.li variants={item}>Gatsby</motion.li>
              <motion.li variants={item}>NodeJS</motion.li>
              <motion.li variants={item}>SASS</motion.li>
              <motion.li variants={item}>Styled components</motion.li>
              <motion.li variants={item}>Airtable</motion.li>
              <motion.li variants={item}>Cloudinary</motion.li>
              <motion.li variants={item}>Mui</motion.li>
              <motion.li variants={item}>Bootstrap</motion.li>
              <motion.li variants={item}>Framer motion</motion.li>
              <motion.li variants={item}>PusherJS</motion.li>
              <motion.li variants={item}>Git</motion.li>
              <motion.li variants={item}>MongoDB</motion.li>
              <motion.li variants={item}>Firebase</motion.li>
              <motion.li variants={item}>Prismic</motion.li>
              <motion.li variants={item}>Sanity</motion.li>
              <motion.li variants={item}>Wordpress</motion.li>
              <motion.li variants={item}>PHP</motion.li>
            </ul>
          </Stack>
        </Qualification>
      </section>
      <section
        style={{
          position: "relative",
          borderTop: width > 800 && "1px solid gray",
        }}
      >
        <ProjetWrapper>
          <Projets />
        </ProjetWrapper>
      </section>

      <Footer as={Container}>
        <div>
          <div className="Container-sc-1vlfcxf-0 eYAwIj styles__Flex-sc-1qtafnq-1 doFbIk">
            <div className="styles__Details-sc-1qtafnq-3 cNHyXc">
              <h2> sebastien@folospot.com {width > 600 && "|"} 514.758.4967</h2>
              © Tous droits réservés.{" "}
            </div>
          </div>
        </div>
      </Footer>
    </>
  );
}
