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
    fontSize: "$$buttonRootFontSize",
    lineHeight: "$$buttonRootFontSize",
    gap: "calc($$buttonRootFontSize * 0.125)",
    borderRadius: "calc($$buttonRootFontSize * 0.25)",
    px: "calc($$buttonRootFontSize * 0.5)",
    height: "calc($$buttonRootFontSize * 2)", 

    '&:disabled': {
        opacity: 0.6,
        cursor: "not-allowed"
    },
    
    '&:focus': {
        outline: "none",
        boxShadow: 'inset 0 0 0 1px $$buttonRootColor8, 0 0 0 1px $$buttonRootColor8',
    },

    '& [data-magical-button-content]': {
      display: "flex",
      alignItems: "center",
      width: "auto", 
      gap: "calc($$buttonRootFontSize * 0.25)",
    },


    '& [data-magical-button-label]':{
        fontSize: "calc($$buttonRootFontSize * 0.75)", 
        px: "calc($$buttonRootFontSize * 0.25)", 
        display: "flex",
        alignItems: "center",
        height: "$$buttonRootFontSize",
        borderRadius: 2,
        fontWeight: "400",
    },

    variants: {
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
                $$buttonRootColor1: theme.colors.slate1,
                $$buttonRootColor2: theme.colors.slate2,
                $$buttonRootColor3: theme.colors.slate3,
                $$buttonRootColor4: theme.colors.slate4,
                $$buttonRootColor5: theme.colors.slate5,
                $$buttonRootColor6: theme.colors.slate6,
                $$buttonRootColor7: theme.colors.slate7,
                $$buttonRootColor8: theme.colors.slate8,
                $$buttonRootColor9: theme.colors.slate9,
                $$buttonRootColor10: theme.colors.slate10,
                $$buttonRootColor11: theme.colors.slate11,
                $$buttonRootColor12: theme.colors.slate12,
            },
            tomato: {
                $$buttonRootColor1: theme.colors.tomato1,
                $$buttonRootColor2: theme.colors.tomato2,
                $$buttonRootColor3: theme.colors.tomato3,
                $$buttonRootColor4: theme.colors.tomato4,
                $$buttonRootColor5: theme.colors.tomato5,
                $$buttonRootColor6: theme.colors.tomato6,
                $$buttonRootColor7: theme.colors.tomato7,
                $$buttonRootColor8: theme.colors.tomato8,
                $$buttonRootColor9: theme.colors.tomato9,
                $$buttonRootColor10: theme.colors.tomato10,
                $$buttonRootColor11: theme.colors.tomato11,
                $$buttonRootColor12: theme.colors.tomato12,
            },
            red: {
                $$buttonRootColor1: theme.colors.red1,
                $$buttonRootColor2: theme.colors.red2,
                $$buttonRootColor3: theme.colors.red3,
                $$buttonRootColor4: theme.colors.red4,
                $$buttonRootColor5: theme.colors.red5,
                $$buttonRootColor6: theme.colors.red6,
                $$buttonRootColor7: theme.colors.red7,
                $$buttonRootColor8: theme.colors.red8,
                $$buttonRootColor9: theme.colors.red9,
                $$buttonRootColor10: theme.colors.red10,
                $$buttonRootColor11: theme.colors.red11,
                $$buttonRootColor12: theme.colors.red12,
            },
            crimson: {
                $$buttonRootColor1: theme.colors.crimson1,
                $$buttonRootColor2: theme.colors.crimson2,
                $$buttonRootColor3: theme.colors.crimson3,
                $$buttonRootColor4: theme.colors.crimson4,
                $$buttonRootColor5: theme.colors.crimson5,
                $$buttonRootColor6: theme.colors.crimson6,
                $$buttonRootColor7: theme.colors.crimson7,
                $$buttonRootColor8: theme.colors.crimson8,
                $$buttonRootColor9: theme.colors.crimson9,
                $$buttonRootColor10: theme.colors.crimson10,
                $$buttonRootColor11: theme.colors.crimson11,
                $$buttonRootColor12: theme.colors.crimson12,
            },
            pink: {
                $$buttonRootColor1: theme.colors.pink1,
                $$buttonRootColor2: theme.colors.pink2,
                $$buttonRootColor3: theme.colors.pink3,
                $$buttonRootColor4: theme.colors.pink4,
                $$buttonRootColor5: theme.colors.pink5,
                $$buttonRootColor6: theme.colors.pink6,
                $$buttonRootColor7: theme.colors.pink7,
                $$buttonRootColor8: theme.colors.pink8,
                $$buttonRootColor9: theme.colors.pink9,
                $$buttonRootColor10: theme.colors.pink10,
                $$buttonRootColor11: theme.colors.pink11,
                $$buttonRootColor12: theme.colors.pink12,
            },
            plum: {
                $$buttonRootColor1: theme.colors.plum1,
                $$buttonRootColor2: theme.colors.plum2,
                $$buttonRootColor3: theme.colors.plum3,
                $$buttonRootColor4: theme.colors.plum4,
                $$buttonRootColor5: theme.colors.plum5,
                $$buttonRootColor6: theme.colors.plum6,
                $$buttonRootColor7: theme.colors.plum7,
                $$buttonRootColor8: theme.colors.plum8,
                $$buttonRootColor9: theme.colors.plum9,
                $$buttonRootColor10: theme.colors.plum10,
                $$buttonRootColor11: theme.colors.plum11,
                $$buttonRootColor12: theme.colors.plum12,
            },
            purple: {
                $$buttonRootColor1: theme.colors.purple1,
                $$buttonRootColor2: theme.colors.purple2,
                $$buttonRootColor3: theme.colors.purple3,
                $$buttonRootColor4: theme.colors.purple4,
                $$buttonRootColor5: theme.colors.purple5,
                $$buttonRootColor6: theme.colors.purple6,
                $$buttonRootColor7: theme.colors.purple7,
                $$buttonRootColor8: theme.colors.purple8,
                $$buttonRootColor9: theme.colors.purple9,
                $$buttonRootColor10: theme.colors.purple10,
                $$buttonRootColor11: theme.colors.purple11,
                $$buttonRootColor12: theme.colors.purple12,
            },
            violet: {
                $$buttonRootColor1: theme.colors.violet1,
                $$buttonRootColor2: theme.colors.violet2,
                $$buttonRootColor3: theme.colors.violet3,
                $$buttonRootColor4: theme.colors.violet4,
                $$buttonRootColor5: theme.colors.violet5,
                $$buttonRootColor6: theme.colors.violet6,
                $$buttonRootColor7: theme.colors.violet7,
                $$buttonRootColor8: theme.colors.violet8,
                $$buttonRootColor9: theme.colors.violet9,
                $$buttonRootColor10: theme.colors.violet10,
                $$buttonRootColor11: theme.colors.violet11,
                $$buttonRootColor12: theme.colors.violet12,
            },
            indigo: {
                $$buttonRootColor1: theme.colors.indigo1,
                $$buttonRootColor2: theme.colors.indigo2,
                $$buttonRootColor3: theme.colors.indigo3,
                $$buttonRootColor4: theme.colors.indigo4,
                $$buttonRootColor5: theme.colors.indigo5,
                $$buttonRootColor6: theme.colors.indigo6,
                $$buttonRootColor7: theme.colors.indigo7,
                $$buttonRootColor8: theme.colors.indigo8,
                $$buttonRootColor9: theme.colors.indigo9,
                $$buttonRootColor10: theme.colors.indigo10,
                $$buttonRootColor11: theme.colors.indigo11,
                $$buttonRootColor12: theme.colors.indigo12,
            },
            blue: {
                $$buttonRootColor1: theme.colors.blue1,
                $$buttonRootColor2: theme.colors.blue2,
                $$buttonRootColor3: theme.colors.blue3,
                $$buttonRootColor4: theme.colors.blue4,
                $$buttonRootColor5: theme.colors.blue5,
                $$buttonRootColor6: theme.colors.blue6,
                $$buttonRootColor7: theme.colors.blue7,
                $$buttonRootColor8: theme.colors.blue8,
                $$buttonRootColor9: theme.colors.blue9,
                $$buttonRootColor10: theme.colors.blue10,
                $$buttonRootColor11: theme.colors.blue11,
                $$buttonRootColor12: theme.colors.blue12,
            },
            cyan: {
                $$buttonRootColor1: theme.colors.cyan1,
                $$buttonRootColor2: theme.colors.cyan2,
                $$buttonRootColor3: theme.colors.cyan3,
                $$buttonRootColor4: theme.colors.cyan4,
                $$buttonRootColor5: theme.colors.cyan5,
                $$buttonRootColor6: theme.colors.cyan6,
                $$buttonRootColor7: theme.colors.cyan7,
                $$buttonRootColor8: theme.colors.cyan8,
                $$buttonRootColor9: theme.colors.cyan9,
                $$buttonRootColor10: theme.colors.cyan10,
                $$buttonRootColor11: theme.colors.cyan11,
                $$buttonRootColor12: theme.colors.cyan12,
            },
            teal: {
                $$buttonRootColor1: theme.colors.teal1,
                $$buttonRootColor2: theme.colors.teal2,
                $$buttonRootColor3: theme.colors.teal3,
                $$buttonRootColor4: theme.colors.teal4,
                $$buttonRootColor5: theme.colors.teal5,
                $$buttonRootColor6: theme.colors.teal6,
                $$buttonRootColor7: theme.colors.teal7,
                $$buttonRootColor8: theme.colors.teal8,
                $$buttonRootColor9: theme.colors.teal9,
                $$buttonRootColor10: theme.colors.teal10,
                $$buttonRootColor11: theme.colors.teal11,
                $$buttonRootColor12: theme.colors.teal12,
            },
            green: {
                $$buttonRootColor1: theme.colors.green1,
                $$buttonRootColor2: theme.colors.green2,
                $$buttonRootColor3: theme.colors.green3,
                $$buttonRootColor4: theme.colors.green4,
                $$buttonRootColor5: theme.colors.green5,
                $$buttonRootColor6: theme.colors.green6,
                $$buttonRootColor7: theme.colors.green7,
                $$buttonRootColor8: theme.colors.green8,
                $$buttonRootColor9: theme.colors.green9,
                $$buttonRootColor10: theme.colors.green10,
                $$buttonRootColor11: theme.colors.green11,
                $$buttonRootColor12: theme.colors.green12,
            },
            grass: {
                $$buttonRootColor1: theme.colors.grass1,
                $$buttonRootColor2: theme.colors.grass2,
                $$buttonRootColor3: theme.colors.grass3,
                $$buttonRootColor4: theme.colors.grass4,
                $$buttonRootColor5: theme.colors.grass5,
                $$buttonRootColor6: theme.colors.grass6,
                $$buttonRootColor7: theme.colors.grass7,
                $$buttonRootColor8: theme.colors.grass8,
                $$buttonRootColor9: theme.colors.grass9,
                $$buttonRootColor10: theme.colors.grass10,
                $$buttonRootColor11: theme.colors.grass11,
                $$buttonRootColor12: theme.colors.grass12,
            },
            orange: {
                $$buttonRootColor1: theme.colors.orange1,
                $$buttonRootColor2: theme.colors.orange2,
                $$buttonRootColor3: theme.colors.orange3,
                $$buttonRootColor4: theme.colors.orange4,
                $$buttonRootColor5: theme.colors.orange5,
                $$buttonRootColor6: theme.colors.orange6,
                $$buttonRootColor7: theme.colors.orange7,
                $$buttonRootColor8: theme.colors.orange8,
                $$buttonRootColor9: theme.colors.orange9,
                $$buttonRootColor10: theme.colors.orange10,
                $$buttonRootColor11: theme.colors.orange11,
                $$buttonRootColor12: theme.colors.orange12,
            },
            brown: {
                $$buttonRootColor1: theme.colors.brown1,
                $$buttonRootColor2: theme.colors.brown2,
                $$buttonRootColor3: theme.colors.brown3,
                $$buttonRootColor4: theme.colors.brown4,
                $$buttonRootColor5: theme.colors.brown5,
                $$buttonRootColor6: theme.colors.brown6,
                $$buttonRootColor7: theme.colors.brown7,
                $$buttonRootColor8: theme.colors.brown8,
                $$buttonRootColor9: theme.colors.brown9,
                $$buttonRootColor10: theme.colors.brown10,
                $$buttonRootColor11: theme.colors.brown11,
                $$buttonRootColor12: theme.colors.brown12,
            },

        },
        size: {
            sm: {
                $$buttonRootFontSize: theme.fontSizes.fontSize2,

            },
            md: {
                $$buttonRootFontSize: theme.fontSizes.fontSize3,

            },
            lg: {
                $$buttonRootFontSize: theme.fontSizes.fontSize4,

            },
            xl: {
                $$buttonRootFontSize: theme.fontSizes.fontSize4,

            },
        },
        affordance: {
            primary: { 
                backgroundColor: '$$buttonRootColor10',
                color: "$$buttonRootColor1",
            },
            secondary: { 
                backgroundColor: '$$buttonRootColor4',
                color: "$$buttonRootColor10",
                '&:hover': {
                    backgroundColor: '$$buttonRootColor5',
                }
            },
            tertiary: {
                color: "$$buttonRootColor9",
                textDecoration: "underline",
                textDecorationColor: "$$buttonRootColor6",
                textUnderlineOffset: 2,
                textDecorationThickness: 2,
            },
        },
        inline: {
            true: {
                // unset all the styles we want the wrapping parent to control
                px: "unset",
                py: "unset",
                display: "unset",
                height: "unset", 
                userSelect: 'unset',
                fontSize: "unset",
                fontWeight: "unset",
                lineHeight: "unset",
                borderRadius: "unset",
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
                color: "$$buttonRootColor8",
                '&:hover':{
                    color: "buttonRootColor",
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
                backgroundColor: '$$buttonRootColor12',
                color: '$$buttonRootColor1',
                '& [data-magical-button-label]': {
                    backgroundColor: "$$buttonRootColor11",
                    color: "$$buttonRootColor8",
                }
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "secondary",
            color: "slate",
            dim: false,
            css: {
                color: '$$buttonRootColor12'
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "tertiary",
            color: "slate",
            dim: false,
            css: {
                color: '$$buttonRootColor12'
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

const StyledContent = styled(BaseContent, {})
const StyledIcon = styled(BaseIcon, {
    // maybe change this to set default to 1.2 and make Boolean called shrink
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
                    color: "$$buttonRootColor8",
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
            true: { color: "$$buttonRootColor8" }
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
 