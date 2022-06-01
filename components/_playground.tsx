// const key = "foo"
// const x = {
// [`key-${key}`]: "didi",
// foo: 4,
// ["foo"]: 4
// }
// const x = {a: 4}
// const y = {b: 5, ...{a: 4, ...{z: 4}}} // {b: 5, a: 4, z: 4}

import { ReactNode, useState } from "react";
import { Button } from "./v2/Button";
import Stack from "./v2/Stack";
import { styled, theme } from '../stitches.config'; 

// How do I express that either a value or child can be passed and at least one is required?

function BaseButton({ value, children, ...props }: { value?: string, children?: ReactNode, props: any }) {
    const [ buttonRef, setButtonRef ] = useState<HTMLButtonElement | null>();
    const hasStackAsChild = buttonRef?.children[0]?.attributes.getNamedItem('data-dscomp-stack') ?.value === "true" ? true : undefined;

    return (
        <button ref={ (ref) => setButtonRef(ref) } data-dscomp-button data-stack-as-child={hasStackAsChild} {...props}>{children? children : value}</button>
    )
}

function BaseStack(props) {
    const [ stackRef, setStackRef ] = useState<HTMLButtonElement | null>();
    const hasButtonAsParent = stackRef?.parentElement?.attributes.getNamedItem('data-dscomp-button')?.value

    console.dir(hasButtonAsParent)

    return <div ref={ (ref) => setStackRef(ref) } data-dscomp-stack data-button-as-parent={hasButtonAsParent} {...props}/> 
}


const StyledButton = styled(BaseButton, {
    all: 'unset',
    cursor: "pointer",
    display: "flex",
    boxSizing: 'border-box',
    userSelect: 'none',
    alignItems: "center",
    justifyContent: "center",
    width: "auto",

    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    
    // TODO: if theres a stack directly as a child the button parent should remove padding and set child to full width by default

    // Dynamic
    fontSize: "$$buttonFontSize",
    lineHeight: "$$buttonFontSize",
    borderRadius: "calc($$buttonFontSize * 0.25)",
    px: "calc($$buttonFontSize * 0.5)",
    py: "calc($$buttonFontSize * 0.25)",
    color: "$$buttonColor",
    backgroundColor: "$$buttonBackgroundColor",
    
    '&:focus': {
        outline: "none",
        boxShadow: '0 0 0 min(2px, calc($$buttonFontSize * 0.125)) $$buttonColors8',
    },

    '&[data-stack-as-child="true"]': {
        px: "unset",
        py: "unset",
        '& > [data-magical-stack]': {
            px: "calc($$buttonFontSize * 0.5)",
            py: "calc($$buttonFontSize * 0.25)",
            height: "100%",
            width: "100%",
        },
    },

    variants: {
        height: {
            default: { height: "calc($$buttonFontSize * 2)" },
            fit: { height: "fit-content" }
        },
        color: {
            slate: {
                $$buttonColors1: theme.colors.slate1,
                $$buttonColors2: theme.colors.slate2,
                $$buttonColors3: theme.colors.slate3,
                $$buttonColors4: theme.colors.slate4,
                $$buttonColors5: theme.colors.slate5,
                $$buttonColors6: theme.colors.slate6,
                $$buttonColors7: theme.colors.slate7,
                $$buttonColors8: theme.colors.slate8,
                $$buttonColors9: theme.colors.slate9,
                $$buttonColors10: theme.colors.slate10,
                $$buttonColors11: theme.colors.slate11,
                $$buttonColors12: theme.colors.slate12,
            },
            tomato: {
                $$buttonColors1: theme.colors.tomato1,
                $$buttonColors2: theme.colors.tomato2,
                $$buttonColors3: theme.colors.tomato3,
                $$buttonColors4: theme.colors.tomato4,
                $$buttonColors5: theme.colors.tomato5,
                $$buttonColors6: theme.colors.tomato6,
                $$buttonColors7: theme.colors.tomato7,
                $$buttonColors8: theme.colors.tomato8,
                $$buttonColors9: theme.colors.tomato9,
                $$buttonColors10: theme.colors.tomato10,
                $$buttonColors11: theme.colors.tomato11,
                $$buttonColors12: theme.colors.tomato12,
            },
            red: {
                $$buttonColors1: theme.colors.red1,
                $$buttonColors2: theme.colors.red2,
                $$buttonColors3: theme.colors.red3,
                $$buttonColors4: theme.colors.red4,
                $$buttonColors5: theme.colors.red5,
                $$buttonColors6: theme.colors.red6,
                $$buttonColors7: theme.colors.red7,
                $$buttonColors8: theme.colors.red8,
                $$buttonColors9: theme.colors.red9,
                $$buttonColors10: theme.colors.red10,
                $$buttonColors11: theme.colors.red11,
                $$buttonColors12: theme.colors.red12,
            },
            crimson: {
                $$buttonColors1: theme.colors.crimson1,
                $$buttonColors2: theme.colors.crimson2,
                $$buttonColors3: theme.colors.crimson3,
                $$buttonColors4: theme.colors.crimson4,
                $$buttonColors5: theme.colors.crimson5,
                $$buttonColors6: theme.colors.crimson6,
                $$buttonColors7: theme.colors.crimson7,
                $$buttonColors8: theme.colors.crimson8,
                $$buttonColors9: theme.colors.crimson9,
                $$buttonColors10: theme.colors.crimson10,
                $$buttonColors11: theme.colors.crimson11,
                $$buttonColors12: theme.colors.crimson12,
            },
            pink: {
                $$buttonColors1: theme.colors.pink1,
                $$buttonColors2: theme.colors.pink2,
                $$buttonColors3: theme.colors.pink3,
                $$buttonColors4: theme.colors.pink4,
                $$buttonColors5: theme.colors.pink5,
                $$buttonColors6: theme.colors.pink6,
                $$buttonColors7: theme.colors.pink7,
                $$buttonColors8: theme.colors.pink8,
                $$buttonColors9: theme.colors.pink9,
                $$buttonColors10: theme.colors.pink10,
                $$buttonColors11: theme.colors.pink11,
                $$buttonColors12: theme.colors.pink12,
            },

        },
        baseSize: {
            sm: {
                $$buttonFontSize: theme.fontSizes.fontSize2,
            },
            md: {
                $$buttonFontSize: theme.fontSizes.fontSize3,
            },
            lg: {
                $$buttonFontSize: theme.fontSizes.fontSize4,
            },
            xl: {
                $$buttonFontSize: theme.fontSizes.fontSize4,
            },
        },
        affordance: {
            primary: { 
                $$buttonBackgroundColor: "$$buttonColors10",
                $$buttonColor: "$$buttonColors1",
                $$buttonColorDimmed: "$$buttonColors6"
            },
            secondary: { 
                $$buttonBackgroundColor: "$$buttonColors4",
                $$buttonColor: "$$buttonColors10",
                $$buttonColorDimmed: "$$buttonColors8"
            },
            tertiary: {
                $$buttonColor: "$$buttonColors9",
                $$buttonBackgroundColor: "transparent",
                $$buttonColorDimmed: "$$buttonColors7",
                textDecoration: "underline",
                textDecorationColor: "$$buttonColors6",
                textUnderlineOffset: "calc($$buttonFontSize * 0.125)",
                textDecorationThickness: "calc($$buttonFontSize * 0.125)",
            },
        },
        controlledBy: {
            text: {
                $$buttonFontSize: "$$textFontSize", 
                height: "auto",
                display: "inline-flex",
                px: "calc($$buttonFontSize * 0.25)",
                py: "calc($$buttonFontSize * 0.125)",
                marginLeft: "calc($$buttonFontSize * 0.125)",
                marginRight: "calc($$buttonFontSize * 0.125)",
            },
        },
    },
    compoundVariants: [
        {
            affordance: "primary",
            color: "slate",
            css: {
                $$buttonBackgroundColor: "$$buttonColors12",
                $$buttonColorDimmed: "$$buttonColors9",
            }
        },
        {
            affordance: "secondary",
            color: "slate",
            css: {
                $$buttonColor: "$$buttonColors12",
                $$buttonColorDimmed: "$$buttonColors9",
            }
        },
    ],

    defaultVariants: {
        color: "slate",
        baseSize: "md",
        affordance: "primary",
        height: "default"
    }
})

const StyledStack = styled(BaseStack, {
    display: "flex", // should this allow for inline-flex passed as a variable?
    flexWrap: "nowrap",
    $$currentFontSize: theme.fontSizes.fontSize3,
    fontSize: "$$currentFontSize",

    '&[data-button-as-parent="true"]': {
        alignItems: "center",
        justifyContent: "center"
    },
    
    variants: {
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
        grow: {
            true: { flexGrow: 1 } 
        },
        shrink: {
            true: { flexShrink: 1 } 
        },

        padding: {
            none: { padding: 0 },
            tighter: { padding: "calc($$currentFontSize * 0.25)" },
            tight: { padding: "calc($$currentFontSize * 0.5)" },
            regular: { padding: "$$currentFontSize" },
            loose: { padding: "calc($$currentFontSize * 1.5)" },
            looser: { padding: "calc($$currentFontSize * 2)" },
        },
        gap: {
            none: { gap: 0 },
            tighter: { gap: "calc($$currentFontSize * 0.25)" },
            tight: { gap: "calc($$currentFontSize * 0.5)" },
            regular: { gap: "$$currentFontSize" },
            loose: { gap: "calc($$currentFontSize * 1.5)" },
            looser: { gap: "calc($$currentFontSize * 2)" },
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
            xs: { width: "calc($$currentFontSize * 14)" }, // 196px
            sm: { width: "calc($$currentFontSize * 20)" }, // 280px
            md: { width: "calc($$currentFontSize * 24)" }, // 336px
            lg: { width: "calc($$currentFontSize * 32)" }, // 448px
            xl: { width: "calc($$currentFontSize * 48)" }, // 672px
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
            // update hieghts to be different than widths so its more practical.
            xs: { height: "calc($$currentFontSize * 14)" }, // 196px
            sm: { height: "calc($$currentFontSize * 20)" }, // 280px
            md: { height: "calc($$currentFontSize * 24)" }, // 336px
            lg: { height: "calc($$currentFontSize * 32)" }, // 448px
            xl: { height: "calc($$currentFontSize * 48)" }, // 672px
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

// why is ...props causing a static error on StyledButton?
// using the attribute to set styles doesn't allow the user to override with props since attr is higher specificity than 
// classes which "default variants" set
export function SmartButton(){
    return (
        <>
            <StyledButton color={"red"} css={{ width: "200px"}}>
                <StyledStack width={"fill"} height={"fill"}  positionAcross={"start"}>Click Me!
                </StyledStack>
            </StyledButton>
        </>
    )
}

// asChild would work better since stack doesn't share any of the button's API and the stacks props would override any that exist.
// maybe this is a better approach?

export default SmartButton
