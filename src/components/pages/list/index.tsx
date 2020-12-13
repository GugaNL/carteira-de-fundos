import * as React from "react"
//Style
import { Container, ListContent, FiltersContent, FilterButton } from "./styles"
//Components
import ContentHeader from "../../ContentHeader"
import SelectInput from "../../SelectInput"
import HistoryFinancialCard from "../../HistoryFinancialCard"

const monthList = [
  { id: 1, value: 1, title: "Janeiro" },
  { id: 1, value: 2, title: "Fevereiro" },
  { id: 1, value: 3, title: "Março" },
]

const yearList = [
  { id: 1, value: 1, title: 2020 },
  { id: 2, value: 2, title: 2019 },
  { id: 3, value: 3, title: 2018 },
]

const financialList = [
  {
    id: 1,
    title: "Conta de Luz",
    type: "A",
    date: "01/12/2020",
    value: "R$ 120,00",
  },
  {
    id: 2,
    title: "Conta de Água",
    type: "B",
    date: "05/12/2020",
    value: "R$ 45,00",
  },
  {
    id: 3,
    title: "Assinatura Netflix",
    type: "A",
    date: "15/12/2020",
    value: "R$ 32,00",
  },
  {
    id: 4,
    title: "Consórcio Honda",
    type: "B",
    date: "08/12/2020",
    value: "R$ 850,00",
  },
  {
    id: 5,
    title: "Viagem fim de ano",
    type: "A",
    date: "30/12/2020",
    value: "R$ 600,00",
  },
  {
    id: 6,
    title: "Festa de aniversário",
    type: "B",
    date: "20/12/2020",
    value: "R$ 70,00",
  },
  {
    id: 7,
    title: "Confraternização família",
    type: "A",
    date: "10/12/2020",
    value: "R$ 45,00",
  },
  {
    id: 8,
    title: "Festa com amigos",
    type: "B",
    date: "13/12/2020",
    value: "R$ 60,00",
  },
  {
    id: 9,
    title: "Conta da Tim",
    type: "A",
    date: "10/12/2020",
    value: "R$ 70,00",
  },
  {
    id: 10,
    title: "Aluguel",
    type: "B",
    date: "10/12/2020",
    value: "R$ 900,00",
  },
  {
    id: 11,
    title: "IPTU",
    type: "A",
    date: "07/12/2020",
    value: "R$ 1.000,00",
  },
  {
    id: 12,
    title: "Seguro do carro",
    type: "B",
    date: "21/12/2020",
    value: "R$ 400,00",
  },
]

const List: React.FC = () => (
  <Container>
    <ContentHeader title="Saídas" lineColor="green">
      <SelectInput options={monthList}></SelectInput>
      <SelectInput options={yearList}></SelectInput>
    </ContentHeader>

    <FiltersContent>
      <FilterButton colorFilter="#E44C4E">Recorrentes</FilterButton>
      <FilterButton colorFilter="blue">Eventuais</FilterButton>
    </FiltersContent>

    <ListContent>
      {financialList.map((item) => (
        <HistoryFinancialCard
          tagColor={item.type == "A" ? "#E44C4E" : "blue"}
          title={item.title}
          subTitle={item.date}
          amount={item.value}
        />
      ))}
    </ListContent>
  </Container>
)

export default List
