import type { NextPage } from 'next'
import Head from 'next/head'
import Stack from '../../components/v2/Stack'
import Button from '../../components/v2/Button'
import Text from '../../components/v2/Text'
import Icon from '../../components/v2/Icon'
import { AirplaneTakeoff, HouseSimple, IconContext } from 'phosphor-react'

const Home: NextPage = () => {

    return (
      <div>
        <Head>
          <title>Magical Design System</title>
          <meta name="description" content="The start of something awesome!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack height={"screen"} density={"loosest"} gap={"loosest"} axis={"vertical"} positionAcross={"center"} positionAlong={"center"}>
            {/* Using Stack to make components more flexible */}
            <Text fontSize={"2xl"}> Hey man look at this:
             <Button controlledBy={"text"} color={"blue"} affordance={"secondary"}>Click Me!</Button>

            </Text>
            <Button color={"red"} affordance={"tertiary"}>Hello group</Button>
            <Button affordance={"secondary"} height={"fixed"} width={"height"} color={"blue"}>
              <Icon dim controlledBy={"button"}><AirplaneTakeoff/></Icon>
            </Button>
            <Button affordance={"secondary"} color={"blue"}>
              <Stack gap={"loose"} axis={"horizontal"} positionAcross={"center"}>
                <Icon controlledBy={"button"}><AirplaneTakeoff/></Icon>
                <Text controlledBy={"button"}>Book Flight</Text>
              </Stack>
            </Button>
            <Button density={"loose"} height={"fit"} affordance={"primary"} color={"red"}>
                <Stack controlledBy={"button"} gap={"normal"} width={"fill"} height={"fill"} positionAlong={"center"} positionAcross={"center"}>
                    <Text controlledBy={"button"}>Subscribe Monthly</Text>
                    <Text dim shrink controlledBy={"button"}>$9.95 per month</Text>
                </Stack>
            </Button>

        </Stack>
          
      </div>
    )
  }
  
  export default Home