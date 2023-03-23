import { Header } from "@/common/header/header";
import { css } from "@emotion/react";
import { Creativity } from "./creativity/creativity";
import { Main } from "./main/main";
import { WeMake } from "./weMake/weMake";

export const LandingView = () => {
  return (
    <div css={sx.root}>
      <Header />
      <Main />
      <Creativity />
      <WeMake />
    </div>
  );
};

const sx = {
  root: css``,
};
