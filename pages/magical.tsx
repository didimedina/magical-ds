import type { NextPage } from "next";
import Head from "next/head";
import * as Stack from "../components/_primitives/Stack";
import Box from "../components/_primitives/Box";
import { css, theme } from "../stitches.config";
import Text from "../components/_primitives/Text";

const calLayout = css({
    display: "flex",
    flexDirection: "row",
    alignContent: "center"
})

const Magical: NextPage = () => {
    return (
        <Box>
        <Head>
            <title>Magical</title>
            <meta name="description" content="The start of something awesome!" />
            <link rel="icon" href="/favicon.ico" />
        </Head>
        <Stack.Root width={"screen"} height={"screen"} direction={"horizontal"}>
            <Stack.Item width={"1fr"} css={{ backgroundColor: "$slate2"}}>Testing</Stack.Item>
            <Stack.Item width={"small"}>
                <Stack.Root >
                    <Text>Testing text component...</Text>
                </Stack.Root>
            </Stack.Item>
        </Stack.Root>
        {/* @ts-nocheck */}
    
        {/* <Stack.Root space={"tight"} display={"flex"}>
            <Stack.Item width={"1fr"}>
                <Button.Root></Button.Root>
            </Stack.Item>
            <Stack.Item width={"1fr"}>
                <Button.Root></Button.Root>
            </Stack.Item>
        </Stack.Root> */}
        </Box>
    )
}

export default Magical