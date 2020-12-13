import styled from "styled-components"

/**
 * Layout
 * MH = MainHeader
 * SM = SideMenu
 * CT = Content
 */

export const Grid = styled.div`
  display: grid;
  grid-template-columns: 250px auto; //Primeira coluna ocupa 250px e a segunda ocupa todo o resto
  grid-template-rows: 70px auto;
  grid-template-areas:
    "SM MH"
    "SM CT";
  height: 100vh; //View height (100% da altura do viewport)
`
