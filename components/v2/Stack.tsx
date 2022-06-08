import { styled, theme } from '../../stitches.config';

/* -------------------------------------------------------------------------------------------------
 * Stack
 * -----------------------------------------------------------------------------------------------*/

const StyledStack = styled("div", {
    
    // Constant variables...
    $$stackFontSize: theme.fontSizes.fontSize3,

    // Base styles...
    display: "flex",
    flexWrap: "nowrap",
    fontSize: "$$stackFontSize",
    
    variants: {
        density: {
            normal: { $$stackDensity: "1" },
            loose: { $$stackDensity: "1.25" },
            looser: { $$stackDensity: "1.5" },
            loosest: { $$stackDensity: "2" },
        },
        utilBorder: {
            red: {
                boxShadow: '0 0 0 2px $colors$red9'
            },
            green: {
                boxShadow: '0 0 0 2px $colors$green9'
            },
            blue: {
                boxShadow: '0 0 0 2px $colors$blue9'
            },
        },
        utilFill: {
            red: {
                backgroundColor: '$red4'
            },
            green: {
                backgroundColor: '$green4'
            },
            blue: {
                backgroundColor: '$blue4'
            },
        },
        flexGrow: {
            true: { flexGrow: 1 } 
        },
        flexShrink: {
            true: { flexShrink: 1 } 
        },
        px: {
            none: { px: 0 },
            normal: { px: "calc($$stackFontSize * $$stackDensity * 0.25)" },
            loose: { px: "calc($$stackFontSize * $$stackDensity * 0.5)" },
            looser: { px: "calc($$stackFontSize * $$stackDensity * 0.75)" },
            loosest: { px: "calc($$stackFontSize * $$stackDensity * 1)" },
        },
        py: {
            none: { py: 0 },
            normal: { py: "calc($$stackFontSize * $$stackDensity * 0.25)" },
            loose: { py: "calc($$stackFontSize * $$stackDensity * 0.5)" },
            looser: { py: "calc($$stackFontSize * $$stackDensity * 0.75)" },
            loosest: { py: "calc($$stackFontSize * $$stackDensity * 1)" },
        },
        gap: {
            none: { gap: 0 },
            normal: { gap: "calc($$stackFontSize * $$stackDensity * 0.125)" },
            loose: { gap: "calc($$stackFontSize * $$stackDensity * 0.25)" },
            looser: { gap: "calc($$stackFontSize * $$stackDensity * 0.5)" },
            loosest: { gap: "calc($$stackFontSize * $$stackDensity * 1)" },
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
            fixed1: { width: "calc($$stackFontSize * 2)" },
            fixed2: { width: "calc($$stackFontSize * 3)" },
            fixed3: { width: "calc($$stackFontSize * 5)" },
            fixed4: { width: "calc($$stackFontSize * 8)" },
            fixed5: { width: "calc($$stackFontSize * 12)" },
            fixed6: { width: "calc($$stackFontSize * 16)" },
            fixed7: { width: "calc($$stackFontSize * 20)" },
            fixed8: { width: "calc($$stackFontSize * 24)" },
            fixed9: { width: "calc($$stackFontSize * 32)" },
            fixed10: { width: "calc($$stackFontSize * 48)" }, 
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
            fixed1: { height: "calc($$stackFontSize * 2)" },
            fixed2: { height: "calc($$stackFontSize * 3)" },
            fixed3: { height: "calc($$stackFontSize * 5)" },
            fixed4: { height: "calc($$stackFontSize * 8)" },
            fixed5: { height: "calc($$stackFontSize * 12)" },
            fixed6: { height: "calc($$stackFontSize * 16)" },
            fixed7: { height: "calc($$stackFontSize * 20)" },
            fixed8: { height: "calc($$stackFontSize * 24)" },
            fixed9: { height: "calc($$stackFontSize * 32)" },
            fixed10: { height: "calc($$stackFontSize * 48)" }, 
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
        controlledBy: {
            button: {
                $$stackDensity: "$$buttonDensity",
                $$stackFontSize: "$$buttonFontSize"
            }
        }
    },
    
    defaultVariants: {
        density: "normal",
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