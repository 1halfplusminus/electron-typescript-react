import Button from '@material-ui/core/Button';
import styled from 'styled-components';
import {
  space,
  fontSize,
  SpaceProps,
  FontSizeProps,
  ColorProps,
  color,
  FlexboxProps,
  flexbox,
  grid,
  GridProps,
} from 'styled-system';

export const PrimaryButton = styled(Button)<
  SpaceProps & FontSizeProps & ColorProps & FlexboxProps & GridProps
>`
  ${space}
  ${fontSize}
  ${color}
  ${flexbox}
  ${grid}
`;

PrimaryButton.defaultProps = {
  variant: 'outlined',
  color: 'primary',
};
