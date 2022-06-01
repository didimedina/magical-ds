import { styled, theme } from '../../stitches.config';
import { buildComponentWithDataType } from './utils';

// HEADLESS ---------------------------------------------------------------------------

const BaseButton = buildComponentWithDataType("Button", "button");


// STYLED ---------------------------------------------------------------------------

const StyledButton = styled(BaseButton, {
    // Static
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
        fontSize: {
            // can you change size without changing font size ie looser padding same font?
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
                $$buttonColorDimmed: "$$buttonColors6",
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


// EXPORTS ---------------------------------------------------------------------------

export const Button = StyledButton

 