import {
  Container,
  Button,
  Heading,
  Text,
  Flex,
  Box,
  Link,
  useColorModeValue,
  UnorderedList,
  List,
  ListItem,
  Badge,
  Spacer
} from '@chakra-ui/react'
import Layout from '../components/layouts/projects'
import { DownloadIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { CustomAccordian } from '../components/custom-accordion'

const Resume = () => {
  return (
    <Container pt={6}>
      <Flex align="end" justify="space-between">
        <Heading as="h3" variant="section-title">
          Resume
        </Heading>
        <a href="/Raghunath Prabhakar - Resume.pdf" download>
          <Button size="md" colorScheme="purple">
            Download PDF
            <DownloadIcon ml={2} />
          </Button>
        </a>
      </Flex>
      <Layout title="Resume">
        <Flex
          fontWeight={400}
          flexDir="column"
          gridGap={6}
          px={[0, 6]}
          py={8}
          mt={[0, 6]}
          borderRadius={[0, 12]}
          bg={['none', useColorModeValue('white', 'whiteAlpha.50')]}
          boxShadow={['none', '0 3px 3px 2px rgba(0, 0, 0, 0.1)']}
        >
          <Box px={4}>
            <Heading textAlign="center" as="h3">
              Raghunath Prabhakar
            </Heading>
            <Box align="center">
              <Text fontSize={16} fontWeight="semibold" display="inline">
                <EmailIcon /> raghunathprabhakar@gmail.com
              </Text>
            </Box>
          </Box>

          <Box>
            <ResumeHeading title="Education" />
            <Box>
              <Text fontSize={18} fontWeight={600}>
                University of Winnipeg
              </Text>
              <Text ml={6} fontWeight={500} display="inline">
                B.Sc -{' '}
              </Text>
              <Text display="inline">Applied Computer Science</Text>
              <br />
              <Text ml={6} fontWeight={500} display="inline">
                B.A. -{' '}
              </Text>
              <Text display="inline">Economics</Text>
            </Box>
          </Box>

          <Box>
            <ResumeHeading title="Experience" />
            <Box>
              <Text fontSize={18} fontWeight={600}>
                Full Stack Developer - Wavelength Digital (2021 - 2022)
              </Text>

              <CustomAccordian
                heading="About the Organization"
                openByDefault={true}
                content={
                  <Text>
                    A news application startup in started by University of
                    Calgary graduates. Wavelength was also selected in
                    UCalgary&apos;s 2021{' '}
                    <Link
                      display="inline"
                      isExternal
                      href="https://www.ucalgary.ca/hunter-hub/grow-your-idea/entrepreneurship-programs/launchpad"
                    >
                      Launchpad Program
                      <ExternalLinkIcon mx="2px" />
                    </Link>{' '}
                    and the Alberta Catalyzer program.
                  </Text>
                }
              ></CustomAccordian>

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
                  Created Sign In/Sign Up pages in React Native with stateful
                  form validation, and user authentication using Firebase.
                </ListItem>
                <ListItem>
                  Worked in a team to create app prototypes using Adobe XD and
                  Canva.
                </ListItem>
                <ListItem>
                  Created an initial website-map and landing page design.
                </ListItem>
                <ListItem>
                  Lead a team of junior students and taught them the
                  fundamentals of collaboration using Git.
                </ListItem>
                <ListItem>
                  Worked in a team to create a dashboard to keep track of
                  analytics and user data.
                </ListItem>
              </UnorderedList>
            </Box>

            <Spacer py={2} />

            <Box>
              <Text fontSize={18} fontWeight={600}>
                Project Assistant - UW Code Force (2021 - 2022)
              </Text>
              <Link isExternal href="https://uwcodeforce.ca/">
                https://uwcodeforce.ca/ <ExternalLinkIcon mx="2px" />
              </Link>

              <CustomAccordian
                heading="About the Organization"
                openByDefault={true}
                content={
                  <Text>
                    Initiative started by the students of{' '}
                    <Link
                      href="https://www.uwinnipeg.ca/"
                      isExternal
                      display="inline"
                      fontWeight="semibold"
                    >
                      University Of Winnipeg
                      <ExternalLinkIcon mx="2px" />
                    </Link>{' '}
                    to bridge the gap between education and the work-force.{' '}
                    <Text fontWeight={650} fontSize={16} display="inline">
                      Organizing coding competitions and open source projects
                    </Text>{' '}
                    throughout the academic year; and helping students learn
                    valuable industry skills such as working in a team, advanced
                    problem solving, collaboration with git (and other build
                    tools) &amp; app deployment.
                  </Text>
                }
              ></CustomAccordian>

              <Spacer py={1} />

              <UnorderedList ml={4}>
                <ListItem>
                  <Text fontWeight="semibold">
                    Active leadership role as Project Assistant.
                  </Text>
                  <UnorderedList spacing={1} ml={8}>
                    <ListItem>
                      Kept track of current/planned issues for my team in
                      biweekly Agile sprints.
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
              </UnorderedList>
            </Box>
          </Box>

          <Box>
            <ResumeHeading title="Projects" />

            <ResumeProject
              href="http://raghunathprabhakar.com/projects/student-net"
              title="Student Net (Open Source)"
              description="Collaborated in an Agile environment to build a one stop
                    solution for all kinds of student problems. A website where
                    University of Winnipeg students can connect with each other
                    and find useful information like job listings, rentals, used
                    cars, ongoing student offers/discounts, course info and
                    international student resources."
              list={
                <>
                  <ListItem>
                    Created Sign In/Sign Up pages with stateful form validation.
                  </ListItem>
                  <ListItem>
                    Implemented Session based authentication using MySQL,
                    passport and a combination of Express &amp; NextJS API
                    routing.
                  </ListItem>
                  <ListItem>
                    Implemented loading/disabled states in submit forms to
                    counter request spam.
                  </ListItem>
                </>
              }
              techStack={
                <>
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
                </>
              }
            />

            <Spacer py={2} />

            <ResumeProject
              href="http://raghunathprabhakar.com/projects/poker"
              title="Multiplayer Poker Game"
              description="Built a WebSocket based Multiplayer Poker Game with Token
                    based authentication using a REST API. The game was created
                    in effort to learn more about WebSockets and working with
                    APIs."
              list={
                <>
                  <ListItem>
                    Implemented JWT authentication with Refresh/Access token
                    patterns to protect against XSS (cross-site scripting)
                    vulnerabilities.
                  </ListItem>
                  <ListItem>
                    Stored Tokens in Secure, HttpOnly cookies instead of
                    LocalStorage for further protection.
                  </ListItem>
                  <ListItem>
                    Created REST API endpoints for Sign In/Sign Up that validate
                    and store data in a MongoDB database.
                  </ListItem>
                  <ListItem>
                    Added hashing to user passwords before saving them in the
                    database.
                  </ListItem>
                  <ListItem>
                    Implemented logic for sending out confirmation emails to
                    users, requiring them to activate their account before
                    signing in.
                  </ListItem>
                  <ListItem>
                    Implemented Room-code matchmaking and automatic Queue based
                    matchmaking using WebSockets.
                  </ListItem>
                </>
              }
              techStack={
                <>
                  <Badge variant="solid" colorScheme="green">
                    MongoDB
                  </Badge>{' '}
                  <Badge variant="solid" colorScheme="orange">
                    Express
                  </Badge>{' '}
                  <Badge variant="solid" colorScheme="blue">
                    React
                  </Badge>{' '}
                  <Badge variant="solid">NodeJS</Badge>
                </>
              }
            />

            <Spacer py={2} />

            <ResumeProject
              href="https://raghunathprabhakar.com/projects/snake"
              title="Snake AI"
              description="Coded a re-creation of the classic Snake game, gave it an AI
                    using path-finding algorithms. The game was created in
                    effort to learn more about Data Structures, Algorithms &amp;
                    Path-finding."
              list={
                <>
                  <ListItem>
                    Made the game responsive, enabling it to be played by
                    swiping on a touchscreen or using arrowkeys on a keyboard.
                  </ListItem>
                  <ListItem>
                    Implemented A-Star and Greedy best first search algorithms.
                  </ListItem>
                  <ListItem>
                    Used a custom UseInterval() React hook to time the gameloop,
                    set up the game to be rendered in an HTML canvas using
                    React.
                  </ListItem>
                </>
              }
              techStack={
                <>
                  <Badge variant="solid" colorScheme="yellow">
                    JavaScript
                  </Badge>{' '}
                  <Badge variant="solid" colorScheme="blue">
                    React
                  </Badge>{' '}
                  <Badge variant="solid">CSS</Badge>
                </>
              }
            />
          </Box>

          <Box>
            <ResumeHeading title="Volunteer Work" />
            <Box>
              <Text fontSize={18} fontWeight={600}>
                (2021-2022) Save the Children &amp; Plan Canada
              </Text>
              <Spacer py={1} />
              <UnorderedList spacing={1} ml={8}>
                <ListItem>
                  Worked as a door-to-door fundraiser for the charities Save the
                  Children and Plan Canada.
                </ListItem>
                <ListItem>
                  Spread awareness about the charities in residential
                  neighborhoods, talked to 50+ people every day.
                </ListItem>
              </UnorderedList>
            </Box>

            <Spacer py={2} />

            <Box>
              <Text fontSize={18} fontWeight={600}>
                (2008-2019) Bharat Soka Gakai
              </Text>
              <Spacer py={1} />
              <UnorderedList spacing={1} ml={8}>
                <ListItem>
                  Actively helped in organizing the SGI May 3rd Anniversary
                  event every year.
                </ListItem>
                <ListItem>
                  In-charge of a number of tasks including decoration, cultural
                  performances, seating arrangements and catering. Chandigarh,
                  India.
                </ListItem>
              </UnorderedList>
            </Box>

            <Spacer py={2} />

            <Box>
              <Text fontSize={18} fontWeight={600}>
                (2010-2016) Sri Sathya Sai Seva Organization
              </Text>
              <Spacer py={1} />
              <UnorderedList spacing={1} ml={8}>
                <ListItem>
                  Volunteered to teach English and Math to underprivileged
                  students.
                </ListItem>
                <ListItem>
                  Participated in blanket and food distribution drives during
                  winters for the homeless in the city of Chandigarh, India.
                </ListItem>
              </UnorderedList>
            </Box>
          </Box>
        </Flex>
      </Layout>
    </Container>
  )
}

export default Resume

const ResumeHeading = ({ title }) => (
  <Heading
    as="h2"
    textDecorationColor={useColorModeValue('purple.500', 'purple.200')}
    variant="section-title"
  >
    {title}
  </Heading>
)

const ResumeProject = ({ description, title, list, techStack, href }) => (
  <Box>
    <Text fontSize={18} fontWeight={650}>
      {title}
    </Text>
    <List mb={1}>
      <ListItem>
        <span>{techStack}</span>
      </ListItem>
    </List>
    <Link isExternal href={href}>
      More Info <ExternalLinkIcon mx="2px" />
    </Link>
    <CustomAccordian
      heading="Project Description"
      openByDefault={true}
      content={<Text>{description}</Text>}
    ></CustomAccordian>
    <Spacer py={1} />
    <UnorderedList spacing={1} ml={8}>
      {list}
    </UnorderedList>
  </Box>
)
