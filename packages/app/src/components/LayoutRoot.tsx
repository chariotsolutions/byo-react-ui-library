import { makeRem } from "@internal/components";
import styled from "styled-components";

export const LayoutRoot = styled.div`
  display: grid;
  height: 100%;
  width: 100%;
  grid-template-areas:
    "navbar appbar"
    "navbar main";
  grid-template-columns: ${makeRem(200)} 1fr;
  grid-template-rows: ${makeRem(80)} 1fr;
`;
