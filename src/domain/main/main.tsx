import { css } from "@emotion/react";
import Image from "next/image";
import { useRef, useEffect } from "react";
import itddaa from "@/assets/itddaa.svg";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const Main = () => {
  gsap.registerPlugin(ScrollTrigger);

  const imgRef = useRef(null);
  useEffect(() => {
    const el = imgRef.current;

    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          scrub: true,

          start: "top 90%",
          end: "bottom top",
          markers: false,
        },
      })
      .fromTo(
        el,
        {
          x: 2300,
          autoAlpha: 1,
        },
        {
          x: 0,
          autoAlpha: 1,
          duration: 3,
          stagger: 2,
        }
      );
  }, []);
  return (
    <div css={sx.roo}>
      <div css={sx.root}>
        <div>
          <div css={sx.top}></div>
        </div>
        <video
          css={sx.video}
          src={"assets/main_video.mp4"}
          autoPlay
          muted
          loop
        />
        <Image
          ref={imgRef}
          src={itddaa}
          alt="itddaa"
          width={1000}
          height={400}
        />

        <div css={sx.grad}></div>
      </div>
    </div>
  );
};

const sx = {
  roo: css``,
  root: css`
    position: relative;
    z-index: -1;
    width: 100%;
    height: 891px;
  `,
  top: css`
    width: 100%;
    height: 20vw;
    background-color: #fff;
    position: relative;
    z-index: 1;
  `,
  itddaa: css`
    font-size: 416px;
    color: white;
    position: relative;
    z-index: 10;
  `,
  video: css`
    width: 100%;
    height: 120%;
    position: absolute;
    top: -28%;
    left: 0;
  `,
  grad: css`
    width: 100%;
    height: 400px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 10%, #000 100%);
  `,
};
