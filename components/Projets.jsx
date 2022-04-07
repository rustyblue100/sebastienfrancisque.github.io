// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper";
import styled from "styled-components";
import Image from "next/image";

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
  padding-top: 7rem;
  margin-bottom: 1rem;
  font-size: 2.4rem;
  text-align: left;
  color: gray;
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
      list-style: none;
      display: flex;
      margin-left: -44px;

      li {
        /*    text-decoration:underline; */
        margin-left: 5px;
      }
    }
  }
`;

const projectData = [
  {
    nom: "Oria 2 brochure",
    desc: "lalal",
    stack: "word",
    img: "/oria2-b.jpeg",
  },

  {
    nom: "Tableau de signage",
    desc: "lalal",
    stack: "word",
    img: "/signage.jpeg",
    imgArr: ["/signage.jpeg", "/signage-m.jpeg", "/commande.png"],
  },
  {
    nom: "Free Run Artists",
    desc: "lalal",
    stack: "word",
    img: "/freerun.jpeg",
  },
  {
    nom: "Générateur de signatures de courriels",
    desc: "lalal",
    stack: "word",
    img: "/smartmockups_l1o8uqia.jpeg",
    imgArr: [
      "/smartmockups_l1o8uqia.jpeg",
      "/smartmockups_l1o8vzch.jpeg",
      "/smartmockups_l1o8uqia.jpeg",
    ],
  },
  {
    nom: "Papagroove",
    desc: "lalal",
    stack: "word",
    img: "/papagroove.jpeg",
  },

  {
    nom: "Grande Rencontre des Arts Médiatiques en Gaspésie",
    desc: "lalal",
    stack: "word",
    img: "/gaspesie.jpeg",
  },
  {
    nom: "ledukemtl",
    desc: "lalal",
    stack: "word",
    img: "/duke.jpeg",
  },
];

const Projets = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={3}
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
                  Conception de site Wordpress sur mesure utilisant Underscores
                  avec zone administrative utilisant Advanced Custom Fields.
                  <div className="techs">
                    <ul>
                      <li>Gatsby/</li>
                      <li>Prismic/</li>
                      <li>Framer-motion</li>
                    </ul>
                  </div>
                </Description>
                {!data.imgArr && (
                  <ImageProject>
                    {data.img && (
                      <Image
                        className="image"
                        src={data.img}
                        /*   width={400}
         
          objectFit="contain" */
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
                    spaceBetween={0}
                    slidesPerView={1}
                    onSlideChange={() => console.log("slide change")}
                    onSwiper={(swiper) => console.log(swiper)}
                  >
                    {projectData.map((data, i) => {
                      return (
                        data.imgArr &&
                        data.imgArr.map((img, i) => {
                          return (
                            <SwiperSlide key={i}>
                              <MultiSlide>
                                <ImageProject>
                                  <Image
                                    key={i}
                                    className="image"
                                    src={img}
                                    /*   width={400}
         
          objectFit="contain" */
                                    layout="fill"
                                    alt="Sébastien Francisque"
                                  />
                                </ImageProject>
                              </MultiSlide>
                            </SwiperSlide>
                          );
                        })
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
  );
};

export default Projets;
