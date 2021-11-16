import { useState } from 'react'
import { Formik, Field, Form } from 'formik'
import * as Yup from 'yup'
import {
  Container,
  Link,
  VStack,
  Box,
  Heading,
  Text,
  Textarea,
  Button,
  Spacer,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  useColorModeValue,
  useToast
} from '@chakra-ui/react'
import { CheckIcon, EmailIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import Section from '../components/section'
import Layout from '../components/layouts/projects'

const initialValues = {
  email: '',
  fullname: '',
  message: ''
}

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required').email('Invalid Email address'),
  fullname: Yup.string().required('Required').min(3, 'Too short'),
  message: Yup.string().required('Required').min(6, 'Too short')
})

const Contact = () => {
  const [delivered, setDelivered] = useState(false)
  const toast = useToast()

  async function onContactFormSubmit(values) {
    const body = {
      fullname: values.fullname,
      email: values.email,
      message: values.message
    }

    await fetch(`/api/contact-form`, {
      method: 'POST',
      credentials: 'include',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body)
    }).then(res => {
      if (res.status === 200) {
        setDelivered(true)
        toast({
          title: 'Message Recieved',
          status: 'success',
          description: 'I will respond as soon as possible',
          duration: 9000,
          isClosable: true
        })
      } else {
        setDelivered(false)
        toast({
          title: 'Oops, Internal Server Error',
          status: 'error',
          description: 'Please try again',
          duration: 9000,
          isClosable: true
        })
      }
    })
  }

  return (
    <Container pt={6}>
      <Heading as="h3" variant="section-title">
        Contact Me Directly
      </Heading>
      <Link isExternal href="mailto:raghunathprabhakar@gmail.com">
        <Box justify="center" my={3}>
          <EmailIcon />
          <Text fontSize={16} fontWeight="semibold" display="inline">
            {' '}
            raghunathprabhakar@gmail.com
          </Text>
          <ExternalLinkIcon mx={1} />
        </Box>
      </Link>

      <Spacer py={0.5} />

      <Layout title="Contact">
        <Heading as="h3" variant="section-title">
          or Send a Message
        </Heading>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={async (values, actions) => {
            if (delivered)
              toast({
                title: 'Your message has already been recieved',
                status: 'success',
                duration: 9000,
                isClosable: true
              })
            else await onContactFormSubmit(values)
            actions.setSubmitting(false)
          }}
        >
          {({ errors, touched, isSubmitting, isValid }) => (
            <Form>
              <VStack justify="center" align="center">
                <Section m={0} w="100%">
                  <CustomInputField
                    bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.50')} //eslint-disable-line
                    name="fullname"
                    label="Full Name"
                    placeholder="What's your full name?"
                    error={errors.fullname}
                    touched={touched.fullname}
                  />
                </Section>
                <Section delay={0.025} m={0} w="100%">
                  <CustomInputField
                    bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.50')} //eslint-disable-line
                    name="email"
                    label="Email address"
                    placeholder="you@example.com"
                    error={errors.email}
                    touched={touched.email}
                  />
                </Section>
                <Section delay={0.05} m={0} w="100%">
                  <CustomInputArea
                    bg={useColorModeValue('whiteAlpha.600', 'whiteAlpha.50')} //eslint-disable-line
                    name="message"
                    label="Message"
                    placeholder="Write your message here"
                    error={errors.message}
                    touched={touched.message}
                  />
                </Section>
                <Spacer />
                <Section delay={0.075} m={0}>
                  <Button
                    isLoading={isSubmitting}
                    isDisabled={!isValid}
                    type="submit"
                    colorScheme={(delivered && 'green') || 'purple'}
                    size="md"
                    width={120}
                    variant="solid"
                  >
                    {!delivered && 'Submit'}
                    {delivered && (
                      <>
                        Delivered <CheckIcon ml={2} />
                      </>
                    )}
                  </Button>
                </Section>
              </VStack>
            </Form>
          )}
        </Formik>
      </Layout>
    </Container>
  )
}

export default Contact

const CustomInputField = ({ label, name, error, touched, ...props }) => {
  return (
    <Field {...props} name={name}>
      {({ field }) => (
        <FormControl isInvalid={error && touched}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Input {...field} {...props} id={name} />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}

const CustomInputArea = ({ label, name, error, touched, ...props }) => {
  return (
    <Field {...props} name={name}>
      {({ field }) => (
        <FormControl isInvalid={error && touched}>
          {label && <FormLabel htmlFor={name}>{label}</FormLabel>}
          <Textarea {...field} {...props} id={name} />
          <FormErrorMessage>{error}</FormErrorMessage>
        </FormControl>
      )}
    </Field>
  )
}
