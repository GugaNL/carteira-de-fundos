import * as React from "react"
import GlobalStyle from "./styles/GlobalStyles"
import Layout from "./components/Layout"
//Theme
import { ThemeProvider } from "styled-components"
import Dark from "./styles/themes/Dark"
//Components
import Dashboard from "./components/pages/dashboard"

const App: React.FC = () => (
  <ThemeProvider theme={Dark}>
    <GlobalStyle />
    <Layout>
      <Dashboard />
    </Layout>
  </ThemeProvider>
)

export default App
