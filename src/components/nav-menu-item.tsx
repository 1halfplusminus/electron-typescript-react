import React, { PropsWithChildren } from 'react';
import { Text } from './core/text';
import styled from 'styled-components';

export interface NavMenuItemProps {
  disabled?: boolean;
}

const NavText = styled(Text)<NavMenuItemProps>`
  flex: 1;
  text-align: center;
  align-items: center;
  justify-content: center;
  align-content: center;
  display: flex;
  background-color: ${({ theme }) => theme.colors.green};
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.grey : theme.colors.black};
  a {
    text-decoration: none;
    display: flex;
    color: ${({ disabled, theme }) =>
      disabled ? theme.colors.grey : theme.colors.black};
  }
`;

export const NavMenuItem = ({
  children,
  disabled,
}: PropsWithChildren<NavMenuItemProps>) => {
  return (
    <NavText disabled={disabled} padding={2}>
      {children}
    </NavText>
  );
};
