import {
  Container,
  Text,
  Badge,
  Link,
  List,
  UnorderedList,
  ListItem,
  Alert,
  AlertIcon,
  useColorModeValue
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, ProjectImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/projects'

const Project = () => {
  return (
    <Layout title="Student Net">
      <Container className="noselect" pt={6}>
        <Title>Wavelength News Application</Title>
        <P>
          A small-scale news application startup in collaboration with
          University of Calgary students. Wavelength was also selected in
          UCalgary&apos;s 2021{' '}
          <Link
            display="inline"
            isExternal
            href="https://www.ucalgary.ca/hunter-hub/grow-your-idea/entrepreneurship-programs/launchpad"
          >
            Launchpad Program
            <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          and is receiving funding from the University.
        </P>
        <List ml={4} my={3}>
          <ListItem mb={3}>
            <span>
              <Badge variant="solid" colorScheme="blue">
                React Native
              </Badge>{' '}
              <Badge variant="solid" colorScheme="orange">
                Firebase
              </Badge>{' '}
              <Badge variant="solid" colorScheme="purple">
                Adobe XD
              </Badge>{' '}
              <Badge variant="solid" colorScheme="cyan">
                Canva
              </Badge>{' '}
            </span>
          </ListItem>
          <ListItem>
            <Alert
              borderRadius={6}
              fontSize={16}
              mb={3}
              px={4}
              py={1}
              variant={useColorModeValue('solid', 'subtle')}
              colorScheme="purple"
              status="warning"
            >
              <AlertIcon />
              <Text>
                The project is currently in development therefore there is no
                deployed app.
              </Text>
            </Alert>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Text fontSize={18} fontWeight="semibold" as="span">
              (Currently Private)
            </Text>
          </ListItem>
          <ListItem>
            <Meta>Prototype</Meta>
            <Link
              isExternal
              href="https://xd.adobe.com/view/b6822638-d7a3-4f35-9eec-164cfeeec03e-e3d1/screen/5e83af2f-1d49-4b49-b6ef-406b86bab4bf?fullscreen"
            >
              Adobe XD <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              isExternal
              href="https://www.canva.com/design/DAE_iSeW030/IvtWMAyKkFEYd6UlCuiu7Q/view?mode=prototype#page-b"
            >
              Canva <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website Map</Meta>
            <Link isExternal href="https://www.gloomaps.com/gznJKEAsGr">
              https://www.gloomaps.com/gznJKEAsGr <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <UnorderedList ml={4} my={4}>
          <ListItem>
            Conducted{' '}
            <Link
              display="inline"
              isExternal
              href="https://docs.google.com/forms/d/e/1FAIpQLSeqihEmmhO0eWqd6vz8b99jr-Sbr9F_gD6I4H_PJmVLHnOQ9Q/viewform"
            >
              surveys
              <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            to better understand user needs.
          </ListItem>
          <ListItem>
            Created Sign In/Sign Up pages in React Native with stateful form
            validation, and user authentication using Firebase.
          </ListItem>
          <ListItem>
            Worked in a team to create app prototypes using Adobe XD and Canva.
          </ListItem>
          <ListItem>
            Created an initial website-map and landing page design.
          </ListItem>
          <ListItem>
            Lead a team of junior students and taught them the fundamentals of
            collaboration using Git.
          </ListItem>
          <ListItem>
            Worked in a team to create a dashboard to keep track of analytics
            and user data.
          </ListItem>
        </UnorderedList>
        <ProjectImage
          src="/images/portfolio/wavelength-prototype-adobe-xd.png"
          alt="Wavelength Prototype Adobe XD"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-prototype-adobe-xd-2.png"
          alt="Wavelength Prototype Adobe XD 2"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-login.png"
          alt="Wavelength Login Screen"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-sign-up.png"
          alt="Wavelength Sign Up Screen"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-sign-up-2.png"
          alt="Wavelength Sign Up Screen 2"
        />
      </Container>
    </Layout>
  )
}

export default Project
