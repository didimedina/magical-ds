/* TODOs
    [] Support elippses and text not wrapping. useful for titles and btn text
*/

import { styled, theme } from '../../stitches.config';

type ComponentDataTypes = "Icon"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}

const BaseIcon = buildComponentWithDataType("Icon", "p")


/* -------------------------------------------------------------------------------------------------
 * Icon
 * -----------------------------------------------------------------------------------------------*/


const StyledIcon = styled(BaseIcon, {

    $$iconColor: theme.colors.slate12,
    fontSize: "$$iconFontSize",
    color: "$$iconColor",
    display: "inline",
    height: "fit-content",
    width: "fit-content",
    
    '& svg': {
        width: "calc($$iconFontSize * 1.25)",
        height: "calc($$iconFontSize * 1.25)",
    },

    variants: {
        baseSize: {
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

const Icon = StyledIcon
export default Icon
