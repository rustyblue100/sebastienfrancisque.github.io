// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Mousewheel } from "swiper";
import styled from "styled-components";
import Image from "next/image";
import { projectData } from "../utils/projectData";
import GitHub from "../assets/github";

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
  margin: 0 auto;
  padding: 40px 40px;
`;

const MultiSlide = styled.div``;

const Titre = styled.div`
  padding-top: 2rem;
  margin-bottom: 1rem;
  font-size: 1.6rem;
  text-align: left;
  color: gray;
`;

const Cta = styled.div`
  display: block;
  padding: 30px 0;
  line-height: 3;
`;

const Description = styled.div`
  padding-top: 1rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
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
  SwiperCore.use([Autoplay]);

  return (
    <div>
      {projectData.map((data, i) => {
        return (
          <Slide key={i}>
            <Titre>{data.nom}</Titre>
            <Description>
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
                <a
                  href={data.github && data.github}
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ width: "10%" }}
                >
                  <GitHub />
                </a>

                <div style={{ lineHeight: 1, wordBreak: "break-all" }}>
                  <a
                    href={data.url && data.url}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {data.urlName && data.urlName}
                  </a>
                </div>

                {/*                 <div style={{ width: "100%" }}>
                  {data.demo && (
                    <>
                      demo
                      <br />
                      u:{data.demo.user}
                      <br />
                      p:{data.demo.password}
                    </>
                  )}
                </div> */}
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
                preventClicks={false}
                preventClicksPropagation={false}
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
        );
      })}
    </div>
  );
};

export default Projets;
