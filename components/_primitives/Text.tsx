import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Text"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-button-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseText = buildComponentWithDataType("Text", "p")


/* -------------------------------------------------------------------------------------------------
 * Text
 * -----------------------------------------------------------------------------------------------*/


const StyledText = styled(BaseText, {

    // fontSize: "10px",
    $$currentStyle: "regular",
    $$currentWeight: "regular",
    $$currentColor: theme.colors.slate12,
    fontSize: "$$currentSize",
    fontFamily: "$$currentFont",
    fontWeight: "$$currentWeight",
    fontStyle: "$$currentStyle",
    color: "$$currentColor",


    variants: {
        size: {
            xs: {
                $$currentSize: theme.fontSizes.fontSize1
            },
            sm: {
                $$currentSize: theme.fontSizes.fontSize2
            },
            md: {
                $$currentSize: theme.fontSizes.fontSize3
            },
            lg: {
                $$currentSize: theme.fontSizes.fontSize4
            },
            xl: {
                $$currentSize: theme.fontSizes.fontSize5
            },
            ['2xl']: {
                $$currentSize: theme.fontSizes.fontSize6
            },
            ['3xl']: {
                $$currentSize: theme.fontSizes.fontSize7
            },
            ['4xl']: {
                $$currentSize: theme.fontSizes.fontSize8
            },
        },
        font: {
            serif: {
                $$currentFont: theme.fonts.serif
            },
            mono: {
                $$currentFont: theme.fonts.mono
            },
        },
        dim: {
            true: {
                $$currentColor: theme.colors.slate10
            },
        },
        italic: {
            true: {
                $$currentStyle : "italic"
            }
        },
        bold: {
            true: {
                $$currentWeight : "bold"
            }
        },
    },


})

const Text = StyledText
export default Text
