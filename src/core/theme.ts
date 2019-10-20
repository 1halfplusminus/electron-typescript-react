import { Theme } from 'styled-system';

const colors = {
  grey: '#E8EAF6',
  indigo600: '#3949AB',
  lightGreen600: '#7CB342',
  lightBlue: '#03A9F4',
  black: '#212121',
  primary: '#fbc02d',
  white: '#FAFAFA',
  green: '#4CAF50',
  red: '#E53935',
};

export type ThemeColors = typeof colors;

export const theme: Theme & { colors: ThemeColors } = {
  fontSizes: [12, 14, 18, 24, 32, 48, 64, 96, 128],
  space: [
    // margin and padding
    0,
    4,
    8,
    16,
    32,
    64,
    128,
    256,
  ],
  fontWeights: ['normal', 'bold'],
  colors,
};
