import { HOST } from '~/api/config';

export class Endpoints {
	private static host = HOST;

	static page(id: string, locale = 'en') {
		const url = this.getUrl(`pages/${id}`);
		url.searchParams.append('populate', 'deep');

		return this.withLocaleQueryParam(url, locale).toString();
	}

	static pages(locale: string) {
		const url = this.getUrl('pages');
		url.searchParams.append('populate', 'deep');

		return this.withLocaleQueryParam(url, locale).toString();
	}

	static carousel(locale: string) {
		const url = this.getUrl('carousel');
		url.searchParams.append('populate', '*');

		return this.withLocaleQueryParam(url, locale).toString();
	}

	static slogan(locale: string) {
		const url = this.getUrl('slogan');
		url.searchParams.append('populate', '*');

		return this.withLocaleQueryParam(url, locale).toString();
	}

	static global(locale: string) {
		const url = this.getUrl('global');
		url.searchParams.append('populate', 'deep');

		return this.withLocaleQueryParam(url, locale).toString();
	}

	static get logo() {
		const url = this.getUrl('logo');
		url.searchParams.append('populate', '*');

		return url.toString();
	}

	static get languages() {
		return this.getUrl('i18n/locales').toString();
	}

	static get rawHost() {
		return Endpoints.host;
	}

	private static withLocaleQueryParam(url: URL, locale: string) {
		url.searchParams.append('locale', locale);

		return url;
	}

	private static getUrl(slug: string) {
		return new URL(`${Endpoints.host}/api/${slug}`);
	}
}
