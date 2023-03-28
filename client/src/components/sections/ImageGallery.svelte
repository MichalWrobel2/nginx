<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';

	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsImageGallerySection } from '~/models/types';
	import PhotoSwipeGallery from '~/components/PhotoSwipeGallery.svelte';
	import type { GalleryImage } from '~/types/gallery';
	import { getImageUrl } from '~/utils/images';

	export let section: ComponentSectionsImageGallerySection;

	const images: GalleryImage[] =
		section.images?.data?.map((image) => ({
			width: image.attributes?.width ?? 0,
			height: image.attributes?.height ?? 0,
			largeURL: getImageUrl(image.attributes?.url ?? ''),
			thumbnailURL: getImageUrl(image.attributes?.formats?.thumbnail?.url),
			alternativeText: image.attributes?.alternativeText ?? ''
		})) ?? [];
</script>

<section>
	<SectionHeader title={section.title || ''} />
	<p class="text__wrapper">
		<SvelteMarkdown source={section.text} />
	</p>
	<div class="gallery__wrapper">
		<PhotoSwipeGallery galleryID={`gallery-${section.id}`} {images} />
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *
  @use "../../styles/colors" as *

  section
    @include section
    min-height: unset
  .gallery
    &__wrapper :global(.pswp-gallery) 
      display: grid
      grid-template-columns: repeat(var(--grid-columns), minmax(0, 1fr))
      justify-items: center
      align-items: center
      gap: 0.5rem
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important
      justify-items: unset !important
    &__wrapper :global(.pswp-gallery a) 
      overflow: hidden
      border-radius: 5px
      height: 100%
      width: 100%
      max-width: 300px !important
      @include for-size(phone)
        max-width: unset !important
    &__wrapper :global(.pswp-gallery img) 
      width: 100%
      height: 100% !important
      object-fit: cover
      max-height: 250px
      max-width: 300px !important
      @include for-size(phone)
        max-width: unset !important
    &__wrapper
      padding: 0 10px
      font-size: 18px
</style>
