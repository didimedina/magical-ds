import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Root"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-text-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseText = buildComponentWithDataType("Root", "p")


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
        display: "inline-flex",
        borderRadius: "calc($$textRootFontSize * 0.25)", // why is this rendering 4px? 
        '&[affordance="tertiary"]': {
            
        },
    },


    variants: {
        // in 3 days is a string that is orange in ui.
        // should text support colors? 
        ellipsis: { 
            // this isn't causing the desired outcome.
            // TODO: read docs here to fix: https://developer.mozilla.org/en-US/docs/Web/CSS/text-overflow
            true: {
                textOverflow: "ellipsis",
            }
        },
        singleLine: {
            true: {
                lineHeight: "$$textRootFontSize",
            }
        },
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
                $$textRootFontSize: theme.fontSizes.fontSize7
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
