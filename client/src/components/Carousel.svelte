<script lang="ts">
	import { Endpoints } from '~/api/endpoints';
	import { onMount } from 'svelte';
	import type { ComponentSharedMainCarouselItem } from '~/models/types';
	import { getImageUrl, getSrcset } from '~/utils/images';

	let Carousel: any;
	$: Carousel;
	onMount(async () => {
		// @ts-ignore
		const module = await import('svelte-carousel');
		Carousel = module.default;
	});

	export let slides: ComponentSharedMainCarouselItem[];
	export let onPageChange: ({ detail }: { detail: number }) => void;
</script>

<div class="carouselWrapper">
	{#if Carousel}
		<svelte:component
			this={Carousel}
			infinite
			autoplay
			dots={false}
			arrows={false}
			on:pageChange={onPageChange}
		>
			{slides?.map(() => null)}
			{#each slides as slide}
				<div class="carouselItem">
					{#if slide.image.data?.attributes}
						<source srcset={getSrcset(slide.image.data.attributes)} sizes="100vw" />
						<img
							width={slide.image.data.attributes.width}
							height={slide.image.data.attributes.height}
							src={getImageUrl(slide.image.data.attributes.url)}
							alt={slide.image?.data?.attributes?.alternativeText}
							loading="lazy"
						/>
					{/if}
				</div>
			{/each}
		</svelte:component>
	{:else}
		<div class="carouselItem">
			{#if slides?.[0]?.image.data?.attributes}
				<source srcset={getSrcset(slides[0].image.data.attributes)} sizes="100vw" />
				<img
					width={slides[0].image.data.attributes.width}
					height={slides[0].image.data.attributes.height}
					src={getImageUrl(slides[0].image.data.attributes.url)}
					alt={slides[0].image?.data?.attributes?.alternativeText}
					loading="lazy"
				/>
			{/if}
		</div>
	{/if}
</div>

<style lang="sass">
	@use "../styles/mixins" as *

	.carouselWrapper
		width: 100%
		height: 100vh
		position: relative
	.carouselItem 
		width: 100%
		height: 100vh
		overflow: hidden
		z-index: 1
	.carouselItem img 
		object-fit: cover
		width: 100%
		height: 100%
</style>
