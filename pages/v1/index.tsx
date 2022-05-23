import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../../components/v1/Box'
import * as Button from '../../components/v1/Button'
import { css, theme, darkTheme, looselySized, denselySized } from '../../stitches.config'
import { CloudSlash, Command, Check, Lightning, MapPinLine, DotsThreeOutlineVertical, CaretDown } from 'phosphor-react'
import Text from '../../components/v1/Text'

const containterStyles = css({
  display: "flex",
  flexDirection: "column",
  alignItems: 'center',
  justifyContent: 'center',
  width: "100vw",
  height: "100vh",
  gap: 20,
  backgroundColor: theme.colors.slate1,
  fontFamily: theme.fonts.serif
})

const iconContainerStyles = css({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  // gap: 6
})

const darkMode = false

/* PRESENTATION

- Research: Our repo, MUI docs, figma
- Basic API: afforadance, size, color
- Support for Dark Mode
- Inline 
- Next: Compounding abilities (icon, label, group)
- Next: Loading is unopinionated (show example)
- Next: Styling accuracy.

*/


const Home: NextPage = () => {

  const isUser = false
  const isError = false

  return (
    <div className={ darkMode ? darkTheme : '' }>
      <Head>
        <title>Magical Design System</title>
        <meta name="description" content="The start of something awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={containterStyles()}>

        {/* Example 1 */}

        <Button.Root
          ghost
          affordance={"secondary"}
          dim
          readOnly
          color={"slate"}
          size={"lg"}>
            <Button.Icon><MapPinLine weight='bold'/></Button.Icon>
            <Button.Value>Add location...</Button.Value>
          </Button.Root>
          <Button.Root
            ghost
            affordance={"secondary"}
            dim
            color={"slate"}
            size={"lg"}>
              <Button.Value>Select...</Button.Value>
              <Button.Icon shrink dim><CaretDown weight='bold'/></Button.Icon>
            </Button.Root>
          
          {/* Example 2 */}

          <Box className={iconContainerStyles()}>
            
            <Button.Root iconOnly ghost affordance={"secondary"} color={"tomato"}>
              <Button.Icon><CloudSlash weight='bold'/></Button.Icon>
            </Button.Root>
            
            <Button.Root iconOnly ghost dim affordance={"secondary"} color={"slate"}>
              <Button.Icon><Lightning weight='bold'/></Button.Icon>
            </Button.Root>
            
            <Button.Root iconOnly dim ghost affordance={"secondary"}>
              <Button.Icon><DotsThreeOutlineVertical weight='fill'/></Button.Icon>
            </Button.Root>
          </Box>

          {/* Example 3 */}

          <Button.Root css={{width: 200}} layout={"space-between"} affordance={"primary"} color={"slate"} size={"lg"}>
            <Button.Content>
              <Button.Icon><Check weight='bold'/></Button.Icon>
              <Button.Value>Save</Button.Value>
            </Button.Content>
            <Button.Content>
              <Button.Label><Command weight={"bold"}/></Button.Label>
              <Button.Label>ETR</Button.Label>
            </Button.Content>
          </Button.Root>

          {/* Example 4 */}
          <Text font={"mono"}> 
            Hey Team, in preperation for our meeting please review <Button.Root inline color={"orange"} affordance={"secondary"}>@TP</Button.Root> presentation in advance.
          </Text>
          {/* how would the button here be set implicitly by fontSize? do we need TextGroup? */}
          <Box css={{ display: "flex", alignItems: "center", gap: 4}}> 
            <Text size={"2xl"}>March</Text>
            <Text size={"2xl"} dim> 2022</Text>
            <Button.Root iconOnly dim ghost affordance={"secondary"}>
              <Button.Icon><CaretDown weight='fill'/></Button.Icon>
            </Button.Root>
          </Box>

          <Box>
            <Text size={"4xl"}>
              <Button.Root 
                affordance={"secondary"}
                ghost
                inline
              >
                <Button.Value>March</Button.Value>
                <Button.Value dim>2022</Button.Value>
                <Button.Icon dim shrink><CaretDown/></Button.Icon>
              </Button.Root>
            </Text>
          </Box>

          <Text bold size={"lg"}>Hello World</Text>
          <Text dim size={"4xl"} font={"serif"}>Hey Team, in preperation for our meeting please review <Button.Root inline color={"orange"} affordance={"tertiary"}>@TP</Button.Root> presentation in advance.</Text>



      </Box>
        
    </div>
  )
}

export default Home
