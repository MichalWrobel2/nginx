<script lang="ts">
	import GenericPage from '~/components/GenericPage.svelte';
	import MainPageHead from '~/components/MainPageHead.svelte';
	import SubPageHeader from '~/components/SubPageHeader.svelte';
	import type { PageEntity, GlobalEntity, SloganEntity } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';

	export let data: {
		page: PageEntity;
		globalSettings: GlobalEntity | undefined;
		slogan: SloganEntity;
		logo: any;
		locale: LocaleMeta;
	};

	$: ({ page, globalSettings, slogan, locale } = data);
	$: isMainPage = page.attributes?.slug === null;
</script>

<div>
	{#if isMainPage}
		<MainPageHead {slogan} {locale} />
		<GenericPage {page} {globalSettings} {locale} />
	{:else}
		<SubPageHeader {page} />
		<GenericPage {page} {globalSettings} {locale} />
	{/if}
</div>
