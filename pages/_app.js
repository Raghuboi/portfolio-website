import { ChakraProvider } from '@chakra-ui/provider'
import Layout from '../components/layouts/main'

const Website = ({ Component, pageprops, router }) => {
  return (
    <ChakraProvider>
      <Layout router={router}>
        <Component {...pageprops} key={router.route} />
      </Layout>
    </ChakraProvider>
  )
}

export default Website
