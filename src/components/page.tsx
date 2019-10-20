import { PropsWithChildren } from 'react';
import React from 'react';
import { Box } from './core/box';

export const Page = (props: PropsWithChildren<{}>) => {
  return <Box {...props} height="100vh" flexDirection="column" />;
};
