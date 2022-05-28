import type { NextPage } from 'next'
import Head from 'next/head'
import Box from '../../components/v1/Box'
import Stack from '../../components/v2/Stack'
import { Button } from '../../components/v2/Button'
import Text from '../../components/v2/Text'
import Icon from '../../components/v2/Icon'
import { AirplaneTakeoff, HouseSimple } from 'phosphor-react'
import { SmartButton } from '../../components/_playground'

const Page: NextPage = () => {

    return (
      <div>
        <Head>
          <title>Magical Design System</title>
          <meta name="description" content="The start of something awesome!" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Stack height={"screen"} positionAcross={"center"} positionAlong={"center"}>
            <SmartButton/>
        </Stack>
          
      </div>
    )
  }
  
  export default Page