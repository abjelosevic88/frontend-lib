import { styled } from '@stitches/react';

export const Wrapper = styled("div", {
  fontFamily: "'Nunito Sans', sans-serif"
})

export const ContentWrapper = styled("div", {
  position: "fixed",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "min(80%, 600px)",
  minHeight: "279px",
  maxHeight: "calc(100% - 96px)",
  borderRadius: "24px",
  background: "white",
  margin: "auto",
  boxShadow: "0px 4px 9px rgba(0, 0, 0, 0.16)",
  overflow: "hidden",
  display: "grid"
})

export const Backdrop = styled("div", {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  background: "rgba(0, 0, 0, 0.64)"
})