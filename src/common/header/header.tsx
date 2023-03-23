import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/logo.svg";
import { css } from "@emotion/react";

export const Header = () => {
  return (
    <div css={sx.root}>
      <Link href="">
        <div>
          <Image src={logo} alt="logo" width={210} height={45.67} />
        </div>
      </Link>
      <ul css={sx.menu}>
        <li>
          <Link href="" css={sx.list}>
            About
          </Link>
        </li>
        <li>
          <Link href="" css={sx.list}>
            Portfolio
          </Link>
        </li>
        <li>
          <Link href="" css={sx.list}>
            Story
          </Link>
        </li>
        <li>
          <Link href="" css={sx.list}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

const sx = {
  root: css`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 70px 40px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 55;
  `,
  menu: css`
    display: flex;
    flex-direction: column;
    flex-direction: column;
  `,
  list: css`
    color: black;
    font-weight: 900;
    font-size: 20px;
    font-family: GT Walsheim Pro;
  `,
};
