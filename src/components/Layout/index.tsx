import * as React from "react"
import { Grid } from "./styles"
//Components
import MainHeader from "../MainHeader"
import SideMenu from "../SideMenu"
import Content from "../Content"

const Layout: React.FC = ({ children }) => (
  <Grid>
    <MainHeader />
    <SideMenu />
    <Content>{children}</Content>
  </Grid>
)

export default Layout
