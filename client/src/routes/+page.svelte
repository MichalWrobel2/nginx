<script lang="ts">
	import type { GlobalEntity, PageEntity, SloganEntity } from '~/models/types';
	import MainPageHead from '~/components/MainPageHead.svelte';
	import GenericPage from '~/components/GenericPage.svelte';
	import type { LocaleMeta } from '~/types/locale';

	export let data: {
		pages: PageEntity[];
		slogan: SloganEntity;
		globalSettings: GlobalEntity;
		locale: LocaleMeta;
	};
	$: ({ slogan, globalSettings, locale } = data);
	const mainPage = data.pages.find((page) => page.attributes?.slug === null);
</script>

<svelte:head>
	<title>{mainPage?.attributes?.title}</title>
	<meta name="description" content={mainPage?.attributes?.description ?? ''} />
</svelte:head>

<MainPageHead {slogan} {locale} />
<GenericPage page={mainPage} {globalSettings} {locale} />
