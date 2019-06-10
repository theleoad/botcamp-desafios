import styled from "styled-components";
import clipIcon from "../../img/botcamp-clip-icon.svg";

export const Label = styled.label.attrs({
    htmlFor: "upload"
})`
    position: absolute;
    bottom: 3px;
    right: 61px;
`;

export const ClipImage = styled.img.attrs({
    src: clipIcon
})``;