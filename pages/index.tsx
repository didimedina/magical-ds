import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/_primitives/Box'
import * as Button from '../components/_primitives/Button'
import { css, theme, darkTheme } from '../stitches.config'

const containterStyles = css({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.slate1 
})

const darkMode = true

/*

Presentation
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

  return (
    <div className={ darkMode ? darkTheme : '' }>
      <Head>
        <title>Magical Design System</title>
        <meta name="description" content="The start of something awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={containterStyles()}>
        <Box css={{color: theme.colors.slate9, fontSize: 100 }} as={"p"}>I agree to the <Button.Root inline affordance={"tertiary"}>terms and conditions</Button.Root></Box>
        <Button.Root affordance={"tertiary"} color={"purple"} size={"lg"}>
          <Button.Content>
            <Button.Icon/>
            <Button.Value>Test</Button.Value>
          </Button.Content>
        </Button.Root>
      </Box>
        
    </div>
  )
}

export default Home
