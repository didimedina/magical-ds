import { styled, theme } from '../../stitches.config';

/* -------------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------*/

const StyledIcon = styled("div", {

    // Constant variables...
    $$iconColor: theme.colors.slate12,

    // Base styles...
    fontSize: "$$iconFontSize",
    color: "$$iconColor",
    display: "inline",
    height: "fit-content",
    width: "fit-content",
    
    '& svg': {
        width: "calc($$iconFontSize * 1.25)",
        height: "calc($$iconFontSize * 1.25)",
    },

    // Configurable styles through props...
    variants: {
        align: {/* Add text align options here and set default to left */},
        fontSize: {
            xs: {
                $$iconFontSize: theme.fontSizes.fontSize1
            },
            sm: {
                $$iconFontSize: theme.fontSizes.fontSize2
            },
            md: {
                $$iconFontSize: theme.fontSizes.fontSize3
            },
            lg: {
                $$iconFontSize: theme.fontSizes.fontSize4
            },
            xl: {
                $$iconFontSize: theme.fontSizes.fontSize5
            },
            ['2xl']: {
                $$iconFontSize: theme.fontSizes.fontSize6,
            },
            ['3xl']: {
                $$iconFontSize: theme.fontSizes.fontSize7
            },
            ['4xl']: {
                $$iconFontSize: theme.fontSizes.fontSize8
            },
        },
        controlledBy: {
            button: {
                $$iconFontSize: "$$buttonFontSize",
                $$iconColor: "$$buttonColor", 
                $$iconColorDimmed: "$$buttonColorDimmed"
            }
        },
        shrink: {
            true: {
                '& svg': {
                    width: "calc($$iconFontSize * 0.75)",
                    height: "calc($$iconFontSize * 0.75)",
                }
            }
        },
        dim: {
            true: {
                '& svg': {
                    color: "$$iconColorDimmed",
                }
            }
        },
    },


    defaultVariants: {
        fontSize: "md"
    }

})

const Icon = StyledIcon
export default Icon
