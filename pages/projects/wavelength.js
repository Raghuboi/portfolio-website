import {
  Container,
  Badge,
  Link,
  List,
  UnorderedList,
  ListItem
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
          Collaborated with UCalgary graduates to launch a news application
          startup. Wavelength was selected in UCalgary&apos;s{' '}
          <Link
            display="inline"
            isExternal
            href="https://www.ucalgary.ca/hunter-hub/grow-your-idea/entrepreneurship-programs/launchpad"
          >
            Launchpad Program
            <ExternalLinkIcon mx="2px" />
          </Link>{' '}
          (2021) and was the recipient of University funding.
        </P>
        <List ml={4} my={3}>
          <ListItem mb={3}>
            <span>
              <Badge variant="solid" colorScheme="blue">
                React Native
              </Badge>{' '}
              <Badge variant="solid" colorScheme="yellow">
                JavaScript
              </Badge>{' '}
              <Badge variant="solid" colorScheme="cyan">
                TailwindCSS
              </Badge>{' '}
              <Badge variant="solid" colorScheme="orange">
                Firebase
              </Badge>{' '}
              <Badge variant="solid" colorScheme="blue">
                Google Cloud
              </Badge>{' '}
            </span>
          </ListItem>
          <ListItem>
            <Meta>App</Meta>
            <Link
              isExternal
              href="https://apps.apple.com/ca/app/wavelength-news/id1644950368"
            >
              App Store <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              isExternal
              href="https://play.google.com/store/apps/details?id=com.wavelengthnews"
            >
              Google Play <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Website</Meta>
            <Link isExternal href="https://wavelengthnews.com/">
              https://wavelengthnews.com/ <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <UnorderedList ml={4} my={4}>
          <ListItem>
            Designed stateful Sign in/Sign up screens in React Native.
          </ListItem>
          <ListItem>
            Designed User Profile screen; set up React Context API and pattern
            for persistent user sessions.
          </ListItem>
          <ListItem>
            Mitigated vulnerability against CSRF attacks by using JWT
            authentication with a refresh/access token pattern.
          </ListItem>
          <ListItem>
            Increased protection against XSS attacks by using Secure HTTP
            cookies instead of LocalStorage.
          </ListItem>
          <ListItem>
            Built app prototypes using{' '}
            <Link
              isExternal
              href="https://www.canva.com/design/DAE_iSeW030/IvtWMAyKkFEYd6UlCuiu7Q/view?mode=prototype#page-b"
            >
              Canva <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            and{' '}
            <Link
              isExternal
              href="https://xd.adobe.com/view/b6822638-d7a3-4f35-9eec-164cfeeec03e-e3d1/screen/5e83af2f-1d49-4b49-b6ef-406b86bab4bf/?fullscreen"
            >
              Adobe XD <ExternalLinkIcon mx="2px" />
            </Link>{' '}
            .
          </ListItem>
          <ListItem>
            Conducted user surveys to better understand functional requirements.
          </ListItem>
        </UnorderedList>
        <ProjectImage
          src="/images/portfolio/wavelength-home.jpg"
          alt="Wavelength Home"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-promo.jpg"
          alt="Wavelength Promo"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-login.jpg"
          alt="Wavelength Login Screen"
        />
        <ProjectImage
          src="/images/portfolio/wavelength-signup.jpg"
          alt="Wavelength Sign Up Screen"
        />
      </Container>
    </Layout>
  )
}

export default Project
