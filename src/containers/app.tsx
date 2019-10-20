import { PropsWithChildren } from 'react';
import React from 'react';
import Helmet from 'react-helmet';

export const App = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Helmet>
        <title> Super App </title>
        <style type="text/css">{`
          html, body {
            margin: 0;
          }
        `}</style>
      </Helmet>
      {children}
    </>
  );
};
