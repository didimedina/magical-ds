import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/_primitives/Box'
import * as Button from '../components/_primitives/Button'
import { css, theme, darkTheme } from '../stitches.config'
import { CloudSlash, Command, Check, Lightning, MapPinLine, DotsThreeOutlineVertical } from 'phosphor-react'

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

/* API

Root -> affordance | inline | size | layout | color
Icon -> shrink | dim
Value -> shrink | dim
Content -> ~
Label -> TBD

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
          color={"slate"}
          size={"sm"}>
            <Button.Icon><MapPinLine weight='bold'/></Button.Icon>
            <Button.Value>Add location...</Button.Value>
          </Button.Root>
          
          {/* Example 2 */}

          <Box className={iconContainerStyles()}>
            
            <Button.Root iconOnly ghost affordance={"secondary"} color={"tomato"}>
              <Button.Icon><CloudSlash weight='bold'/></Button.Icon>
            </Button.Root>
            
            <Button.Root iconOnly dim ghost affordance={"secondary"}>
              <Button.Icon><Lightning weight='bold'/></Button.Icon>
            </Button.Root>
            
            <Button.Root iconOnly dim ghost affordance={"secondary"}>
              <Button.Icon><DotsThreeOutlineVertical weight='fill'/></Button.Icon>
            </Button.Root>
          </Box>

          {/* Example 3 */}

          <Button.Root css={{width: 200}} layout={"space-between"} affordance={"primary"} color={"slate"}>
            <Button.Content>
              <Button.Icon><Check weight='bold'/></Button.Icon>
              <Button.Value>Save</Button.Value>
            </Button.Content>
            <Button.Content>
              <Button.Label><Command weight={"bold"}/></Button.Label>
              <Button.Label>ETR</Button.Label>
            </Button.Content>
          </Button.Root>



      </Box>
        
    </div>
  )
}

export default Home
