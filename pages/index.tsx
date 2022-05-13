import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/_primitives/Box'
import * as Button from '../components/_primitives/Button'
import { css, theme, darkTheme } from '../stitches.config'
import { CaretDown, User } from 'phosphor-react'

const containterStyles = css({
  display: "flex",
  alignItems: 'center',
  justifyContent: 'center',
  width: "100vw",
  height: "100vh",
  backgroundColor: theme.colors.slate1,
  fontFamily: theme.fonts.serif
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
  const isError = true

  return (
    <div className={ darkMode ? darkTheme : '' }>
      <Head>
        <title>Magical Design System</title>
        <meta name="description" content="The start of something awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box className={containterStyles()}>
        <Button.Root css={{ width: 170 }} layout={"spaceBetween"} color={ isError ? "red" : "slate"} affordance={"primary"}>
          <Button.Icon><User weight='bold'/></Button.Icon>
          <Button.Content>
            <Button.Value>People</Button.Value>
            <Button.Value dim>12</Button.Value>
          </Button.Content>
          <Button.Icon dim shrink><CaretDown weight='bold'/></Button.Icon>
        </Button.Root>
      </Box>
        
    </div>
  )
}

export default Home
