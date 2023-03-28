<script lang="ts">
	import { onMount } from 'svelte';
	// @ts-ignore
	import PhotoSwipeLightbox from 'photoswipe/lightbox';
	import 'photoswipe/style.css';
	import type { GalleryImage } from '~/types/gallery';
	export let galleryID: string;
	export let images: GalleryImage[];

	onMount(() => {
		let lightbox = new PhotoSwipeLightbox({
			gallery: '#' + galleryID,
			children: 'a',
			pswpModule: () => import('photoswipe')
		});
		lightbox.init();
	});
</script>

<div class="pswp-gallery" id={galleryID}>
	{#each images as image}
		<a
			href={image.largeURL}
			data-pswp-width={image.width}
			data-pswp-height={image.height}
			target="_blank"
			rel="noreferrer"
		>
			<img src={image.thumbnailURL} alt={image.alternativeText} />
		</a>
	{/each}
</div>
