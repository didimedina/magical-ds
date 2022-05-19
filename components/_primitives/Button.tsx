/* TODOS -------------------

[] Create a seperate Text component and test wrapping behavior around Buttons
   This should make uderlines of tertery thicker on bigger sizes by making the 
   inline prop for button inherit those stylings and the Text comp have these instead
   targeting data-magical-button-root

   [] Figure out if passing an alt theme to control auto-responsive is better
      than locking it in to text comp, this could also offer the ability for turning it off

      [] Figure out the base set of tokens and if to use size for creating things like
         button height this way this too can be auto responsive


[] Add static type checking for button children. If you try to place Button.Content
   outside of Button.Root then it should throw a warning.

[] If you wrap a Text around a button and button doesnt have a color set can the 
   color from Text pass through to Button? 

[] Figure out a way for Button to be imported and used as <Button/> 
   istead of <Button.Root/> in situations where you don't need children

[] Figure out how to export the Types interface for each component so that you can
   configure a button externally then spread the Props. 

[] Figure out how to host a compiled version of the Comp on a CDN and URL
   import it into Framer

[] Figure out how to assign a change in padding rules when theres only a icon and nothing else
   maybe a way to do this is by adding a HTML attr that if Button.Value is exist it sets to true
   and the would override the default of no padding and then add only when theres a value? 

[] Make button support read only mode which won't dim like disabled does but also wont be clickable
   change cursor to not be pointer (maybe ever cross?)

*/


import { styled, theme } from '../../stitches.config';
import { stackVariants } from './Stack';

// HEADLESS ---------------------------------------------------------------------------

// Factory function that produces headless components with the right HTML data-* attribute
type ComponentDataTypes = "Root" | "Content" | "Icon" | "Value" | "Label"

function buildComponentWithDataType(dataType: ComponentDataTypes, elementTag: string){ 
    const Tag = elementTag
    const Comp = (props: any) => <Tag {...{[`data-magical-button-${dataType.toLowerCase()}`]: "", ...props}} />;        
    Comp.displayName = `${dataType}`;
    return Comp;
}


// Here we build the headless version of every component 
const BaseRoot = buildComponentWithDataType("Root", "button");
const BaseContent = buildComponentWithDataType("Content", "div");
const BaseValue = buildComponentWithDataType("Value", "p");
const BaseIcon = buildComponentWithDataType("Icon", "div");
const BaseLabel = buildComponentWithDataType("Label", "div"); 
// Possibly move this to seperete Comp and retain styles targeting it using data-*
// if placed within a button?


// STYLED ---------------------------------------------------------------------------

// Here we add the styling to all the components


const StyledRoot = styled(BaseRoot, {
    // Static
    all: 'unset',
    cursor: "pointer",
    display: "flex",
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    fontWeight: "bold",
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    
    // Dynamic
    fontSize: "$$currentFontSize",
    lineHeight: "$$currentFontSize",
    gap: "calc($$currentFontSize * 0.125)",
    borderRadius: "calc($$currentFontSize * 0.25)",
    px: "calc($$currentFontSize * 0.5)",
    height: "calc($$currentFontSize * 2)", 

    '&:disabled': {
        opacity: 0.6,
        cursor: "not-allowed"
    },
    
    '&:focus': {
        outline: "none",
        // boxShadow: 'inset 0 0 0 1px $$currentColor8, 0 0 0 1px $$currentColor8',
        boxShadow: '0 0 0 calc($$currentFontSize * 0.125) $$currentColor8',
    },

    '& [data-magical-button-content]': {
      display: "flex",
      alignItems: "center",
      width: "auto", 
      gap: "calc($$currentFontSize * 0.25)",
    },


    '& [data-magical-button-label]':{
        fontSize: "calc($$currentFontSize * 0.75)", 
        px: "calc($$currentFontSize * 0.25)", 
        display: "flex",
        alignItems: "center",
        height: "$$currentFontSize",
        borderRadius: 2,
        fontWeight: "400",
    },

    variants: {
        // TODO: maybe add a variant for width offering 'fill' and 'auto' as options
        layout: {
            ['space-between']: {
                justifyContent: "space-between"
            },
            center: {
                justifyContent: "center"
            },
        },
        color: {
            slate: {
                $$currentColor1: theme.colors.slate1,
                $$currentColor2: theme.colors.slate2,
                $$currentColor3: theme.colors.slate3,
                $$currentColor4: theme.colors.slate4,
                $$currentColor5: theme.colors.slate5,
                $$currentColor6: theme.colors.slate6,
                $$currentColor7: theme.colors.slate7,
                $$currentColor8: theme.colors.slate8,
                $$currentColor9: theme.colors.slate9,
                $$currentColor10: theme.colors.slate10,
                $$currentColor11: theme.colors.slate11,
                $$currentColor12: theme.colors.slate12,
            },
            tomato: {
                $$currentColor1: theme.colors.tomato1,
                $$currentColor2: theme.colors.tomato2,
                $$currentColor3: theme.colors.tomato3,
                $$currentColor4: theme.colors.tomato4,
                $$currentColor5: theme.colors.tomato5,
                $$currentColor6: theme.colors.tomato6,
                $$currentColor7: theme.colors.tomato7,
                $$currentColor8: theme.colors.tomato8,
                $$currentColor9: theme.colors.tomato9,
                $$currentColor10: theme.colors.tomato10,
                $$currentColor11: theme.colors.tomato11,
                $$currentColor12: theme.colors.tomato12,
            },
            red: {
                $$currentColor1: theme.colors.red1,
                $$currentColor2: theme.colors.red2,
                $$currentColor3: theme.colors.red3,
                $$currentColor4: theme.colors.red4,
                $$currentColor5: theme.colors.red5,
                $$currentColor6: theme.colors.red6,
                $$currentColor7: theme.colors.red7,
                $$currentColor8: theme.colors.red8,
                $$currentColor9: theme.colors.red9,
                $$currentColor10: theme.colors.red10,
                $$currentColor11: theme.colors.red11,
                $$currentColor12: theme.colors.red12,
            },
            crimson: {
                $$currentColor1: theme.colors.crimson1,
                $$currentColor2: theme.colors.crimson2,
                $$currentColor3: theme.colors.crimson3,
                $$currentColor4: theme.colors.crimson4,
                $$currentColor5: theme.colors.crimson5,
                $$currentColor6: theme.colors.crimson6,
                $$currentColor7: theme.colors.crimson7,
                $$currentColor8: theme.colors.crimson8,
                $$currentColor9: theme.colors.crimson9,
                $$currentColor10: theme.colors.crimson10,
                $$currentColor11: theme.colors.crimson11,
                $$currentColor12: theme.colors.crimson12,
            },
            pink: {
                $$currentColor1: theme.colors.pink1,
                $$currentColor2: theme.colors.pink2,
                $$currentColor3: theme.colors.pink3,
                $$currentColor4: theme.colors.pink4,
                $$currentColor5: theme.colors.pink5,
                $$currentColor6: theme.colors.pink6,
                $$currentColor7: theme.colors.pink7,
                $$currentColor8: theme.colors.pink8,
                $$currentColor9: theme.colors.pink9,
                $$currentColor10: theme.colors.pink10,
                $$currentColor11: theme.colors.pink11,
                $$currentColor12: theme.colors.pink12,
            },
            plum: {
                $$currentColor1: theme.colors.plum1,
                $$currentColor2: theme.colors.plum2,
                $$currentColor3: theme.colors.plum3,
                $$currentColor4: theme.colors.plum4,
                $$currentColor5: theme.colors.plum5,
                $$currentColor6: theme.colors.plum6,
                $$currentColor7: theme.colors.plum7,
                $$currentColor8: theme.colors.plum8,
                $$currentColor9: theme.colors.plum9,
                $$currentColor10: theme.colors.plum10,
                $$currentColor11: theme.colors.plum11,
                $$currentColor12: theme.colors.plum12,
            },
            purple: {
                $$currentColor1: theme.colors.purple1,
                $$currentColor2: theme.colors.purple2,
                $$currentColor3: theme.colors.purple3,
                $$currentColor4: theme.colors.purple4,
                $$currentColor5: theme.colors.purple5,
                $$currentColor6: theme.colors.purple6,
                $$currentColor7: theme.colors.purple7,
                $$currentColor8: theme.colors.purple8,
                $$currentColor9: theme.colors.purple9,
                $$currentColor10: theme.colors.purple10,
                $$currentColor11: theme.colors.purple11,
                $$currentColor12: theme.colors.purple12,
            },
            violet: {
                $$currentColor1: theme.colors.violet1,
                $$currentColor2: theme.colors.violet2,
                $$currentColor3: theme.colors.violet3,
                $$currentColor4: theme.colors.violet4,
                $$currentColor5: theme.colors.violet5,
                $$currentColor6: theme.colors.violet6,
                $$currentColor7: theme.colors.violet7,
                $$currentColor8: theme.colors.violet8,
                $$currentColor9: theme.colors.violet9,
                $$currentColor10: theme.colors.violet10,
                $$currentColor11: theme.colors.violet11,
                $$currentColor12: theme.colors.violet12,
            },
            indigo: {
                $$currentColor1: theme.colors.indigo1,
                $$currentColor2: theme.colors.indigo2,
                $$currentColor3: theme.colors.indigo3,
                $$currentColor4: theme.colors.indigo4,
                $$currentColor5: theme.colors.indigo5,
                $$currentColor6: theme.colors.indigo6,
                $$currentColor7: theme.colors.indigo7,
                $$currentColor8: theme.colors.indigo8,
                $$currentColor9: theme.colors.indigo9,
                $$currentColor10: theme.colors.indigo10,
                $$currentColor11: theme.colors.indigo11,
                $$currentColor12: theme.colors.indigo12,
            },
            blue: {
                $$currentColor1: theme.colors.blue1,
                $$currentColor2: theme.colors.blue2,
                $$currentColor3: theme.colors.blue3,
                $$currentColor4: theme.colors.blue4,
                $$currentColor5: theme.colors.blue5,
                $$currentColor6: theme.colors.blue6,
                $$currentColor7: theme.colors.blue7,
                $$currentColor8: theme.colors.blue8,
                $$currentColor9: theme.colors.blue9,
                $$currentColor10: theme.colors.blue10,
                $$currentColor11: theme.colors.blue11,
                $$currentColor12: theme.colors.blue12,
            },
            cyan: {
                $$currentColor1: theme.colors.cyan1,
                $$currentColor2: theme.colors.cyan2,
                $$currentColor3: theme.colors.cyan3,
                $$currentColor4: theme.colors.cyan4,
                $$currentColor5: theme.colors.cyan5,
                $$currentColor6: theme.colors.cyan6,
                $$currentColor7: theme.colors.cyan7,
                $$currentColor8: theme.colors.cyan8,
                $$currentColor9: theme.colors.cyan9,
                $$currentColor10: theme.colors.cyan10,
                $$currentColor11: theme.colors.cyan11,
                $$currentColor12: theme.colors.cyan12,
            },
            teal: {
                $$currentColor1: theme.colors.teal1,
                $$currentColor2: theme.colors.teal2,
                $$currentColor3: theme.colors.teal3,
                $$currentColor4: theme.colors.teal4,
                $$currentColor5: theme.colors.teal5,
                $$currentColor6: theme.colors.teal6,
                $$currentColor7: theme.colors.teal7,
                $$currentColor8: theme.colors.teal8,
                $$currentColor9: theme.colors.teal9,
                $$currentColor10: theme.colors.teal10,
                $$currentColor11: theme.colors.teal11,
                $$currentColor12: theme.colors.teal12,
            },
            green: {
                $$currentColor1: theme.colors.green1,
                $$currentColor2: theme.colors.green2,
                $$currentColor3: theme.colors.green3,
                $$currentColor4: theme.colors.green4,
                $$currentColor5: theme.colors.green5,
                $$currentColor6: theme.colors.green6,
                $$currentColor7: theme.colors.green7,
                $$currentColor8: theme.colors.green8,
                $$currentColor9: theme.colors.green9,
                $$currentColor10: theme.colors.green10,
                $$currentColor11: theme.colors.green11,
                $$currentColor12: theme.colors.green12,
            },
            grass: {
                $$currentColor1: theme.colors.grass1,
                $$currentColor2: theme.colors.grass2,
                $$currentColor3: theme.colors.grass3,
                $$currentColor4: theme.colors.grass4,
                $$currentColor5: theme.colors.grass5,
                $$currentColor6: theme.colors.grass6,
                $$currentColor7: theme.colors.grass7,
                $$currentColor8: theme.colors.grass8,
                $$currentColor9: theme.colors.grass9,
                $$currentColor10: theme.colors.grass10,
                $$currentColor11: theme.colors.grass11,
                $$currentColor12: theme.colors.grass12,
            },
            orange: {
                $$currentColor1: theme.colors.orange1,
                $$currentColor2: theme.colors.orange2,
                $$currentColor3: theme.colors.orange3,
                $$currentColor4: theme.colors.orange4,
                $$currentColor5: theme.colors.orange5,
                $$currentColor6: theme.colors.orange6,
                $$currentColor7: theme.colors.orange7,
                $$currentColor8: theme.colors.orange8,
                $$currentColor9: theme.colors.orange9,
                $$currentColor10: theme.colors.orange10,
                $$currentColor11: theme.colors.orange11,
                $$currentColor12: theme.colors.orange12,
            },
            brown: {
                $$currentColor1: theme.colors.brown1,
                $$currentColor2: theme.colors.brown2,
                $$currentColor3: theme.colors.brown3,
                $$currentColor4: theme.colors.brown4,
                $$currentColor5: theme.colors.brown5,
                $$currentColor6: theme.colors.brown6,
                $$currentColor7: theme.colors.brown7,
                $$currentColor8: theme.colors.brown8,
                $$currentColor9: theme.colors.brown9,
                $$currentColor10: theme.colors.brown10,
                $$currentColor11: theme.colors.brown11,
                $$currentColor12: theme.colors.brown12,
            },

        },
        size: {
            sm: {
                $$currentFontSize: theme.fontSizes.fontSize2,
            },
            md: {
                $$currentFontSize: theme.fontSizes.fontSize3,
            },
            lg: {
                $$currentFontSize: theme.fontSizes.fontSize4,
            },
            xl: {
                $$currentFontSize: theme.fontSizes.fontSize4,
            },
        },
        affordance: {
            primary: { 
                backgroundColor: '$$currentColor10',
                color: "$$currentColor1",
            },
            secondary: { 
                backgroundColor: '$$currentColor4',
                color: "$$currentColor10",
                '&:hover': {
                    backgroundColor: '$$currentColor5',
                }
            },
            tertiary: {
                color: "$$currentColor9",
                textDecoration: "underline",
                textDecorationColor: "$$currentColor6",
                textUnderlineOffset: "calc($$currentFontSize * 0.125)",
                textDecorationThickness: "calc($$currentFontSize * 0.125)",
            },
        },
        inline: {
            true: {
                // unset all the styles we want the wrapping Text comp to control instead
                px: "unset",
                py: "unset",
                height: "unset", 
                userSelect: 'unset',
                fontSize: "unset",
                fontWeight: "unset",
                lineHeight: "unset",
                borderRadius: "unset",
                display: "unset", // see if this can be removed. currently it's causing issues without.
            },
        },
        ghost: {
            true: {
                // maybe make this a compound variant so it only triggers for secondary?
                backgroundColor: "transparent",
                textDecoration: "none",
            }
        },
        readOnly: {
            // TODO: check to see if using this along side disabled and dim makes much sense
            true: {
                cursor: "not-allowed",
            }
        },
        iconOnly: {
            true: {
                width: "auto",
                aspectRatio: "1 / 1",
                px: 0,
                py: 0 
            }
        },
        dim: {
            true: {
                color: "$$currentColor9",
                '&:hover':{
                    color: "currentColor",
                }
            }
        }
    },

    compoundVariants: [
        {
            // slate 10 as a bg doesn't look "primary" so an exception is made
            affordance: "primary",
            color: "slate",
            dim: false,
            css: {
                backgroundColor: '$$currentColor12',
                color: '$$currentColor1',
                '& [data-magical-button-label]': {
                    backgroundColor: "$$currentColor11",
                    color: "$$currentColor8",
                }
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "secondary",
            color: "slate",
            dim: false,
            css: {
                color: '$$currentColor12'
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "tertiary",
            color: "slate",
            dim: false,
            css: {
                color: '$$currentColor12'
            }
        },
        {
            affordance: "tertiary",
            inline: true,
            css: {
                px: "0px",
                py: "0px",
                height: "auto",
            }
        }
    ],

    defaultVariants: {
        color: "slate",
        size: "md",
        affordance: 'primary',
        layout: "center",
        dim: false
    }
})

const StyledContent = styled(BaseContent, {
    ...stackVariants
})
const StyledIcon = styled(BaseIcon, {
    // TODO: maybe change this to set default to 1.2 and make Boolean called shrink
    // TODO: maybe change the values to use calc($$buttonRootFontSize)
    '& svg': {
        width: "1.2em",
        height: "1.2em",
    },
    
    variants: {
        shrink: {
            true: {
                '& svg': {
                    width: "0.8em",
                    height: "0.8em",
                }
            },
        },
        dim: {
            true: {
                '& svg': {
                    color: "$$currentColor8",
                }
            },
        },
    },
    defaultVariants: {
        // size: "default"
    }
})
const StyledValue = styled(BaseValue, {
    variants: {
        shrink: {
            true: { fontSize: "0.8em" }
        },
        dim: {
            true: { color: "$$currentColor8" }
        }
    }
})
const StyledLabel = styled(BaseLabel, {
    fontFamily: theme.fonts.mono,
    variants: {
        iconOnly: {
            true: {
                // DOESN'T WORK: seems like the size is being inherited somehow...
                // px: 0,
                // py: 0,
                // height: 18,
                // width: "auto",
                // aspectRatio: "1 / 1"
            },
        },
    },

})

// EXPORTS ---------------------------------------------------------------------------

export const Root = StyledRoot
export const Content = StyledContent
export const Icon = StyledIcon
export const Value = StyledValue
export const Label = StyledLabel
 