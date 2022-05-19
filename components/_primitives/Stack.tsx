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
        },
        positionAlong: {
            start: { justifyContent: "flex-start" },
            center: { justifyContent: "center" },
            end: { justifyContent: "flex-end" },
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

    variants: {
        width: {
            ['1fr']: { flexBasis: "100%",}, 
            ['2fr']: { flaxBasis: "200%", },
            ['3fr']: { flexBasis: "300%",},
            ['4fr']: { flexBasis: "400%" },
            ['5fr']: { flexBasis: "500%" },
            ['6fr']: { flexBasis: "600%" },
            fit:     { width: "fit-content" },
            ['200px']: { width: "200px" },
            // support aspectRatio? 

        },
        height: {
            ['1fr']: { flexBasis: "100%",},
            ['2fr']: { flexBasis: "200%",},
            ['3fr']: { flexBasis: "300%",},
            ['4fr']: { flexBasis: "400%" },
            ['5fr']: { flexBasis: "500%" },
            ['6fr']: { flexBasis: "600%" },
            fit:     { height: "fit-content" },
            ['200px']: { height: "200px" },

        },

    },
    defaultVariants: {
        width: "1fr",
        height: "1fr",
    //     // positionChild: "start"
    }

})

const Root = StyledRoot
const Item = StyledItem

export { Root, Item }