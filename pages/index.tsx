import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/_primitives/Box'
import Button from '../components/_primitives/Button'
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
        <Box as={"p"} css={{ color: theme.colors.slate10 }}>By continuing you are agreeing to the <Button inline affordance={"tertiary"} color={"pink"}>terms and condintions</Button></Box>
      </Box>
        
    </div>
  )
}

export default Home
