import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../components/v1/Box'



const Home: NextPage = () => {

  return (
    <div>
      <Head>
        <title>Magical Design System</title>
        <meta name="description" content="The start of something awesome!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>Design System</Box>
        
    </div>
  )
}

export default Home
