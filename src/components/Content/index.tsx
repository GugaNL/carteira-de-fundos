import * as React from "react"
import { Container } from "./styles"
//components
import ContentHeader from "../ContentHeader"

const Content: React.FC = ({ children }) => (
  <Container>
    <ContentHeader />
    {children}
  </Container>
)

export default Content
