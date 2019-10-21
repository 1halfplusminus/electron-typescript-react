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
  ColorProps,
  display,
} from 'styled-system';
import { Field } from 'formik';
import { DisplayProps } from '@material-ui/system';
import { ComponentType } from 'react';

export type InputProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  ColorProps &
  DisplayProps;

export const Input = styled<ComponentType<InputProps>>(Field as any)<
  JSX.IntrinsicElements['input']
>`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}
${display}
font-size: 1rem;
font-weight: 400;
line-height: 1.5;
color: #495057;
background-color: #fff;
background-clip: padding-box;
border: 1px solid #ced4da;
border-radius: .25rem;
transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
flex-shrink: 1;
`;

Input.defaultProps = {
  display: 'flex',
  padding: 1,
};
