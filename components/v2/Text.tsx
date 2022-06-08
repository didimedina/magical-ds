import { styled, theme } from '../../stitches.config';

/* -------------------------------------------------------------------------------------------------
* Text
* -----------------------------------------------------------------------------------------------*/

/* TODOs
    [] Support elippses and text not wrapping. useful for titles and btn text
*/

const StyledText = styled("p", {

    // Base styles...
    fontSize: "$$textFontSize",
    color: theme.colors.slate12,
    lineHeight: "calc($$textFontSize * 1.125)",
    display: "inline",

    variants: {
        fontSize: {
            xs: {
                $$textFontSize: theme.fontSizes.fontSize1
            },
            sm: {
                $$textFontSize: theme.fontSizes.fontSize2
            },
            md: {
                $$textFontSize: theme.fontSizes.fontSize3
            },
            lg: {
                $$textFontSize: theme.fontSizes.fontSize4
            },
            xl: {
                $$textFontSize: theme.fontSizes.fontSize5
            },
            ['2xl']: {
                $$textFontSize: theme.fontSizes.fontSize6,
            },
            ['3xl']: {
                $$textFontSize: theme.fontSizes.fontSize7
            },
            ['4xl']: {
                $$textFontSize: theme.fontSizes.fontSize8
            },
        },
        controlledBy: {
            button: {
                $$textFontSize: "$$buttonFontSize",
                color: "$$buttonColor",
            }
        },

        shrink: {
            true: {
                fontSize: "calc($$textFontSize * 0.8)",
            }
        },
        dim: {
            true: {
                // $$textColor: "calc($$textFontSize * 0.8)",
            }
        },
    },
    compoundVariants: [
        {
            dim: true,
            controlledBy: "button",
            css: {
                color: "$$buttonColorDimmed"
            }
        }
    ],


    defaultVariants: {
        fontSize: "md"
    }

})

const Text = StyledText
export default Text
