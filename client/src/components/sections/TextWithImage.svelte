<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import { Endpoints } from '~/api/endpoints';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsTextWithImageSection } from '~/models/types';
	import { getImageUrl, getSrcset } from '~/utils/images';
	import { hideLeft, hideRight, resetHorizontal } from '~/utils/animations';
	import { viewportEventHandler } from '~/utils/handlers';
	import viewport from '~/utils/viewport';

	export let section: ComponentSectionsTextWithImageSection;
</script>

<section>
	<SectionHeader title={section.title || ''} />
	<div class="wrapper">
		<picture
			class="image"
			use:viewport
			on:enterViewport={viewportEventHandler(resetHorizontal)}
			on:exitViewport={viewportEventHandler(hideLeft)}
		>
			{#if section.image?.data?.attributes}
				<source srcset={getSrcset(section.image.data.attributes)} sizes="100vw" />
				<img
					src={getImageUrl(section.image.data.attributes.url)}
					alt={section.image.data.attributes.alternativeText}
					loading="lazy"
				/>
			{/if}
		</picture>
		<p
			class="text__wrapper"
			use:viewport
			on:enterViewport={viewportEventHandler(resetHorizontal)}
			on:exitViewport={viewportEventHandler(hideRight)}
		>
			<SvelteMarkdown source={section.text} />
		</p>
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *
  @use "../../styles/colors" as *

  section
    @include section
    min-height: unset
  .wrapper
    display: flex
    @include for-size(tablet)
      flex-direction: column
      align-items: center
  .image
    max-width: 50% 
    overflow: hidden
    border-radius: 15px
    max-height: 400px
    filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
    z-index: 1
    transition: 300ms
    @include for-size(desktop)
      max-height: 300px
    @include for-size(tablet)
      max-width: unset
      z-index: 0
  .image img
    width: 100%
    height: 100%
    object-fit: cover
  .text
    &__wrapper
      max-width: calc(50% + 50px)
      padding: 25px
      padding-left: 75px
      margin-left: -50px
      background: #fff
      font-size: 18px
      border-radius: 15px
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
      transition: 300ms
      @include for-size(tablet)
        max-width: unset
        z-index: 1
        margin: unset
        padding-left: 25px
        margin-top: -25px
        width: calc(100% - 25px)
      @include for-size(phone)
        padding: 10px
        width: calc(100% + 15px)
</style>
