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
      // Reset
    all: 'unset',
    alignItems: 'center',
    boxSizing: 'border-box',
    userSelect: 'none',
    '&::before': {
        boxSizing: 'border-box',
    },
    '&::after': {
        boxSizing: 'border-box',
    },
    cursor: "pointer",
    lineHeight: 1,
    display: "flex",
    
    
    '&:focus': {
        outline: "none",
        boxShadow: 'inset 0 0 0 1px $$currentColor8, 0 0 0 1px $$currentColor8',
    },

    '& [data-magical-button-content]': {
      display: "flex",
      width: "auto", 
      gap: 6, // this might need to change based on size
      alignItems: "center"
    },

    variants: {
        layout: {
            spaceBetween: {
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
            // probably could remove making the padding a var
            // if inline true, remove all padding and set hieght to auto
            sm: {
                fontSize: 14,
                borderRadius: 4,
                px: 12,
                height: 32,
            },
            md: {
                fontSize: 16,
                borderRadius: 6,
                px: 16,
                height: 40,
            },
            lg: {
                fontSize: 20,
                borderRadius: 8,
                px: 20,
                height: 52,
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
            },
            tertiary: {
                color: "$$currentColor9",
                textDecoration: "underline",
                textDecorationColor: "$$currentColor6",
                textUnderlineOffset: 2,
                textDecorationThickness: 2,
            },
        },
        inline: {
            true: {
                px: "4px",
                py: "2px",
                height: "auto", // parent should define buttons height
                display: "inline-flex",
                userSelect: 'unset',
                fontSize: "inherit" // parent should define text size
            }
        }
    },

    compoundVariants: [
        {
            // slate 9 as a bg doesn't look "primary" so an exception is made
            affordance: "primary",
            color: "slate",
            css: {
                backgroundColor: '$$currentColor12',
                color: '$$currentColor1'
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "secondary",
            color: "slate",
            css: {
                color: '$$currentColor12'
            }
        },
        {
            // slate 10 on text looks disabled so an exception is made
            affordance: "tertiary",
            color: "slate",
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
        layout: "center"
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
const StyledLabel = styled(BaseLabel, {})

// EXPORTS ---------------------------------------------------------------------------

export const Root = StyledRoot
export const Content = StyledContent
export const Icon = StyledIcon
export const Value = StyledValue
export const Label = StyledLabel
 