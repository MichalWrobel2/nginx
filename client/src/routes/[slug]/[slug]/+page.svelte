<script lang="ts">
	import GenericPage from '~/components/GenericPage.svelte';
	import SubPageHeader from '~/components/SubPageHeader.svelte';
	import type { PageEntity, GlobalEntity } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';

	export let data: {
		page: PageEntity;
		globalSettings: GlobalEntity | undefined;
		locale: LocaleMeta;
	};

	$: ({ page, locale, globalSettings } = data);
</script>

<div>
	<SubPageHeader {page} />
	<GenericPage {page} {globalSettings} {locale} />
</div>
