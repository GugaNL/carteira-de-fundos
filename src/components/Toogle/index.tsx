import * as React from "react"
//Components
import { Container, ToogleLabel, ToogleTheme } from "./styles"

const Toogle: React.FC = () => (
  <Container>
    <ToogleLabel>Dark</ToogleLabel>
    <ToogleTheme
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => {}}
    />
    <ToogleLabel>Light</ToogleLabel>
  </Container>
)

export default Toogle
