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
} from 'styled-system';

export const PrimaryButton = styled(Button)<
  SpaceProps & FontSizeProps & ColorProps & FlexboxProps
>`
  ${space}
  ${fontSize}
  ${color}
  ${flexbox}
`;

PrimaryButton.defaultProps = {
  variant: 'outlined',
  color: 'primary',
};
