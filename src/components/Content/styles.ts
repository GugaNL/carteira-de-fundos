import styled from "styled-components"

export const Container = styled.div`
  grid-area: CT;
  color: ${(props) => props.theme.colors.white};
  background-color: ${(props) => props.theme.colors.primary};
  padding: 16px 16px;

  height: calc(
    100vh - 70px
  ); //Coloca a altura do content total do viewport - altura do MainHeader
  overflow-y: scroll; //Faz com que o que tiver a mais do height fique com scroll

  ::-webkit-scrollbar {
    width: 10px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.terciary};
    border-radius: 4px;
  }
`
