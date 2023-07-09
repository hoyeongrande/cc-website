import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MantineProvider } from "@mantine/core";

const MyApp = ({ Component, pageProps }: AppProps) => (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
        <Component {...pageProps} />
    </MantineProvider>
);

export default MyApp;
