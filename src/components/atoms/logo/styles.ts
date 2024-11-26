import styled from "styled-components";
import _Link from "next/link";
import { LazyImage } from "../lazy-image";
import { mediaMaxWidth } from "@/utils/media-query";

export const Link = styled(_Link)``;

export const Img = styled(LazyImage)`
  width: 100%;
  height: 7.2rem;
  object-fit: contain;

  ${mediaMaxWidth("mobile")`
    height: 6.2rem;
  `}
`;
