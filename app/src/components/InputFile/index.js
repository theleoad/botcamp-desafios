import styled from "styled-components";

const InputFile = styled.input.attrs({
    type: "file",
    id: "upload"
})`
    opacity: 0;
    position: absolute;
    width: 1px;
    height: 1px;
`;

export default InputFile;