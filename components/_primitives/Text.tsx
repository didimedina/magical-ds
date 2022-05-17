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

    // all: "unset",

    // Set default variables
    $$textRootStyle: "regular",
    $$textRootWeight: "regular",
    $$textRootColor: theme.colors.slate12,

    // Hoist variables from props
    fontSize: "$$textRootFontSize",
    fontFamily: "$$textRootFont",
    fontWeight: "$$textRootWeight",
    fontStyle: "$$textRootStyle",
    color: "$$textRootColor",
    lineHeight: "calc($$textRootFontSize * 1.25)",
    display: "inline",

    // Set children to adopt new variables
    '& [data-magical-button-root]': {
        px: "calc($$textRootFontSize * 0.25)",
        py: "calc($$textRootFontSize * 0.125)",
        height: "auto",
        borderRadius: "calc($$textRootFontSize * 0.25)", // why is this rendering 4px? 
    },


    variants: {
        size: {
            xs: {
                $$textRootFontSize: theme.fontSizes.fontSize1
            },
            sm: {
                $$textRootFontSize: theme.fontSizes.fontSize2
            },
            md: {
                $$textRootFontSize: theme.fontSizes.fontSize3
            },
            lg: {
                $$textRootFontSize: theme.fontSizes.fontSize4
            },
            xl: {
                $$textRootFontSize: theme.fontSizes.fontSize5
            },
            ['2xl']: {
                $$textRootFontSize: theme.fontSizes.fontSize6
            },
            ['3xl']: {
                $$textRootFontSize: "68px"
            },
            ['4xl']: {
                $$textRootFontSize: theme.fontSizes.fontSize8
            },
        },
        font: {
            serif: {
                $$textRootFont: theme.fonts.serif
            },
            mono: {
                $$textRootFont: theme.fonts.mono
            },
        },
        dim: {
            true: {
                $$textRootColor: theme.colors.slate10
            },
        },
        italic: {
            true: {
                $$textRootStyle : "italic"
            }
        },
        bold: {
            true: {
                $$textRootWeight : "bold"
            }
        },
    },
    defaultVariants: {
        size: "md"
    }

})

const Text = StyledText
export default Text
