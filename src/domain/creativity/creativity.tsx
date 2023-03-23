import { css } from "@emotion/react";
import Image from "next/image";
import galaxy from "@/assets/galaxy.png";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export const Creativity = () => {
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.to(imgRef.current, {
      scale: 2,
      scrollTrigger: {
        trigger: imgRef.current,
        start: "top 80%",
        end: "top 20%",
        scrub: true,
      },
    });
  });
  return (
    <div css={sx.root}>
      <div className="weMake" css={sx.weMake}>
        {"we make things\nfrom\ncreativity"}
      </div>
      <div css={sx.galaxy} ref={imgRef}>
        <Image src={galaxy} alt="galaxy" fill />
      </div>
    </div>
  );
};

const sx = {
  root: css`
    background-color: #000;
    white-space: pre-wrap;
  `,

  weMake: css`
    color: #fff;
    font-size: 100px;
    text-align: center;
  `,
  galaxy: css`
    position: relative;
    width: 15vw;
    height: 15vw;
    margin: 80px auto;
  `,
};
