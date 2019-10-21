import { PropsWithChildren } from 'react';
import React from 'react';
import Helmet from 'react-helmet';
import '../fonts/OpenSans-Bold.ttf';

export const App = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Helmet>
        <title> Super App </title>

        <style type="text/css">{`
          @font-face {
            font-family: 'Open Sans';
            src: url('/fonts/OpenSans-Bold.ttf') format('ttf');
          }
          html, body {
            margin: 0;
            font-family: 'Open Sans', "Roboto", "Helvetica", "Arial", sans-serif;
          }
        `}</style>
      </Helmet>
      {children}
    </>
  );
};
