import React from "react";
import {Wrapper, SuperWrapper} from "./styles";

const HeaderWrapper = (props) => (
  <SuperWrapper>
    <Wrapper>{props.children}</Wrapper>
  </SuperWrapper>
);

export default HeaderWrapper;