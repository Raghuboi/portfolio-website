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
    <Layout title="Enroll">
      <Container className="noselect" pt={6}>
        <Title>Enroll - Registration and Scheduling App</Title>
        <P>
          I was the Lead Programmer in a team of 4 for my Capstone systems
          development project. Our team created a new registration/scheduling
          web app for the non-profit Manitoba Conservatory of Music and Arts.
        </P>
        <List ml={4} my={3}>
          <ListItem mb={3}>
            <span>
              <Badge variant="solid" colorScheme="black">
                NextJS
              </Badge>{' '}
              <Badge variant="solid" colorScheme="yellow">
                JavaScript
              </Badge>{' '}
              <Badge variant="solid" colorScheme="blue">
                ReactJS
              </Badge>{' '}
              <Badge variant="solid" colorScheme="green">
                NodeJS
              </Badge>{' '}
              <Badge variant="solid" colorScheme="blue">
                PostgreSQL
              </Badge>{' '}
              <Badge variant="solid" colorScheme="purple">
                Prisma
              </Badge>{' '}
            </span>
          </ListItem>
          <ListItem>
            <Meta>Documentation</Meta>
            <Link
              isExternal
              href="https://docs.google.com/document/d/1g-YyrWQsB7DkdN4A0X5MjduA2JRHHBCS7d-_AQjeTRA/edit?usp=sharing"
            >
              Detailed Design Report <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              isExternal
              href="https://docs.google.com/document/d/1VbVEb2_dcurmcxiWJ21LQNJspgWei3q8iH3GC8Orxj0/edit?usp=sharing"
            >
              System Study Report <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
              isExternal
              href="https://docs.google.com/document/d/13TwDGCWG0LtZ2vfxigWodCNwXiP2EbsBkeqjXb7ZerU/edit?usp=sharing"
            >
              Project Completion Report <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>
        <UnorderedList ml={4} my={4}>
          <ListItem>
            Developed and shipped a full stack CRUD app for registration and
            scheduling.
          </ListItem>
          <ListItem>
            Designed studio scheduling API for managing individual and group
            classes.
          </ListItem>
          <ListItem>
            Built payment management system for student registrations.
          </ListItem>
          <ListItem>
            Led weekly standups and managed the team; developed programming
            standards and observed adherence to standards.
          </ListItem>
          <ListItem>
            Wrote system documentation– Systems Study Report, Detailed Design
            Report, User Manual, Technical Manual.
          </ListItem>
        </UnorderedList>
        <ProjectImage
          src="/images/portfolio/enroll-add.png"
          alt="Enroll Add Student"
        />
        <ProjectImage
          src="/images/portfolio/enroll-calendar.png"
          alt="Enroll Calendar"
        />
        <ProjectImage
          src="/images/portfolio/enroll-menu.png"
          alt="Enroll Menu"
        />
        <ProjectImage
          src="/images/portfolio/enroll-payment.png"
          alt="Enroll Payment"
        />
        <ProjectImage
          src="/images/portfolio/enroll-search.png"
          alt="Enroll Search"
        />
        <ProjectImage
          src="/images/portfolio/enroll-lesson.png"
          alt="Enroll Lesson"
        />
        <ProjectImage
          src="/images/portfolio/enroll-student.png"
          alt="Enroll Student"
        />
      </Container>
    </Layout>
  )
}

export default Project
