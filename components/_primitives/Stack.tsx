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
        axis: "vertical",
        width: "auto",
        height: "auto",
        positionAcross: "start",
        positionAlong: "start",
    }
})

const StyledItem = styled(BaseItem,{

    // display: "flex",
    // flexWrap: "nowrap",
    $$stackItemFontSize: theme.fontSizes.fontSize3,
    fontSize: "$$stackItemFontSize",

    variants: {
        overflow: {
            hide: { overflow: "hidden" },
            show: { overflow: "visible" },
            scroll: { overflow: "visible" }
        },
        grow: {
            true: { flexGrow: 1 }
        },
        width: {
            'same-as-height': { aspectRatio: "1 / 1" },
            fill10: { width: "10%"}, 
            fill20: { width: "20%"}, 
            fill30: { width: "30%"}, 
            fill40: { width: "40%"}, 
            fill50: { width: "50%"}, 
            fill60: { width: "60%"}, 
            fill70: { width: "70%"}, 
            fill80: { width: "80%"}, 
            fill90: { width: "90%"}, 
            fill: { width: "100%"}, 
            fit:  { width: "fit-content" },
            auto:  { width: "auto" },
            xs: { width: "calc($$stackItemFontSize * 14)" }, // 196px
            sm: { width: "calc($$stackItemFontSize * 20)" }, // 280px
            md: { width: "calc($$stackItemFontSize * 24)" }, // 336px
            lg: { width: "calc($$stackItemFontSize * 32)" }, // 448px
            xl: { width: "calc($$stackItemFontSize * 48)" }, // 672px
        },
        height: {
            'same-as-width': { aspectRatio: "1 / 1" },
            fill10: { height: "10%"}, 
            fill20: { height: "20%"}, 
            fill30: { height: "30%"}, 
            fill40: { height: "40%"}, 
            fill50: { height: "50%"}, 
            fill60: { height: "60%"}, 
            fill70: { height: "70%"}, 
            fill80: { height: "80%"}, 
            fill90: { height: "90%"}, 
            fill: { height: "100%"}, 
            fit:  { height: "fit-content" },
            auto:  { height: "auto" },
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
        overflow: "hide"
    }

})

const Root = StyledRoot
const Item = StyledItem

export { Root, Item }