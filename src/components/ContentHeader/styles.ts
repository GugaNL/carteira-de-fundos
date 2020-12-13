import styled from "styled-components"

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.div`
  h3 {
    color: ${(props) => props.theme.colors.white};

    &::after {
      content: "";
      display: block; //Com display block se consegue usar as propriedades de altura e largura de texto
      width: 50px;
      border-bottom: 10px solid ${(props) => props.theme.colors.info};
      margin-top: 2px;
    }
  }
`

export const Controllers = styled.div`
  display: flex;
`
