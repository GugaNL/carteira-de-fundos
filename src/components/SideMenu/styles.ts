import styled from "styled-components"

export const Container = styled.div`
  grid-area: SM;
  background-color: ${(props) => props.theme.colors.secondary};
  padding: 16px 16px;
  border-right: 1px solid ${(props) => props.theme.colors.gray};
`
export const Header = styled.div`
  display: flex;
  align-items: center;
`

export const LogoImg = styled.img`
  height: 30px;
  width: 30px;
`

export const Title = styled.h3`
  color: ${(props) => props.theme.colors.white};
  margin-left: 8px;
`

export const MenuContainer = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
`

export const MenuItemLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: ${(props) => props.theme.colors.info};
  margin: 8px 0;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  > svg {
    font-size: 18px;
    margin-right: 8px;
  }
`
