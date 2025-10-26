import '@mantine/carousel/styles.css';
import '@mantine/core/styles.css';

import { ColorSchemeScript, darken, Group, MantineProvider, Paper, Text } from '@mantine/core';
import { GoogleAnalytics } from '@next/third-parties/google';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import { Inter } from 'next/font/google';
import { BsStars } from 'react-icons/bs';
import { settings } from '../../config/settings';
import { theme } from '../../theme/theme';
import "../../theme/theme.css";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ThemeHotkey from '../components/Utils/ThemeHotkey';

export const dynamicParams = false;

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  style: "normal",
})

export default async function RootLayout({ children }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={inter.className}>
      <body className="page">
        <NextIntlClientProvider messages={messages}>
          <ColorSchemeScript defaultColorScheme={settings.color_scheme.default_color_scheme} forceColorScheme={settings.color_scheme.force_color_scheme !== "auto" ? settings.color_scheme.force_color_scheme : null} />
          <MantineProvider defaultColorScheme={settings.color_scheme.default_color_scheme} forceColorScheme={settings.color_scheme.force_color_scheme !== "auto" ? settings.color_scheme.force_color_scheme : null} theme={theme}>

            {settings.google_analytics_id !== "" && <GoogleAnalytics gaId={settings.google_analytics_id} />}
            <ThemeHotkey />

            <div className="navbar">
              {settings.top_banner.enabled && (
                <Paper p="0.3rem 0.8rem" style={{ borderRadius: 0, border: "none" }} bg={darken("var(--mantine-color-primary-5)", 0.1)}>
                  <Group justify="center" gap="0.4rem">
                    <BsStars color="#fff" size="1rem" />
                    <Text c="#fff" ta="center" size="sm">{settings.top_banner.message}</Text>
                  </Group>
                </Paper>
              )}
              <Navbar />
            </div>

            {children}
            <Footer />
          </MantineProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
