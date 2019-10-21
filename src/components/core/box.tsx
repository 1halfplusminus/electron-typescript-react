import styled from 'styled-components';
import {
  color,
  ColorProps,
  flexbox,
  FlexboxProps,
  fontSize,
  FontSizeProps,
  height,
  HeightProps,
  overflow,
  OverflowProps,
  space,
  SpaceProps,
  width,
  WidthProps,
  zIndex,
  ZIndexProps,
  display,
  DisplayProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  WidthProps &
  FontSizeProps &
  ColorProps &
  OverflowProps &
  FlexboxProps &
  HeightProps &
  DisplayProps &
  ZIndexProps;

export const Box = styled.div<BoxProps>`
  ${space}
  ${width}
  ${fontSize}
  ${color}
  ${overflow}
  ${flexbox}
  ${zIndex}
  ${height}
  ${display}
  flex-shrink: 1;
`;

Box.defaultProps = {
  display: 'flex',
};
