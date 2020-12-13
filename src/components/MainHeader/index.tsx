import * as React from "react"
import { Container, Profile, Welcome, UserName } from "./styles"
//Components
import Toogle from "../Toogle"

const MainHeader: React.FC = () => (
  <Container>
    <Toogle />

    <Profile>
      <Welcome>Olá</Welcome>
      <UserName>Gustavo Nunes</UserName>
    </Profile>
  </Container>
)

export default MainHeader
