/* TODOs
    [] Support elippses and text not wrapping. useful for titles and btn text
*/

import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Text"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseText = buildComponentWithDataType("Text", "p")


/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/


const StyledText = styled(BaseText, {

    fontSize: "$$textFontSize",
    color: theme.colors.slate12,
    lineHeight: "calc($$textFontSize * 1.125)",
    display: "inline",

    variants: {
        baseSize: {
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
                color: "$$buttonColor", // <- what if this is on black bg do you need to do all the
                // compound variants here as well to handle the exceptions?
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
        baseSize: "md"
    }

})

const Text = StyledText
export default Text
