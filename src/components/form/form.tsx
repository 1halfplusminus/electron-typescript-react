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
  flex,
  FlexProps,
  FlexboxProps,
} from 'styled-system';
import { Form as FormikForm, FormikFormProps } from 'formik';
import { DisplayProps, flexbox } from '@material-ui/system';
import { ComponentType } from 'react';

export type FormProps = FontSizeProps &
  SpaceProps &
  FontWeightProps &
  LineHeightProps &
  MarginProps &
  TextAlignProps &
  TextStyleProps &
  ColorProps &
  DisplayProps &
  FlexProps &
  FlexboxProps;

export const Form = styled<ComponentType<FormProps>>(FormikForm as any)`
${space}
${fontSize}
${fontWeight}
${lineHeight}
${color}
${margin}
${textAlign}
${textStyle}
${display}
${flex}
${flexbox}
`;

Form.defaultProps = {
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
};
