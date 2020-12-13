import * as React from "react"
import { Container } from "./styles"
//Components

interface ISelectInputs {
  options: {
    value: string | number
    title: string | number
  }[]
}

const SelectInput: React.FC<ISelectInputs> = ({ options }) => (
  <Container>
    <select>
      {options.map((item) => (
        <option value="a">{item.title}</option>
      ))}
    </select>
  </Container>
)

export default SelectInput
