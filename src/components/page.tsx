import { PropsWithChildren } from 'react';
import React from 'react';
import { Box, BoxProps } from './core/box';

export const Page = ({ color, ...props }: PropsWithChildren<BoxProps>) => {
  return <Box height="100vh" flexDirection="column" {...props} />;
};
