import React, { PropsWithChildren } from 'react';
import { Text } from './core/text';

export interface NavMenuItemProps {}

export const NavMenuItem = ({ children }: PropsWithChildren<{}>) => {
  return <Text padding={2}>{children}</Text>;
};
