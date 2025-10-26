import { getRequestConfig } from 'next-intl/server';
import { getUserLocale } from '../helpers/localManager';
import { settings } from '../../config/settings';

export default getRequestConfig(async () => {
    const locale = settings.translation_system.enabled ? await getUserLocale() : settings.translation_system.default_locale;

    return {
        locale,
        messages: (await import(`../../messages/${locale}.json`)).default
    };
});