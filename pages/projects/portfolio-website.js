import {
  Container,
  Badge,
  Link,
  List,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/projects'

const Project = () => (
  <Layout title="Snake">
    <Container className="noselect" pt={6}>
      <Title>Portfolio Website</Title>
      <P>
        My personal portfolio website: front-end built in React using Chakra-UI
        and everything server-side rendered using Next.js
      </P>
      <List ml={4} my={3}>
        <ListItem mb={3}>
          <span>
            <Badge variant="solid" colorScheme="gray">
              Next
            </Badge>{' '}
            <Badge variant="solid" colorScheme="blue">
              React
            </Badge>{' '}
            <Badge variant="solid" colorScheme="green">
              NodeJS
            </Badge>
          </span>
        </ListItem>
        <ListItem>
          <Meta>Website</Meta>
          <Link isExternal href="http://raghunathprabhakar.com/">
            http://raghunathprabhakar.com/ <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Repo</Meta>
          <Link isExternal href="https://github.com/Raghuboi/portfolio-website">
            https://github.com/Raghuboi/portfolio-website{' '}
            <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
      </List>
      <UnorderedList ml={4} my={4}>
        <ListItem>Fully responsive</ListItem>
        <ListItem>
          Contact page form-validation using Formik and Yup, emails sent out
          server-side using a REST API route
        </ListItem>
        <ListItem>
          Front-end styled using the UI library Chakra-UI, animations powered by
          framer-motion
        </ListItem>
      </UnorderedList>

      <ProjectImage
        src={`/images/portfolio/portfolio-website-${useColorModeValue(
          'thumbnail',
          'light'
        )}.png`}
        alt="Portfolio Website Homepage"
      />
      <ProjectImage
        src={`/images/portfolio/portfolio-website-${useColorModeValue(
          'form-dark',
          'form'
        )}.png`}
        alt="Portfolio Website Contact Page"
      />
    </Container>
  </Layout>
)

export default Project
