import styled from "styled-components"
import Switch, { ReactSwitchProps } from "react-switch"

export const Container = styled.div`
  display: flex;
  align-items: center;
`

export const ToogleLabel = styled.span`
  color: ${(props) => props.theme.colors.white};
`

export const ToogleTheme = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.info,
    offColor: theme.colors.warning,
    height: 20,
  })
)<ReactSwitchProps>`
  margin: 0 8px;
`
