import * as React from "react"
import { Container, Tag } from "./styles"

interface IHistoryFinacialCardProps {
  tagColor: string
  title: string
  subTitle: string
  amount: string
}

const HistoryFinacialCard: React.FC<IHistoryFinacialCardProps> = ({
  tagColor,
  title,
  subTitle,
  amount,
}) => (
  <Container>
    <Tag color={tagColor} />
    <div>
      <span>{title}</span>
      <small>{subTitle}</small>
    </div>
    <h3>{amount}</h3>
  </Container>
)

export default HistoryFinacialCard
