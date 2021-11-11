import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'
import Fonts from '../components/fonts'
import theme from '../lib/theme'
import '../styles/globals.css'

const Website = ({ Component, pageprops, router }) => {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout router={router}>
        <Component {...pageprops} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
