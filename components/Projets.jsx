// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import styled from "styled-components";
import Image from "next/image";
import { projectData } from "../utils/projectData";
import GitHub from "../assets/github";
import ProjetsMobile from "./ProjetsMobile";
import { isMobile } from "react-device-detect";
import { useEffect, useLayoutEffect, useState } from "react";

import SwiperCore, { Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

// Import Swiper styles
import "swiper/css";

const ImageProject = styled.div`
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
  }
`;

const Slide = styled.div`
  padding: 0 2rem;
  border-left: 1px solid gray;
  z-index: -99999;
`;

const MultiSlide = styled.div`
  z-index: -99999;
`;

const Titre = styled.div`
  padding-top: 9.5rem;
  margin-bottom: 1rem;
  font-size: 2.4rem;
  text-align: left;
  color: gray;
`;

const Cta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Description = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 0.8rem;
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

  useLayoutEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth);

      window.addEventListener("resize", () => {
        setWidth(window.innerWidth);
      });
    }

    function handleResize() {
      return window.location.reload();
    }

    if (width) {
      return window.addEventListener("resize", handleResize);
    }

    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  console.log(width);

  useEffect(() => {
    setMobile(isMobile);
  }, [setMobile]);
  SwiperCore.use([Autoplay]);
  return (
    <>
      <div hidden={_isMobile}>
        <Swiper
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
                <Slide>
                  <Titre>{data.nom}</Titre>
                  <Description>
                    Conception de site Wordpress sur mesure utilisant
                    Underscores avec zone administrative utilisant Advanced
                    Custom Fields.
                    <div className="techs">
                      <ul>
                        {data.stack &&
                          Array.from(data.stack).map((s, i) => {
                            return <li key={i}>{s}</li>;
                          })}
                      </ul>
                    </div>
                    <Cta>
                      <a
                        href={data.url && data.url}
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ width: "10%" }}
                      >
                        <GitHub />
                      </a>

                      <a
                        href={data.url && data.url}
                        rel="noopener noreferrer"
                        target="_blank"
                      >
                        {data.urlName && data.urlName}
                      </a>
                    </Cta>
                  </Description>

                  {!data.imgArr && (
                    <ImageProject>
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
                                <ImageProject>
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
      <div hidden={!_isMobile}>
        <ProjetsMobile />{" "}
      </div>
    </>
  );
};

export default Projets;
