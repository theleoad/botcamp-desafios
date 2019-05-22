import styled from "styled-components";

const InputMessage = styled.input.attrs({
  type: 'text',
  name: 'message',
  placeholder: 'Diz aí...'
})`
  box-shadow: 0 -2px 8px 0 rgba(0, 0, 0, 0.1);
  color: rgba(0, 0, 0, 0.33);
  font-size: 24px;
  padding: 13px 16px;
  width: 100%;
  position: absolute; /*temporário*/
  bottom: 17px; /*temporário*/
}
`;

export default InputMessage;