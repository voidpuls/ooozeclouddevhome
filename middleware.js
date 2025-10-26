import createMiddleware from 'next-intl/middleware';
import { settings } from './config/settings';

export default function middleware(request) {
  if (settings.translation_system.enabled) {
    const handleI18nRouting = createMiddleware({
      locales: settings.translation_system.locales,
      defaultLocale: settings.translation_system.default_locale
    });
    return handleI18nRouting(request);
  }
  return;
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};