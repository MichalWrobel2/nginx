<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsNoClickableImages } from '~/models/types';
	import { getImageUrl, getSrcset } from '~/utils/images';

	export let section: ComponentSectionsNoClickableImages;

	const images = section.images?.data ?? [];
</script>

<section>
	<SectionHeader title={section.title || ''} />
	<p class="text__wrapper">
		<SvelteMarkdown source={section.text} />
	</p>
	<div class="gallery__wrapper">
		{#each images as image}
			<div class="gallery__image_wrapper">
				{#if image.attributes && image.attributes.formats}
					<source srcset={getSrcset(image.attributes)} sizes="100vw" />
					<img
						src={getImageUrl(image.attributes.url)}
						alt={image.attributes.alternativeText}
						loading="lazy"
					/>
				{/if}
			</div>
		{/each}
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *
  @use "../../styles/colors" as *

  section
    @include section
    min-height: unset
  .gallery
    &__wrapper
      display: grid
      grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)) !important
      justify-items: unset !important
    &__image_wrapper
      overflow: hidden
      border-radius: 5px
      height: 100%
      width: 100%
      max-width: 300px !important
      @include for-size(phone)
        max-width: unset !important
    &__wrapper img
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
