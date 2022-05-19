import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Stack"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-stack-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseStack = buildComponentWithDataType("Stack", "div")

const StyledStack = styled(BaseStack,{
    
    // Base styles
    display: "flex", // should this allow for inline-flex passed as a variable?
    flexWrap: "nowrap",
    $$stackFontSize: theme.fontSizes.fontSize3,
    fontSize: "$$stackFontSize",
    
    variants: {
        grow: {
            true: { flexGrow: 1 } 
        },
        padding: {
            none: { padding: 0 },
            tighter: { padding: "calc($$stackFontSize * 0.25)" },
            tight: { padding: "calc($$stackFontSize * 0.5)" },
            regular: { padding: "$$stackFontSize" },
            loose: { padding: "calc($$stackFontSize * 1.5)" },
            looser: { padding: "calc($$stackFontSize * 2)" },
        },
        gap: {
            none: { gap: 0 },
            tighter: { gap: "calc($$stackFontSize * 0.25)" },
            tight: { gap: "calc($$stackFontSize * 0.5)" },
            regular: { gap: "$$stackFontSize" },
            loose: { gap: "calc($$stackFontSize * 1.5)" },
            looser: { gap: "calc($$stackFontSize * 2)" },
        },
        overflow: {
            hide: { overflow: "hidden" },
            show: { overflow: "visible" },
            scroll: { overflow: "scroll" }
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
            screen: { width: "100vw" },
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
            xs: { width: "calc($$stackFontSize * 14)" }, // 196px
            sm: { width: "calc($$stackFontSize * 20)" }, // 280px
            md: { width: "calc($$stackFontSize * 24)" }, // 336px
            lg: { width: "calc($$stackFontSize * 32)" }, // 448px
            xl: { width: "calc($$stackFontSize * 48)" }, // 672px
        },
        height: {
            screen: { height: "100vh" },
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
            xs: { height: "calc($$stackFontSize * 14)" }, // 196px
            sm: { height: "calc($$stackFontSize * 20)" }, // 280px
            md: { height: "calc($$stackFontSize * 24)" }, // 336px
            lg: { height: "calc($$stackFontSize * 32)" }, // 448px
            xl: { height: "calc($$stackFontSize * 48)" }, // 672px
            // DECIDE: should we add mixmax() options?
        },
        
        positionAcross: {
            start: { alignItems: "flex-start" },
            center: { alignItems: "center" },
            end: { alignItems: "flex-end" },
        },
        positionAlong: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
            distribute: { justifyContent: "space-between" }
        },
    },
    defaultVariants: {
        width: "auto",
        height: "auto",
        axis: "vertical",
        positionAcross: "start",
        positionAlong: "start",
        overflow: "show",
        padding: "none",
        gap: "none",
    }
})


const Stack = StyledStack


export default Stack