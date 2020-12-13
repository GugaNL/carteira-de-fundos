import styled from "styled-components"

interface IFilterButtonProps {
  colorFilter: string
}

export const Container = styled.div``

export const ListContent = styled.div`
  margin-top: 32px;
`

export const FiltersContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const FilterButton = styled.button<IFilterButtonProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 18px;
  font-weight: 500;
  background: none;
  color: ${(props) => props.theme.colors.white};
  margin: 0 16px;

  transition: opacity 0.3s;

  &:hover {
    opacity: 0.7;
  }

  &::after {
    content: "";
    display: block;
    height: 10px;
    width: 50px;
    border-bottom: 10px solid ${(props) => props.colorFilter};
  }
`
