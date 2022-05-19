import type { NextPage } from "next";
import Head from "next/head";
import Stack from "../components/_primitives/Stack";
import * as Button from "../components/_primitives/Button";
import Box from "../components/_primitives/Box";
import { css, theme } from "../stitches.config";
import Text from "../components/_primitives/Text";
import { CaretLeft, CloudArrowUp, DotsThreeOutlineVertical, Lightning, List, Detective } from "phosphor-react";

// DO: fonts are rendering in index but not /magical why?
// look into importing the fonts through stitches instead of Next _document 

const Magical: NextPage = () => {
    return (
        <Box>
            <Head>
                <title>Magical</title>
                <meta name="description" content="The start of something awesome!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Stack axis={"horizontal"} padding={"none"} width={"screen"} height={"screen"}> 
                <Stack gap={"looser"} height={"fill"} grow positionAcross={"center"}>
                    <Stack padding={"regular"} css={{ flexShrink: 0 /* why is this required in this contenxt? */ }} width={"fill"} height={"fit"}>
                        <Stack css={{height: "32px"}} axis={"horizontal"} positionAlong={"distribute"} width={"fill"}>
                            <Stack axis={"horizontal"} gap={"regular"} positionAcross={"center"}>
                                <Stack axis={"horizontal"}>
                                    <Button.Root iconOnly ghost size={"md"} affordance={"secondary"}><List weight="bold"/></Button.Root>
                                    <Button.Root iconOnly ghost affordance={"secondary"}><CaretLeft weight="bold"/></Button.Root>
                                </Stack>
                                <Text singleLine ellipsis size={"xl"}>Didi &#60;&#62; Tommy: Sync on cycle planning</Text>
                            </Stack>
                            <Stack axis={"horizontal"}>
                                <Button.Root affordance={"secondary"}>
                                    <Button.Icon>
                                        <Detective weight="bold"/>
                                    </Button.Icon>
                                    <Button.Value>Private Notes</Button.Value>
                                </Button.Root>
                                <Button.Root iconOnly ghost dim affordance={"secondary"}><CloudArrowUp weight="bold"/></Button.Root>
                                <Button.Root iconOnly ghost dim affordance={"secondary"}><Lightning weight="bold"/></Button.Root>
                                <Button.Root iconOnly ghost dim affordance={"secondary"}><DotsThreeOutlineVertical weight="fill"/></Button.Root>
                            </Stack>
                        </Stack>
                    </Stack>
                    <Stack css={{ maxWidth: "65ch"}} width={"fill"} grow overflow={"scroll"}>
                        <Stack gap={"tighter"} overflow={"show"}>
                            <Text size={"xl"} bold>Agenda:</Text>
                            <Text size={"md"}>• Review designs for next cycle</Text>
                            <Text size={"md"}>• <Button.Root inline affordance={"secondary"} color={"orange"}>@tommy</Button.Root> make final decisions for eng</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack css={{ backgroundColor: theme.colors.slate2 }} height={"fill"} width={"sm"}>
                    
                </Stack>
            </Stack>
        </Box>
    )
}

export default Magical