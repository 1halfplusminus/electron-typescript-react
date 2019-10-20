import React, { PropsWithChildren } from 'react';
import { Box, BoxProps } from './core/box';

export const Body = ({
  children,
  color,
  ...props
}: PropsWithChildren<BoxProps>) => {
  return (
    <Box {...props} flex={1} alignItems="center" justifyContent="center">
      {children}
    </Box>
  );
};
