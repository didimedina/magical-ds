import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Root" | "Item"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-stack-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseRoot = buildComponentWithDataType("Root", "div")
const BaseItem = buildComponentWithDataType("Item", "div")

const StyledRoot = styled(BaseRoot,{
    
    // Base styles
    display: "flex", // should this allow for inline-flex passed as a variable?
    flexWrap: "nowrap",
    $$stackRootFontSize: theme.fontSizes.fontSize3,
    fontSize: "$$stackRootFontSize",
    
    variants: {
        padding: {
            tighter: { padding: "calc($$stackRootFontSize * 0.25)" },
            tight: { padding: "calc($$stackRootFontSize * 0.5)" },
            regular: { padding: "$$stackRootFontSize" },
            loose: { padding: "calc($$stackRootFontSize * 1.5)" },
            looser: { padding: "calc($$stackRootFontSize * 2)" },
        },
        gap: {
            tighter: { gap: "calc($$stackRootFontSize * 0.25)" },
            tight: { gap: "calc($$stackRootFontSize * 0.5)" },
            regular: { gap: "$$stackRootFontSize" },
            loose: { gap: "calc($$stackRootFontSize * 1.5)" },
            looser: { gap: "calc($$stackRootFontSize * 2)" },
        },
        overflow: {
            hide: { overflow: "hidden" },
            show: { overflow: "visible" },
            scroll: { overflow: "visible" }
        },
        axis: {
            vertical: {
                flexDirection: "column",
            },
            horizontal: {
                flexDirection: "row",
            },
        },
        width: {
            fill: { width: "100%" },
            screen: { width: "100vw" },
            auto: { width: "auto" },
            fit: {width: "fit-content" }
        },
        height: {
            fill: { height: "100%" },
            screen: { height: "100vh" },
            auto: { height: "auto" },
            fit: { height: "fit-content" }
        },
        
        positionAcross: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            end: { alignItems: "flex-end" },
            // distribute: { alignItems: "space-between" }, // <- this isn't valid code. 
            // you can only distribute along the axis not across. 
            // it makes sense but isn't obvious as to why natrually
            // for this reason it's not supported to prevent confusion. 
        },
        positionAlong: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
            // distribute: { justifyContent: "space-between" },
        },
    },
    defaultVariants: {
        width: "auto",
        height: "auto",
        axis: "vertical",
        positionAcross: "start",
        positionAlong: "start",
        overflow: "hide",
        padding: "regular"
    }
})

const StyledItem = styled(BaseItem,{

    display: "flex",
    flexWrap: "nowrap",
    $$stackItemFontSize: theme.fontSizes.fontSize3,
    fontSize: "$$stackItemFontSize",

    variants: {
        padding: {
            tighter: { padding: "calc($$stackItemFontSize * 0.25)" },
            tight: { padding: "calc($$stackItemFontSize * 0.5)" },
            regular: { padding: "$$stackItemFontSize" },
            loose: { padding: "calc($$stackItemFontSize * 1.5)" },
            looser: { padding: "calc($$stackItemFontSize * 2)" },
        },
        gap: {
            tighter: { gap: "calc($$stackItemFontSize * 0.25)" },
            tight: { gap: "calc($$stackItemFontSize * 0.5)" },
            regular: { gap: "$$stackItemFontSize" },
            loose: { gap: "calc($$stackItemFontSize * 1.5)" },
            looser: { gap: "calc($$stackItemFontSize * 2)" },
        },
        positionAcross: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            end: { alignItems: "flex-end" },
            // distribute: { alignItems: "space-between" }, // <- this isn't valid code. 
            // you can only distribute along the axis not across. 
            // it makes sense but isn't obvious as to why natrually
            // for this reason it's not supported to prevent confusion. 
        },
        positionAlong: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
            // distribute: { justifyContent: "space-between" },
        },
        overflow: {
            hide: { overflow: "hidden" },
            show: { overflow: "visible" },
            scroll: { overflow: "visible" }
        },
        grow: {
            true: { flexGrow: 1 }
        },
        width: {
            auto: { width: "auto" },
            fit: { width: "fit-content" },
            fill: { width: "100%"}, 
            fill10: { width: "10%"}, 
            fill20: { width: "20%"}, 
            fill30: { width: "30%"}, 
            fill40: { width: "40%"}, 
            fill50: { width: "50%"}, 
            fill60: { width: "60%"}, 
            fill70: { width: "70%"}, 
            fill80: { width: "80%"}, 
            fill90: { width: "90%"}, 
            height: { aspectRatio: "1 / 1" },
            xs: { width: "calc($$stackItemFontSize * 14)" }, // 196px
            sm: { width: "calc($$stackItemFontSize * 20)" }, // 280px
            md: { width: "calc($$stackItemFontSize * 24)" }, // 336px
            lg: { width: "calc($$stackItemFontSize * 32)" }, // 448px
            xl: { width: "calc($$stackItemFontSize * 48)" }, // 672px
        },
        height: {
            auto: { height: "auto" },
            fit: { height: "fit-content" },
            fill: { height: "100%"}, 
            fill10: { height: "10%"}, 
            fill20: { height: "20%"}, 
            fill30: { height: "30%"}, 
            fill40: { height: "40%"}, 
            fill50: { height: "50%"}, 
            fill60: { height: "60%"}, 
            fill70: { height: "70%"}, 
            fill80: { height: "80%"}, 
            fill90: { height: "90%"}, 
            width: { aspectRatio: "1 / 1" },
            // DO: should heights be the same as widths? Heights take up less vertical space...
            xs: { height: "calc($$stackItemFontSize * 14)" }, // 196px
            sm: { height: "calc($$stackItemFontSize * 20)" }, // 280px
            md: { height: "calc($$stackItemFontSize * 24)" }, // 336px
            lg: { height: "calc($$stackItemFontSize * 32)" }, // 448px
            xl: { height: "calc($$stackItemFontSize * 48)" }, // 672px
            // DECIDE: should we add mixmax() options?
        },
    },
    defaultVariants: {
        width: "auto",
        height: "auto",
        overflow: "hide",
        
    }

})

const Root = StyledRoot
const Item = StyledItem

export { Root, Item }


/* PROTOTYPE ---------

<Box 
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
            </Box>
*/