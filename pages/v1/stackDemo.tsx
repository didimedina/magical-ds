import type { NextPage } from "next";
import Head from "next/head";
import Box from "../../components/v1/Box";
import Text from "../../components/v1/Text";
import * as Button from "../../components/v1/Button";
import Stack from "../../components/v1/Stack";
import { theme } from "../../stitches.config";

const StackDemo: NextPage = () => {
    return (
        <Box>
            {/* Simple Example */}
            {/* <Stack height={"screen"} width={"screen"} utilFill={"blue"} axis={"horizontal"} positionAlong={"center"} positionAcross={"center"}>
                <Box>Child</Box>
                <Box>Child</Box>
            </Stack> */}

            {/* Toast Example */}
            <Stack css={{ backgroundColor: theme.colors.slate4 }} width={"screen"} height={"screen"} positionAcross={"center"} positionAlong={"center"}>
                <Stack css={{ backgroundColor: theme.colors.slate1, borderRadius: 10, boxShadow: theme.shadows.sm }} padding={"loose"} width={"fill70"} gap={"loose"}>
                    <Stack gap={"tighter"}>
                        <Text size={"xl"}>Looks like you’re in New York, the city that never sleeps!</Text>
                        <Text dim>We recommend updating your timezone so your events present themselves properly.</Text>
                    </Stack>
                    <Stack axis={"horizontal"} gap={"tight"}>
                        <Button.Root>Take Action</Button.Root>
                        <Button.Root affordance={"tertiary"}>Dismiss</Button.Root>
                    </Stack>
                </Stack>
            </Stack>


            {/* Completed Example */}
        
            {/* <Stack css={{ backgroundColor: theme.colors.slate4 }} width={"screen"} height={"screen"} axis={"vertical"} positionAcross={"center"} positionAlong={"center"}>
                <Stack css={{ backgroundColor: theme.colors.slate1, borderRadius: 10, boxShadow: theme.shadows.sm }} width={"fill60"} padding={"looser"} gap={"loose"}>
                    <Stack gap={"tight"}>
                        <Text size={"xl"}>Looks like you’re in New York, the city that never sleeps!</Text>
                        <Text dim>We recommend updating your timezone so your events present themselves properly.</Text>
                    </Stack>
                    <Stack axis={"horizontal"} gap={"tight"}>
                        <Button.Root scale={"lg"}>Change Timezone</Button.Root>
                        <Button.Root scale={"lg"} dim affordance={"tertiary"}>Dismiss</Button.Root>
                    </Stack>
                </Stack>
            </Stack> */}

        </Box>
    )
}

export default StackDemo