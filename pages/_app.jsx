import Nav from '../src/components/nav'
import {ThemeProvider} from 'theme-ui'
import theme from '../theme'

export default function App({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Nav />
    <Component {...pageProps} />
  </ThemeProvider>
}