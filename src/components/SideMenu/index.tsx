import * as React from "react"
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md"
//Components
import {
  Container,
  Header,
  LogoImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles"
import logo from "../../assets/logo.svg"

const menuList = [
  { id: 1, title: "Dashboard", icon: <MdDashboard /> },
  { id: 1, title: "Entradas", icon: <MdArrowDownward /> },
  { id: 1, title: "Saídas", icon: <MdArrowUpward /> },
  { id: 1, title: "Sair", icon: <MdExitToApp /> },
]

const SideMenu: React.FC = () => {
  return (
    <Container>
      <Header>
        <LogoImg src={logo} alt="My wallet logo" />
        <Title>Minha carteira</Title>
      </Header>

      <MenuContainer>
        {menuList.map((item) => (
          <MenuItemLink key={item.id} href="#">
            {item.icon}
            {item.title}
          </MenuItemLink>
        ))}
      </MenuContainer>
    </Container>
  )
}

export default SideMenu
