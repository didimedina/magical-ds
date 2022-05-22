import type { NextPage } from "next";
import Head from "next/head";
import Stack from "../../components/v1/Stack";
import * as Button from "../../components/v1/Button";
import Box from "../../components/v1/Box";
import { darkTheme, theme } from "../../stitches.config";
import Text from "../../components/v1/Text";
import { CaretLeft, CloudArrowUp, DotsThreeOutlineVertical, Lightning, List, Detective, Clock, CalendarBlank, CaretDown, CheckCircle, VideoCamera } from "phosphor-react";

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
            <Stack css={{ backgroundColor: theme.colors.slate1 }} axis={"horizontal"} width={"screen"} height={"screen"}> 
                <Stack grow gap={"looser"} height={"fill"} positionAcross={"center"}>
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
                                <Button.Root css={{ fontWeight: '400', }} affordance={"secondary"} color={"orange"} padding={"regular"} height={"base"}>
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
                            <Text size={"md"}>• <Button.Root inline affordance={"secondary"} color={"purple"}>@tommy</Button.Root> make final decisions for eng</Text>
                        </Stack>
                    </Stack>
                </Stack>
                <Stack css={{ backgroundColor: theme.colors.slate2, flexShrink: 0 }} height={"fill"} width={"sm"} padding={"tight"}>
                    <Stack padding={"tight"} width={"fill"} gap={"tight"}>
                        <Button.Root fontWeight={"regular"} gap={"tight"} height={"fit"} width={"fill"} positionAlong={"start"} positionAcross={"start"} padding={"tight"} ghost affordance={"secondary"}>
                            <Button.Icon><Clock weight="bold"/></Button.Icon>
                            <Button.Content gap={"tighter"} grow axis={"vertical"} positionAcross={"start"} height={"fit"} /* for some reason gap isn't being applied here */>
                                <Button.Value multiLine>Sep 30, 2021 &#40;Wed&#41; • 6:00 AM - 7:00 AM</Button.Value> 
                                <Button.Value shrink dim>in 15min</Button.Value>
                            </Button.Content>
                        </Button.Root>
                        <Button.Root ghost affordance={"secondary"}>
                            <Button.Icon><CalendarBlank weight="bold"/></Button.Icon>
                            <Button.Value>Presonal</Button.Value>
                            <Button.Icon shrink dim><CaretDown weight="fill"/></Button.Icon>
                        </Button.Root>
                        <Button.Root ghost affordance={"secondary"} color={"green"}>
                            <Button.Icon><CheckCircle weight="bold"/></Button.Icon>
                            <Button.Value>Committed</Button.Value>
                            <Button.Icon shrink dim><CaretDown weight="fill"/></Button.Icon>
                        </Button.Root>
                        <Button.Root ghost affordance={"tertiary"} color={"blue"} height={"fit"} positionAcross={"start"} padding={"tight"}>
                            <Button.Icon><VideoCamera weight="bold"/></Button.Icon>
                            <Button.Content axis={"vertical"} gap={"tight"}>
                                <Button.Value>Join Zoom</Button.Value>
                                <Button.Content gap={"tighter"}>
                                    <Button.Value ghost css={{ color: theme.colors.slate9, fontWeight: "400" }}>Meeting ID:</Button.Value>
                                    <Button.Value>7h2tyl4</Button.Value>
                                </Button.Content>
                            </Button.Content>
                        </Button.Root>
                    </Stack>
                </Stack>
            </Stack>
        </Box>
    )
}

export default Magical