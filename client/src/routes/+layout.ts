import type { Load, LoadEvent } from '@sveltejs/kit';
import { Endpoints } from '~/api/endpoints';
import { get } from '~/api/get';
import type { PageEntity } from '~/models/types';
import type { LocaleMeta } from '~/types/locale';

export const prerender = true;
export const csr = true;

const getLocale = (pathname: string, locales: LocaleMeta[], defaultLocale: LocaleMeta) => {
	const pathnameParts = pathname.split('/');
	const slugLocale = pathnameParts?.length > 1 ? pathnameParts[1] : undefined;
	const matchingExistingSlugLocale = locales?.find((locale) => locale.code === slugLocale);

	return matchingExistingSlugLocale ?? defaultLocale ?? { code: 'en', name: 'EN' };
};

const getPageFromPathName = (pathname: string, pages: PageEntity[]) => {
	const pathnameArray = pathname.split('/');
	const mainPage = pages?.find((page) => page.attributes?.slug === null);

	return pages?.find((page) => pathnameArray.includes(page.attributes?.slug ?? '___')) ?? mainPage;
};

export const load: Load = async ({ fetch, url }: LoadEvent) => {
	const locales = (await get(fetch, true)(Endpoints.languages)) as any[];
	const defaultLocale = locales?.find((locale) => locale.isDefault);
	const locale = getLocale(url.pathname, locales, defaultLocale);
	const pages = (await get(fetch)(Endpoints.pages(locale.code))) as PageEntity[];

	return {
		page: getPageFromPathName(url.pathname, pages),
		pages,
		locale,
		locales,
		logo: get(fetch)(Endpoints.logo),
		globalSettings: get(fetch)(Endpoints.global(locale.code)),
		slogan: get(fetch)(Endpoints.slogan(locale.code))
	};
};
