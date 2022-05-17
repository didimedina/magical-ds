import { createStitches, globalCss, createTheme } from '@stitches/react';
import {
  tomato,
  red,
  crimson,
  pink,
  plum,
  purple,
  violet,
  indigo,
  blue,
  cyan,
  teal,
  green,
  grass,
  orange,
  brown,
  slate,
  tomatoDark,
  redDark,
  crimsonDark,
  pinkDark,
  plumDark,
  purpleDark,
  violetDark,
  indigoDark,
  blueDark,
  cyanDark,
  tealDark,
  greenDark,
  grassDark,
  orangeDark,
  brownDark,
  slateDark
  
} from '@radix-ui/colors';
import type * as Stitches from '@stitches/react';
export type { VariantProps } from '@stitches/react';

const preflight = globalCss({
  ':root':{
    fontSize: "4px"
  },
  // reset global styles based on TWCSS Preflight https://tailwindcss.com/docs/preflight
  'blockquote, dl, dd, h1, h2, h3, h4, h5, h6, hr, figure, p, pre': {
    margin: 0,
  },
  'h1, h2, h3, h4, h5, h6': {
    fontSize: "inherit",
    fontWeight: "inherit",
  },
  'ol, ul': {
    listStyle: 'none',
    margin: 0,
    padding: 0,
  },
  'img, svg, video, canvas, audio, iframe, embed, object': {
    display: "block",
    verticalAlign: "middle"
  },
  '*, ::before, ::after': {
    borderWidth: "0",
    borderStyle: "solid",
    borderColor: 'currentColor'
  },
  '.google-map *': {
    borderStyle: "none"
  },
  'button:focus': {
    outline: "1px dotted",
    // outline: "5px auto -webkit-focus-ring-color"
  }

});

preflight()

export const { theme, styled, getCssText, css } = createStitches({
  theme: {
    fonts: {
      serif: "'Poppins', sans-serif",
      mono: "'Space Mono', monospace"
    },
    fontSizes: {
      fontSize1: "2.5rem", // 10
      fontSize2: "3rem", // 12px
      fontSize3: "3.5rem", // 14px
      fontSize4: "4rem", // 16px
      fontSize5: "5rem", // 20px
      fontSize6: "7rem", // 28px
      fontSize7: "10rem", // 40px
      fontSize8: "14rem", // 56px
    },

    space: {
      // Scale in pixels -- isn't good and leaves akward outcomes.
      // 1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 20, 24, 28, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, 448, 512, 640, 768, 896, 1024, 1280, 1536, 1792, 2048 
      // dense:   1, 2, 3, | 4, 6,  8,  12, 16, 24, 32, 48, 64
      // regular: 1, 2, 4, | 6, 8,  12, 16, 24, 32, 48, 64, 96
      // loose:   1, 3, 6, | 8, 12, 16, 24, 32, 48, 56, 80, 112
    },
    lineHeights: {
      lineHeight1: '1',
      lineHeight2: '1.25',
      lineHeight3: '1.5',
    },
    colors: {
      ...tomato,
      ...red,
      ...crimson,
      ...pink,
      ...plum,
      ...purple,
      ...violet,
      ...indigo,
      ...blue,
      ...cyan,
      ...teal,
      ...green,
      ...grass,
      ...orange,
      ...brown,
      ...slate,
    },
  },
  media: {
    bp1: '(min-width: 640px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
    hover: '(any-hover: hover)',
  },
  utils: {
    px: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingLeft: value,
      paddingRight: value,
    }),
    py: (value: Stitches.PropertyValue<'paddingLeft'>) => ({
      paddingTop: value,
      paddingBottom: value,
    }),
  }
});

export const darkTheme = createTheme('dark', {
    colors: {
      ...tomatoDark,
      ...redDark,
      ...crimsonDark,
      ...pinkDark,
      ...plumDark,
      ...purpleDark,
      ...violetDark,
      ...indigoDark,
      ...blueDark,
      ...cyanDark,
      ...tealDark,
      ...greenDark,
      ...grassDark,
      ...orangeDark,
      ...brownDark,
      ...slateDark
    }
})

export const looselySized = createTheme('loosely-sized', {
    fontSizes: {
      fontSize1: "12px",
      fontSize2: "14px",
      fontSize3: "16px",
      fontSize4: "20px",
      fontSize5: "24px",
      fontSize6: "32px",
      fontSize7: "48px",
      fontSize8: "64px",
    },
    space: {
      // loose:   1, 3, 6, | 8, 12, 16, 24, 32, 48, 56, 80
      space1: "1px",
      space2: "3px",
      space3: "6px", 
      space4: "8px",
      space5: "12px",
      space6: "16px",
      space7: "24px",
      space8: "32px",
      space9: "48px",
      space10: "56px",
      space11: "80px",
      space12: "112px",
    },
    sizes: {
      size1: "6px", 
      size2: "8px",
      size3: "12px",
      size4: "16px",
      size5: "24px",
      size6: "32px",
      size7: "48px",
      size8: "56px",
      size9: "80px",
      size10: "112px",
      // relSize1: "10%", 
      // relSize2: "20%",
      // relSize3: "30%",
      // relSize4: "40%",
      // relSize5: "50%",
      // relSize6: "60%",
      // relSize7: "70%",
      // relSize8: "80%",
      // relSize9: "90%",
      // relSize10: "100%",
    },
})

export const denselySized = createTheme('densely-sized', {
    fontSizes: {
      fontSize1: "10px",
      fontSize2: "12px",
      fontSize3: "14px",
      fontSize4: "16px",
      fontSize5: "20px",
      fontSize6: "24px",
      fontSize7: "28px",
      fontSize8: "32px",
    },
    space: {
      // dense:   1, 2, 3, | 4, 6,  8,  12, 16, 24, 32, 48, 64
      space1: "1px",
      space2: "2px",
      space3: "3px", 
      space4: "4px",
      space5: "6px",
      space6: "8px",
      space7: "12px",
      space8: "16px",
      space9: "24px",
      space10: "32px",
      space11: "48px",
      space12: "64px",
    },
    sizes: {
      size1: "4px",
      size2: "6px",
      size3: "8px",
      size4: "12px",
      size5: "16px",
      size6: "24px",
      size7: "32px",
      size8: "48px",
      size10: "64px",
      // relSize1: "10%", 
      // relSize2: "20%",
      // relSize3: "30%",
      // relSize4: "40%",
      // relSize5: "50%",
      // relSize6: "60%",
      // relSize7: "70%",
      // relSize8: "80%",
      // relSize9: "90%",
      // relSize10: "100%",
    }
})

