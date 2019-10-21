import styled from 'styled-components';
import {
  space,
  fontSize,
  fontWeight,
  lineHeight,
  margin,
  textAlign,
  textStyle,
  color,
  FontSizeProps,
  SpaceProps,
  FontWeightProps,
  LineHeightProps,
  MarginProps,
  TextAlignProps,
  TextStyleProps,
} from 'styled-system';

export type LabelProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps;

export const Label = styled.label<LabelProps>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}

`;

Label.defaultProps = {
  marginBottom: 2,
};
