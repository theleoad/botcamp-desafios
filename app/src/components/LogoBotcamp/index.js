import styled from "styled-components";
import logoBotcamp from "../../img/logo-botcamp.png";

const LogoBotcamp = styled.img.attrs({
  src: logoBotcamp,
  alt: "Logo Botcamp"
})`
  width: ${props => (props.small ? "200px" : "248px")};
`;

export default LogoBotcamp;
