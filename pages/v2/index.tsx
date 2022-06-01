import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../../components/v1/Box'
import Stack from '../../components/v2/Stack'
import { Button } from '../../components/v2/Button'
import Text from '../../components/v2/Text'
import Icon from '../../components/v2/Icon'
import { AirplaneTakeoff, HouseSimple } from 'phosphor-react'

const Home: NextPage = () => {

    return (
      <div>
        <Head>
          <title>Magical Design System</title>
          <meta name="description" content="The start of something awesome!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack height={"screen"} gap={"loose"} axis={"vertical"} positionAcross={"center"} positionAlong={"center"}>
            {/* Using Stack to make components more flexible */}
            <Text baseSize={"4xl"}> Hey man look at this:
             <Button controlledBy={"text"}  color={"pink"} affordance={"secondary"}>Click Me!</Button>

            </Text>
            <Button baseSize={"lg"} color={"red"} affordance={"tertiary"}>Hello group</Button>
            <Button>Click Me!</Button>

            <Button baseSize={"lg"} asStack css={{ width: "200px"}} height={"fit"} affordance={"secondary"} color={"pink"}>
                <Stack gap={"tighter"} padding={"loose"} width={"fill"} height={"fill"} positionAlong={"center"} positionAcross={"center"}>
                    <Text controlledBy={"button"}>Subscribe Monthly</Text>
                    <Text dim shrink controlledBy={"button"}>$9.95 per month</Text>
                </Stack>
            </Button>

        </Stack>
          
      </div>
    )
  }
  
  export default Home