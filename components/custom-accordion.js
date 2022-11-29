import { useRef, useState, useEffect } from 'react'
import {
  Link,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionIcon,
  AccordionPanel,
  useColorModeValue
} from '@chakra-ui/react'

export const CustomAccordian = ({ heading, content, openByDefault }) => {
  const [isOpen, setOpen] = useState(openByDefault)
  const contentRef = useRef()

  useEffect(() => {
    if (isOpen) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }
  }, [isOpen])

  return (
    <Accordion defaultIndex={[openByDefault ? 0 : 1]} allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          onClick={() => setOpen(!isOpen)}
          p={0}
          width="fit-content"
          _focus={{ boxShadow: 'none !important' }}
        >
          <Link
            color={useColorModeValue('purple.500', 'purple.200')}
            textAlign="left"
          >
            {heading}
          </Link>
          <AccordionIcon
            color={useColorModeValue('purple.500', 'purple.200')}
          />
        </AccordionButton>
        <AccordionPanel
          bg={useColorModeValue('#F8F8F8', 'whiteAlpha.100')}
          boxShadow="0 2px 3px 1px rgba(0, 0, 0, 0.2)"
          my={2}
          px={4}
          py={3}
          borderRadius={20}
          ref={contentRef}
        >
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export const CustomAccordianHomeTitle = ({
  heading,
  content,
  openByDefault
}) => {
  const [isOpen, setOpen] = useState(openByDefault)
  const contentRef = useRef()

  useEffect(() => {
    if (isOpen) {
      contentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center'
      })
    }
  }, [isOpen])

  return (
    <Accordion defaultIndex={[openByDefault ? 0 : 1]} allowToggle>
      <AccordionItem border="none">
        <AccordionButton
          onClick={() => setOpen(!isOpen)}
          p={0}
          width="fit-content"
          _focus={{ boxShadow: 'none !important' }}
          _hover={{ boxShadow: 'none !important' }}
        >
          {heading}
          <AccordionIcon ml={0.5} mt={3} />
        </AccordionButton>
        <AccordionPanel
          bg={useColorModeValue('#F8F8F8', 'whiteAlpha.100')}
          boxShadow="0 2px 3px 1px rgba(0, 0, 0, 0.2)"
          my={2}
          px={4}
          py={3}
          borderRadius={20}
          ref={contentRef}
        >
          {content}
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
