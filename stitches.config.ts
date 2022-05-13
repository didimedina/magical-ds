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

// TODO: Auto responsive can be just themes
// applied at the root just like colors

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

