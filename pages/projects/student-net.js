import { useEffect, useRef } from 'react'
import {
  Container,
  Heading,
  Box,
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
  const myRole = useRef()

  useEffect(() => {
    setTimeout(() => {
      myRole.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }, 500) // framer motion animations execute before page is scrolled into view
  }, [])

  return (
    <Layout title="Student Net">
      <Container className="noselect" pt={6}>
        <Title>Student Net</Title>
        <P>
          StudentNet aims to be the one spot to solve all kinds of student
          problems, so they can focus more on learning. This would include, but
          not be limited to, the undermentioned sub-projects, all combined to be
          one website/app
        </P>
        <List ml={4} my={3}>
          <ListItem mb={3}>
            <span>
              <Badge variant="solid" colorScheme="purple">
                Docker
              </Badge>{' '}
              <Badge variant="solid" colorScheme="pink">
                MySQL
              </Badge>{' '}
              <Badge variant="solid" colorScheme="gray">
                Next
              </Badge>{' '}
              <Badge variant="solid" colorScheme="blue">
                React
              </Badge>{' '}
              <Badge variant="solid" colorScheme="orange">
                Express
              </Badge>{' '}
              <Badge variant="solid" colorScheme="green">
                NodeJS
              </Badge>
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
                The project is still in development, therefore there is no
                deployed website- but the code is still available publicly on
                GitHub with my
                <Link
                  color="messenger.50"
                  display="inline"
                  isExternal
                  href="https://github.com/UWCodeForce/student-net/commits?author=Raghuboi"
                >
                  {' '}
                  contributions
                  <ExternalLinkIcon mx="2px" />
                </Link>
              </Text>
            </Alert>
          </ListItem>
          <ListItem>
            <Meta>Repo</Meta>
            <Link isExternal href="https://github.com/UWCodeForce/student-net">
              https://github.com/UWCodeForce/student-net{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <UnorderedList ml={4} my={4}>
          <ListItem>
            Find student-suitable Job opportunities from various sources
          </ListItem>
          <ListItem>
            A Q&amp;A section where students can help each other
          </ListItem>
          <ListItem>
            One stop place to search for a course, and get all universities that
            offer that course in a particular region in Canada (possibly with
            ratings)
          </ListItem>
          <ListItem>A list of all student discounts, offers etc.</ListItem>
          <ListItem>
            Look for information about universities (possibly rating as well)
          </ListItem>
          <ListItem>A housing page to look for a student roommate</ListItem>
          <ListItem>Find used cars for travel.</ListItem>
          <ListItem>
            Information for international students - page for how to prepare and
            get a driver&apos;s license, apply for work permit, extend permits,
            etc.
          </ListItem>
        </UnorderedList>

        <Box ref={myRole} mb={4}>
          <Heading
            variant="section-title"
            display="inline-block"
            as="h3"
            fontSize={20}
            mt={0}
            mb={4}
          >
            My Role
          </Heading>
          <UnorderedList ml={4} mb={4}>
            <ListItem>
              <Text fontWeight="semibold">
                Active leadership role as Project Assistant.
              </Text>
              <UnorderedList spacing={1} ml={8}>
                <ListItem>
                  Kept track of current/planned issues for my team in biweekly
                  Agile sprints.
                </ListItem>
                <ListItem>
                  Reviewed code for junior peers/team members.
                </ListItem>
                <ListItem>
                  Participated in weekly Agile like standup meetings with
                  Project Leaders.
                </ListItem>
                <ListItem>
                  Discussed weekly state of Kanban board in standup; gave
                  suggestions &amp; helped sort issues by priority.
                </ListItem>
                <ListItem>
                  Discussed iterations; suggested &amp; gave feedback on new
                  issues for biweekly sprints.
                </ListItem>
              </UnorderedList>
            </ListItem>
            <ListItem>
              Created Sign In/Sign Up pages with stateful form validation using
              Formik and Yup
            </ListItem>
            <ListItem>
              Implemented Session based authentication using Passport and a
              combination of Express &amp; Next.js API Routing
            </ListItem>
            <ListItem>
              Implemented loading/disabled states in submit forms to counter
              request spam
            </ListItem>
          </UnorderedList>
        </Box>
        <ProjectImage
          src="/images/portfolio/student-net-sign-in.png"
          alt="Student Net Sign In"
        />
        <ProjectImage
          src="/images/portfolio/student-net-sign-up.png"
          alt="Student Net Sign Up"
        />
      </Container>
    </Layout>
  )
}

export default Project
