import * as React from "react"
import { Container } from "./styles"
//components
import Dashboard from "../pages/dashboard"
import List from "../pages/list"

const monthList = [
  { id: 1, value: "1", title: "Janeiro" },
  { id: 1, value: "2", title: "Fevereiro" },
  { id: 1, value: "3", title: "Março" },
]

const yearList = [
  { id: 1, value: "1", title: "2018" },
  { id: 1, value: "2", title: "2019" },
]

const Content: React.FC = () => (
  <Container>
    <List />
  </Container>
)

export default Content
