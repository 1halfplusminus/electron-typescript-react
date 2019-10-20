import CSS from 'csstype';
import 'styled-components/native';
import { theme, ThemeColors } from '../core/theme';
import { ResponsiveValue } from 'styled-system';

type Theme = typeof theme;
type Color =
  | { [key in keyof ThemeColors]: string }
  | keyof ThemeColors
  | (keyof ThemeColors | null)[];
// and extend them!
declare module 'styled-components/native' {
  export interface DefaultTheme extends Theme {}
}

declare module 'csstype' {
  export interface Properties {
    color?: ResponsiveValue<CSS.ColorProperty>;
    // Add a missing property
    WebkitRocketLauncher?: string;
    // ...or allow any other property
    [index: string]: any;
  }
}
