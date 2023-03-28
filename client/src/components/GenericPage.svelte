<script lang="ts">
	import NotFound from '~/components/NotFound.svelte';
	import Address from '~/components/sections/Address.svelte';
	import CardsSection from '~/components/sections/Cards.svelte';
	import CarouselSection from '~/components/sections/Carousel.svelte';
	import ContactSection from '~/components/sections/Contact.svelte';
	import ImageGallery from '~/components/sections/ImageGallery.svelte';
	import Images from '~/components/sections/Images.svelte';
	import TextSection from '~/components/sections/Text.svelte';
	import TextWithImage from '~/components/sections/TextWithImage.svelte';
	import type { GlobalEntity, PageEntity } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';

	export let page: PageEntity | undefined;
	export let locale: LocaleMeta;

	export let globalSettings: GlobalEntity | undefined;

	$: sections = Object.entries(page?.attributes ?? {}).reduce(
		(acc: any, [key, value]: [string, any]) => {
			if (key === 'sections') {
				return [...acc, ...value];
			}

			return acc;
		},
		[]
	) as { __component: string }[];

	const sectionsComponents: Record<string, any> = {
		'sections.cards-section': CardsSection,
		'sections.carousel-section': CarouselSection,
		'sections.contact-section': ContactSection,
		'sections.image-gallery-section': ImageGallery,
		'sections.text-section': TextSection,
		'sections.text-with-image-section': TextWithImage,
		'sections.address-section': Address,
		'sections.no-clickable-images': Images
	};
</script>

<svelte:head>
	<title>{page ? page.attributes?.title : globalSettings?.attributes?.notFound?.title}</title>
	<meta name="description" content={page?.attributes?.description} />
</svelte:head>

{#if page}
	{#each sections as section}
		{#if sectionsComponents[section.__component]}
			<svelte:component this={sectionsComponents[section.__component]} {section} {locale} />
		{/if}
	{/each}
{:else}
	<NotFound {globalSettings} />
{/if}
