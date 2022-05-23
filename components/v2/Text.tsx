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

    // fontSize: "$$textFontSize",
    fontSize: "$$textFontSize",
    color: theme.colors.slate12,
    lineHeight: "calc($$textFontSize * 1.25)",
    display: "inline",

    // Set children to adopt new variables

    '& [data-magical-button]': { 
        px: "calc($$textFontSize * 0.25)",
        py: "calc($$textFontSize * 0.125)",
        // height: "calc($$textFontSize * 2.5)",
        display: "inline-flex",
        // setting to inline-flex for some reason requires an
        // explicit height to be set
        borderRadius: "calc($$textFontSize * 0.25)",
    },



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
                fontSize: "unset",
                color: "unset",
            }
        }
    },
    defaultVariants: {
        baseSize: "md"
    }

})

const Text = StyledText
export default Text
