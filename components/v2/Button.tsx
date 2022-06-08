import { motion } from 'framer-motion';
import { styled, theme } from '../../stitches.config';

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

const StyledButton = styled("button", {
    // Reset styles...
    all: 'unset',
    cursor: "pointer",
    boxSizing: 'border-box',
    userSelect: 'none',

    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    

    //Constant variables...
    $$buttonFontSize: theme.fontSizes.fontSize3,

    // Base styles...
    fontSize: "$$buttonFontSize",
    lineHeight: "$$buttonFontSize",
    borderRadius: "calc($$buttonFontSize * 0.25)",
    px: "calc($$buttonFontSize * $$buttonDensity * 1.25)",
    py: "calc($$buttonFontSize * $$buttonDensity * 0.5)",
    color: "$$buttonColor",
    backgroundColor: "$$buttonBackgroundColor",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    whiteSpace: "nowrap",


    variants: {
        height: {
            fixed: { height: "calc($$buttonFontSize * $$buttonDensity * 2.5)" },
            fit: { height: "fit-content" }
        },
        width: {
            fill: { width: "100%" },
            fit: { width: "fit-content" },
            height: {
                width: "fit-content",
                aspectRatio: "1 / 1",
            }
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
            blue: {
                $$buttonColors1: theme.colors.blue1,
                $$buttonColors2: theme.colors.blue2,
                $$buttonColors3: theme.colors.blue3,
                $$buttonColors4: theme.colors.blue4,
                $$buttonColors5: theme.colors.blue5,
                $$buttonColors6: theme.colors.blue6,
                $$buttonColors7: theme.colors.blue7,
                $$buttonColors8: theme.colors.blue8,
                $$buttonColors9: theme.colors.blue9,
                $$buttonColors10: theme.colors.blue10,
                $$buttonColors11: theme.colors.blue11,
                $$buttonColors12: theme.colors.blue12,
            },
        },
        density: {
            normal: { $$buttonDensity: "1" },
            loose: { $$buttonDensity: "1.25" },
        },
        affordance: {
            primary: { 
                $$buttonBackgroundColor: "$$buttonColors10",
                $$buttonColor: "$$buttonColors1",
                $$buttonColorDimmed: "$$buttonColors6",
                '&:hover': { $$buttonBackgroundColor: "$$buttonColors9" },
                '&:active': { $$buttonBackgroundColor: "$$buttonColors11" },
                '&:focus': {
                    outline: "none",
                    boxShadow: '0 0 0 min(2px, calc($$buttonFontSize * 0.125)) $$buttonColors6',
                },
            },
            secondary: { 
                $$buttonBackgroundColor: "$$buttonColors5",
                $$buttonColor: "$$buttonColors10",
                $$buttonColorDimmed: "$$buttonColors8",
                '&:hover': { $$buttonBackgroundColor: "$$buttonColors4" },
                '&:active': { $$buttonBackgroundColor: "$$buttonColors6" },
                '&:focus': {
                    outline: "none",
                    boxShadow: '0 0 0 min(2px, calc($$buttonFontSize * 0.125)) $$buttonColors7',
                },
            },
            tertiary: {
                $$buttonColor: "$$buttonColors9",
                $$buttonBackgroundColor: "transparent",
                $$buttonColorDimmed: "$$buttonColors8",
                textDecoration: "underline",
                textDecorationColor: "$$buttonColors5",
                textUnderlineOffset: "calc($$buttonFontSize * 0.125)",
                textDecorationThickness: "calc($$buttonFontSize * 0.125)",
                '&:hover': { textDecorationColor: "$$buttonColors7", },
                '&:active': { $$buttonColor: "$$buttonColors11" },
                '&:focus': {
                    outline: "none",
                    boxShadow: '0 0 0 min(2px, calc($$buttonFontSize * 0.125)) $$buttonColors6',
                },
            },
        },
        ghost: {
            true: { 
                /* this is only a flag, since ghost only applies to affordance secondary,
                the styles are defined in the compoundVariants section */ 
            }
        },
        controlledBy: {
            text: {
                $$buttonFontSize: "$$textFontSize",
                userSelect: 'text', 
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
                '&:hover': { $$buttonBackgroundColor: "$$buttonColors11" },
                '&:active': { $$buttonBackgroundColor: "$$buttonColors11" },
                '&:focus': {
                    outline: "none",
                    boxShadow: '0 0 0 min(2px, calc($$buttonFontSize * 0.125)) $$buttonColors6',
                },
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
        {
            affordance: "secondary",
            ghost: "true",
            css: { $$buttonBackgroundColor: "transparent" }
        }
    ],

    defaultVariants: {
        color: "slate",
        affordance: "primary",
        height: "fixed",
        width: "fit",
        density: "normal" 
    }
})


// EXPORTS ---------------------------------------------------------------------------

const Button = StyledButton
export default Button

 