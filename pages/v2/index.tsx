import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../../components/v1/Box'
import Stack from '../../components/v1/Stack'
import { Button } from '../../components/v2/Button'
import Text from '../../components/v2/Text'

const Home: NextPage = () => {

    return (
      <div>
        <Head>
          <title>Magical Design System</title>
          <meta name="description" content="The start of something awesome!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack height={"screen"} positionAcross={"center"} positionAlong={"center"}>
            <Text baseSize={"2xl"}>Wow this is the coolest&nbsp;
                <Button controlledBy={"text"} affordance={"secondary"} color={"grass"}>
                    <Text controlledBy={"button"} baseSize={"3xl"}>Design System</Text>
                </Button> I have ever seen!
            </Text>
        </Stack>
          
      </div>
    )
  }
  
  export default Home