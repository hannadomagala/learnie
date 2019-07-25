import styled from 'styled-components';

const Suggestions = styled.ul`
  margin: 0;
  margin-top: 5px;
  padding: 0;
  height: calc(100% - 25px);
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0px;
  }
`;

export default Suggestions;
