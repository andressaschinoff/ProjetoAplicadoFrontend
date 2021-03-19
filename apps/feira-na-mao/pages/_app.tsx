import React from 'react';
import { AppProps } from 'next/app';
import Box from '@material-ui/core/Box';
import { ThemeProvider } from '@material-ui/core/styles';
import GlobalStyles from '../theme/GlobalStyle';
import { LoadingProvider } from '@feira-na-mao/hooks';
import { MenuBar } from '@feira-na-mao/components';
import theme from '../theme';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles>
        <LoadingProvider>
          <MenuBar />
          <Box className="app">
            <Component {...pageProps} />
          </Box>
        </LoadingProvider>
      </GlobalStyles>
    </ThemeProvider>
  );
}

export default CustomApp;
