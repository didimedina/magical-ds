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
            <Button css={{ width: "200px"}} height={"fit"} affordance={"primary"} color={"tomato"}>
                <Stack gap={"tighter"} padding={"tighter"} width={"fill"} height={"fill"} positionAlong={"center"} positionAcross={"center"}>
                    <Text controlledBy={"button"}>Subscribe Monthly</Text>
                    <Text dim shrink controlledBy={"button"}>$9.95 per month</Text>
                </Stack>
            </Button>
        </Stack>
          
      </div>
    )
  }
  
  export default Home