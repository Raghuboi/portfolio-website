import Link from 'next/link'
import CodeSVG from '../../public/images/contents/code-solid.svg'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 18px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 10px;

  svg {
    transition: transform 100ms ease;
  }

  &:hover svg {
    transform: rotate(180deg);
  }
`
const Logo = () => {
  const codeImg = `/images/contents/code-solid.svg`

  return (
    <Link href="/">
      <a>
        <LogoBox>
          <CodeSVG
            width={20}
            height={20}
            fill={useColorModeValue('gray.800', 'whiteAlpha.900')}
          />
          <Text
            color={useColorModeValue('gray.800', 'whiteAlpha.900')}
            fontFamily="M PLUS Rounded 1c"
            fontWeight="bold"
            ml={3}
          >
            Raghunath Prabhakar
          </Text>
        </LogoBox>
      </a>
    </Link>
  )
}

export default Logo
