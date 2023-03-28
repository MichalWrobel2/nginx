export const hrefWithLangQueryParam = (locale: string, url: string) => {
	// TODO: make dynamic (default lang)
	if (locale === 'en') {
		return url;
	}

	// TODO: make dynamic (default lang)
	if (locale !== 'en' && url === '/') {
		return '/' + locale;
	}

	if (url?.includes(locale + '/')) {
		return url;
	}

	return '/' + locale + (url ? '/' + url : '');
};
