import * as React from "react"
import { Container, Title, Controllers } from "./styles"
//Components

const ContentHeader: React.FC = () => (
  <Container>
    <Title>
      <h3>Content header</h3>
    </Title>
    <Controllers>
      <button type="button">Botão A</button>
      <button type="button">Botão B</button>
    </Controllers>
  </Container>
)

export default ContentHeader
