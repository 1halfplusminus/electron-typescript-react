import styled from 'styled-components';

import {
  color,
  fontSize,
  fontWeight,
  lineHeight,
  margin,
  space,
  textAlign,
  textStyle,
  FontSizeProps,
  SpaceProps,
  FontWeightProps,
  LineHeightProps,
  MarginProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';
import React, { PropsWithChildren } from 'react';

export type TextProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps;

export const Text = styled.div<TextProps>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}
flex-shrink: 1;
`;

Text.defaultProps = {
  color: 'black',
};

export const Title = (props: PropsWithChildren<TextProps>) => (
  <Text {...props} fontSize={3} fontWeight={1} marginBottom={2} />
);
