import styled from "styled-components"

interface ITagProps {
  color: string
}

export const Container = styled.li`
  position: relative; //Para por o position absolute na Tag
  background-color: ${(props) => props.theme.colors.terciary};
  list-style: none;
  border-radius: 4px;
  margin: 8px 0;
  padding: 16px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: all 0.3s;

  &:hover {
    opacity: 0.7;
    transform: translateX(10px);
  }

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding-left: 8px;
  }
`

export const Tag = styled.div<ITagProps>`
  position: absolute;
  left: 0;
  width: 8px;
  height: 60%;
  background-color: ${(props) => props.color};
`
