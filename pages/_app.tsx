import * as React from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/styles';
import { CacheProvider, EmotionCache } from '@emotion/react';
import { PrivacyPolicyModal } from 'components/Modal';
import createEmotionCache from 'components/utils/createEmotionCache';
import { useStaticRendering } from 'mobx-react-lite';
import ThemeProvider from 'components/styles/ThemeProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const useStyles = makeStyles({
  root: {
    color: 'red',
  },
});

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  useStaticRendering(true);

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Component {...pageProps} />
        <PrivacyPolicyModal />
      </ThemeProvider>
    </CacheProvider>
  );
}
