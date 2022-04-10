// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import styled from "styled-components";
import Image from "next/image";
import { projectData } from "../utils/projectData";
import GitHub from "../assets/github";
import ProjetsMobile from "./ProjetsMobile";
import { isMobile } from "react-device-detect";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

const ImageProject = styled.div`
  margin-top: 4rem;
  width: 100%;
  div,
  span {
    position: unset !important;
  }

  .image {
    object-fit: contain;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    image-rendering: pixelated;
  }
`;

const Slide = styled(motion.div)`
  height: 1100px;
  padding: 0 2rem;
  padding-bottom: 1rem;
  border-left: 1px solid gray;
  z-index: -99999;
  display: block;

  @media (min-width: 2000px) {
    height: 2200px;
  }

  @media (max-width: 1999px) {
    height: 1400px;
  }

  @media (max-width: 1600px) {
    height: 1100px;
  }

  @media (max-width: 960px) {
  }
`;

const MultiSlide = styled(motion.div)`
  z-index: -99999;
`;

const Titre = styled(motion.div)`
  padding-top: 10rem;
  margin-bottom: 2rem;
  font-size: 2.4rem;
  text-align: left;
  color: gray;

  @media (min-width: 2000px) {
    font-size: 4.4rem;
    padding-top: 20rem;
  }
`;

const Cta = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled(motion.div)`
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1rem;
  line-height: 1.5;
  text-align: left;
  color: gray;

  .techs {
    margin-top: 10px;
    font-size: 14px;

    ul {
      margin-left: -34px;

      li {
        /*    text-decoration:underline; */
        margin-left: 5px;
      }
    }
  }
`;

const Projets = () => {
  const [_isMobile, setMobile] = useState();
  const [width, setWidth] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }
  }, [width]);

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  SwiperCore.use([Autoplay]);

  const stagger = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <>
      <div hidden={width < 900}>
        <Swiper
          preventClicks={false}
          preventClicksPropagation={false}
          centeredSlides={true}
          navigation={true}
          loop={true}
          allowTouchMove={false}
          modules={[Navigation, Mousewheel]}
          spaceBetween={0}
          slidesPerView={2}
          mousewheel={false}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
          pagination={{ clickable: true }}
        >
          {projectData.map((data, i) => {
            return (
              <SwiperSlide key={i}>
                <Slide
                  variants={stagger}
                  initial="hidden"
                  animate="visible"
                  id="slider"
                >
                  <Titre variants={item}>{data.nom}</Titre>

                  <Description variants={item}>
                    {data.desc && data.desc}
                    {data.designer && (
                      <div style={{ margin: "20px 0", fontStyle: "italic" }}>
                        Design:{data.designer}
                      </div>
                    )}
                    <div className="techs">
                      <ul>
                        {data.stack &&
                          Array.from(data.stack).map((s, i) => {
                            return <li key={i}>{s}</li>;
                          })}
                      </ul>
                    </div>
                    <Cta>
                      {data.github ? (
                        <a
                          href={data.github}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          <GitHub />
                        </a>
                      ) : (
                        <div></div>
                      )}
                      <div>
                        {data.demo && (
                          <>
                            demo
                            <br />
                            u:{data.demo.user}
                            <br />
                            p:{data.demo.password}
                          </>
                        )}
                      </div>
                      <div>
                        <a
                          style={{ display: "block", padding: 10 }}
                          href={data.url && data.url}
                          rel="noopener noreferrer"
                          target="_blank"
                        >
                          {data.urlName && data.urlName}
                        </a>
                      </div>
                    </Cta>
                  </Description>

                  {!data.imgArr && (
                    <ImageProject variants={item}>
                      {data.img && (
                        <Image
                          className="image"
                          src={data.img}
                          layout="fill"
                          alt="Sébastien Francisque"
                        />
                      )}
                    </ImageProject>
                  )}
                  {data.imgArr && (
                    <Swiper
                      pagination={{
                        clickable: true,
                      }}
                      modules={[Pagination]}
                      autoplay
                      spaceBetween={0}
                      slidesPerView={1}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      {data.imgArr &&
                        data.imgArr.map((img, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <MultiSlide>
                                <ImageProject variants={item}>
                                  <Image
                                    className="image"
                                    src={img}
                                    layout="fill"
                                    alt="Sébastien Francisque"
                                  />
                                </ImageProject>
                              </MultiSlide>
                            </SwiperSlide>
                          );
                        })}
                    </Swiper>
                  )}
                </Slide>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      <div hidden={width > 899}>
        <ProjetsMobile />
      </div>
    </>
  );
};

export default Projets;
