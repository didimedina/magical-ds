import type { NextPage } from "next";
import Head from "next/head";
import * as Stack from "../components/_primitives/Stack";
import * as Button from "../components/_primitives/Button";
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
        <Box css={{ height: "100vh", width: "100vw" }}>
            <Head>
                <title>Magical</title>
                <meta name="description" content="The start of something awesome!" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {/* <Stack.Root css={{backgroundColor: "$blue3"}} padding={"regular"} gap={"regular"} width={"fit"} height={"fit"} axis={"horizontal"}>
                <Button.Root>Button</Button.Root>
                <Button.Root>Button</Button.Root>
                <Button.Root>Button</Button.Root>
                <Button.Root>Button</Button.Root>
            </Stack.Root> */}
            <Stack.Root 
                css={{backgroundColor: "$blue3"}} 
                axis={"horizontal"}
                padding={"regular"} 
                gap={"regular"} 
                width={"fill"} 
                height={"fill"}
                positionAlong={"start"}
                positionAcross={"start"}
                >
                
                <Stack.Item css={{backgroundColor: "$blue6"}} grow height={"sm"} width={"fill50"}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus quae pariatur ad rem temporibus. Possimus, laborum accusantium! Ab similique quos voluptatum explicabo ducimus dolor a rem quisquam, odit, ratione quae suscipit consectetur magni iusto consequuntur eum culpa fugit placeat aliquam, optio error inventore. Pariatur, tenetur molestias. Eum quibusdam placeat voluptatum corrupti molestiae explicabo, eveniet quasi. Nihil, dolorum quae. Vero animi perspiciatis placeat nisi eaque libero unde in harum fugit architecto, est doloribus, quod voluptas totam numquam voluptatibus cumque? Vitae, incidunt magnam id quam maiores vel voluptatibus accusantium praesentium odit dolor sapiente dolores dolore ullam ea illum aperiam atque quae impedit eaque, nemo laborum unde nulla? Amet repellendus alias itaque inventore voluptates tenetur illo nulla laboriosam, fuga, tempora sequi repudiandae ipsa sit aliquid nemo voluptatum maxime? Natus earum architecto mollitia. Unde possimus ea nisi fugit accusamus rerum dicta, reprehenderit omnis quibusdam officiis. Blanditiis eius et a eligendi? Rerum nihil neque odit enim modi, quod, fugit illum eligendi incidunt quis impedit saepe possimus maiores architecto non blanditiis! Sapiente alias, ipsam voluptates optio soluta corporis! Esse hic perferendis sit! Fugiat, impedit laudantium? Quis dignissimos atque quia minus voluptatum odio laborum explicabo labore totam nostrum reiciendis ab fuga enim natus neque modi, eaque reprehenderit illo eum impedit doloribus harum voluptate accusantium fugiat. Facere repudiandae doloribus quo cupiditate, libero aliquid cum voluptatem, ea facilis error incidunt quidem delectus cumque temporibus ullam vel veniam culpa excepturi? Ipsam eius eligendi modi ut provident sunt ad! Cumque nobis obcaecati esse debitis sint voluptatem porro quidem facere officia incidunt! Fuga odit totam cupiditate et, recusandae sint dolorum accusamus in incidunt exercitationem itaque libero accusantium illo dolores corrupti quis! Magni quia modi assumenda deserunt dolor doloremque harum, at omnis, a et ut, quisquam consequatur eius fugiat porro aliquid praesentium perferendis? Asperiores vel quaerat provident delectus, aut facere. At placeat sequi illo ipsa culpa asperiores aperiam inventore ducimus quo facilis soluta, maxime vel officia possimus sint iusto facere impedit neque architecto cum commodi! Eos dolorum quae, culpa iste quia delectus odio amet repellendus enim quos natus blanditiis magni cupiditate atque illum minima quis explicabo, laboriosam fugit vel quas harum tenetur? Voluptate doloremque saepe quas ipsum eius odit iste dolore impedit neque, dignissimos enim at cupiditate delectus harum modi adipisci repellendus magni natus aliquam fugit similique. Voluptas illum omnis quod totam natus harum vero officia consectetur facere nostrum non obcaecati rerum, labore voluptatem provident. Tempora perspiciatis laudantium impedit, a eius labore reiciendis!
                </Stack.Item>
                <Stack.Item>
                    <Button.Root>Button</Button.Root>
                </Stack.Item>

            </Stack.Root>
            {/* Grid Example -- doesn't work :/ */}
            {/* <Box 
                css={{ 
                    display: "grid",  
                    height: "100%", 
                    width: "100%", 
                    columnGap: 10,
                    backgroundColor: "$blue4",
                    gridAutoFlow: "column", // <- this sets the direction
                    gridAutoColumns: "1fr 200px", // <- this sets the behavior of auto added culomns // can this be a localVariable set by child?
                    // this also doesn't allow a child to have a fixed size...
                    gridTemplateRows: "1fr", // <- this shuts off adding implicit rows
                    // gridAutoFlow: "row", 
                    // gridAutoRows: "1fr", 
                    // gridTemplateColumns: "1fr",
                }}> */}
                {/* <Box css={{ backgroundColor: "$blue5", width: "100%"}}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa at dolor aperiam animi, quae voluptates officia quo ipsa, cum dolorem recusandae porro, quasi minima praesentium voluptate? Illo, nihil adipisci neque maxime mollitia facere recusandae aliquid facilis magnam dignissimos, molestiae aut, deleniti vel! Expedita dolor incidunt tenetur aut deleniti odio recusandae blanditiis culpa cum, officiis dolorum ratione voluptates ipsa nostrum saepe possimus ullam eaque excepturi facere minima iste maiores quam aliquam. Aspernatur facere necessitatibus sapiente quibusdam error odit assumenda debitis velit amet voluptate iusto quaerat, autem perferendis quasi officiis, dolor unde perspiciatis? Itaque labore earum, officia eos consequatur, aperiam praesentium excepturi, et minus ad repudiandae blanditiis. Blanditiis eos ad molestias ut soluta nulla error at saepe dicta beatae dolor quasi autem commodi molestiae quaerat reprehenderit voluptas perferendis itaque sit facere, fugiat cupiditate repellat ea. Corporis earum esse saepe debitis. Enim porro sed dolorum alias laborum, esse odit vel assumenda! Blanditiis natus aut vel sapiente nisi accusamus, obcaecati corrupti placeat sit magni aliquid omnis explicabo vero consectetur voluptas ipsam ullam cupiditate eius inventore eum quae doloribus harum maiores. Error quaerat doloremque, atque tempore cumque, eligendi optio animi omnis maxime debitis soluta. Soluta dolores expedita obcaecati, alias non sit magni suscipit omnis dignissimos?
                </Box> */}
                {/* <Box css={{ backgroundColor: "$blue6", }}>Hellow world!</Box>
                <Box css={{ backgroundColor: "$blue7", }}/>
            </Box> */}

            {/* Stack flex example */}
            {/* <Box 
                css={{ 
                    display: "flex",
                    flexDirection: "column",  
                    flexWrap: "nowrap",
                    gap: 6,
                    height: "100%", 
                    width: "200px",  
                    backgroundColor: "$red4",

                }}>
                <Box css={{ overflow: "hidden", gap: 10, backgroundColor: "$blue4", height: "120px", display: "flex",  flexDirection: "row", alignItems: "center", justifyContent: "center"  }}>
                    <Box css={{ overflow: "hidden", p: 10, wordWrap: "break-word", height: "fit-content", backgroundColor: "$blue6", }}>
                        <Button.Root>Submit</Button.Root>
                    </Box>
                    
                    <Box css={{ overflow: "scroll", p: 10, wordWrap: "break-word", flexGrow:1, width: "50%", height: "100%", backgroundColor: "$blue6", alignSelf: "stretch" }}>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta minus nemo unde saepe itaque officia beatae quidem ipsam culpa aut.
                    </Box>
                    <Box css={{ overflow: "hidden", p: 10, wordWrap: "break-word", width: "50%", height: "100%", backgroundColor: "$blue6", }}>
                        <Button.Root>Submit</Button.Root>
                    </Box>
                </Box>
                <Box css={{ overflow: "scroll", gap: 10, backgroundColor: "$green4", flexGrow: 1, flexShrink: 1, height: "200px", display: "flex",  flexDirection: "column" }}>
                    <Box css={{ backgroundColor: "$green6" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste, quasi magnam in similique cupiditate aut incidunt eos officia hic placeat dolor, repudiandae aperiam aliquam sequi temporibus velit necessitatibus veritatis! Delectus architecto natus sunt distinctio dicta cupiditate eos quas nesciunt repellat dolores veniam iure magnam sapiente non impedit, suscipit a. Eos laudantium possimus necessitatibus hic corrupti, molestiae expedita doloremque cumque soluta provident voluptatum libero labore sit velit deserunt esse repellendus odio voluptatem explicabo dignissimos quam quae unde! Eveniet minus fuga adipisci recusandae esse debitis odit voluptatem ullam velit. Necessitatibus ex consequatur doloremque deserunt? Modi nam explicabo veniam in nesciunt non nulla laboriosam ullam autem at eos omnis architecto saepe placeat, officiis illum dolor nemo aut adipisci fugit, magnam accusamus. Similique aliquid quas tenetur asperiores est sapiente et, eveniet quisquam numquam dolores doloribus quidem blanditiis, nam enim optio, excepturi reprehenderit beatae. Modi incidunt animi pariatur labore id? Minus debitis fugit autem veniam, aut, fugiat tempore eos, odio cumque atque sunt eum. Quisquam ab animi hic tempore laudantium, commodi ipsum laborum error aspernatur illum unde molestiae quam quos, sint ea quibusdam illo, ratione consequuntur consectetur distinctio voluptatibus sit. Voluptatibus deleniti officia quasi nihil voluptatem modi repellendus doloremque itaque dignissimos accusamus, praesentium laudantium.
                    </Box>
                    <Box css={{ backgroundColor: "$green6" }}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A iste, quasi magnam in similique cupiditate aut incidunt eos officia hic placeat dolor, repudiandae aperiam aliquam sequi temporibus velit necessitatibus veritatis! Delectus architecto natus sunt distinctio dicta cupiditate eos quas nesciunt repellat dolores veniam iure magnam sapiente non impedit, suscipit a. Eos laudantium possimus necessitatibus hic corrupti, molestiae expedita doloremque cumque soluta provident voluptatum libero labore sit velit deserunt esse repellendus odio voluptatem explicabo dignissimos quam quae unde! Eveniet minus fuga adipisci recusandae esse debitis odit voluptatem ullam velit. Necessitatibus ex consequatur doloremque deserunt? Modi nam explicabo veniam in nesciunt non nulla laboriosam ullam autem at eos omnis architecto saepe placeat, officiis illum dolor nemo aut adipisci fugit, magnam accusamus. Similique aliquid quas tenetur asperiores est sapiente et, eveniet quisquam numquam dolores doloribus quidem blanditiis, nam enim optio, excepturi reprehenderit beatae. Modi incidunt animi pariatur labore id? Minus debitis fugit autem veniam, aut, fugiat tempore eos, odio cumque atque sunt eum. Quisquam ab animi hic tempore laudantium, commodi ipsum laborum error aspernatur illum unde molestiae quam quos, sint ea quibusdam illo, ratione consequuntur consectetur distinctio voluptatibus sit. Voluptatibus deleniti officia quasi nihil voluptatem modi repellendus doloremque itaque dignissimos accusamus, praesentium laudantium.
                    </Box>
                </Box>
            </Box> */}
        </Box>
    )
}

export default Magical