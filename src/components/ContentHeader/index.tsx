import * as React from "react"
import { Container, Title, Controllers } from "./styles"
//Components

interface IContentHeaderProps {
  title: string
  lineColor: string
  children: React.ReactNode
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => (
  <Container>
    <Title>
      <h3>{title}</h3>
    </Title>
    <Controllers>{children}</Controllers>
  </Container>
)

export default ContentHeader
