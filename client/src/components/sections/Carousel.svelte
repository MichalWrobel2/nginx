<script lang="ts">
	import { fade } from 'svelte/transition';
	import Button from '~/components/Button.svelte';
	import Carousel from '~/components/Carousel.svelte';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type {
		ComponentSectionsCarouselSection,
		ComponentSharedMainCarouselItem
	} from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';
	import { hideLeft, hideRight, resetHorizontal } from '~/utils/animations';
	import { viewportEventHandler } from '~/utils/handlers';
	import viewport from '~/utils/viewport';

	export let section: ComponentSectionsCarouselSection;
	export let locale: LocaleMeta;
	const slides: ComponentSharedMainCarouselItem[] =
		(section.carousels as ComponentSharedMainCarouselItem[]) ?? [];

	$: pageIndex = 0;

	const onPageChange = ({ detail }: { detail: number }) => {
		pageIndex = detail;
	};
</script>

<section>
	<SectionHeader title={section.sectionTitle || ''} />
	<div class="section__wrapper">
		<div
			class="card"
			use:viewport
			on:enterViewport={viewportEventHandler(resetHorizontal)}
			on:exitViewport={viewportEventHandler(hideLeft)}
		>
			{#key pageIndex}
				<h3 class="card__header" in:fade>
					{slides[pageIndex]?.header}
				</h3>
				<p in:fade>
					{slides[pageIndex]?.text}
				</p>
			{/key}
			{#if slides[pageIndex]?.button?.label}
				<div class="card__button_wrapper" in:fade>
					<Button
						class="carousel__item_button"
						href={slides[pageIndex]?.button?.href || '#'}
						withArrow
						{locale}
					>
						{slides[pageIndex]?.button?.label}
					</Button>
				</div>
			{/if}
		</div>
		<div
			class="carousel__wrapper"
			use:viewport
			on:enterViewport={viewportEventHandler(resetHorizontal)}
			on:exitViewport={viewportEventHandler(hideRight)}
		>
			<Carousel {slides} {onPageChange} />
		</div>
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *

  section
    @include section
  .hidden
    opacity: 0
    transition: opacity 0.5s ease
  .section
    &__wrapper
      display: flex
      align-items: center
      justify-content: center
      @include for-size(tablet)
        flex-direction: column-reverse
      
  .card
    padding: 25px
    filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
    background: #fff
    border-radius: 15px
    overflow: hidden
    width: calc(100% + 100px)
    max-width: calc(40% + 50px)
    margin-right: -50px
    z-index: 1
    min-height: 275px
    display: flex
    flex-direction: column
    position: relative
    height: 60vh
    transition: all .3s ease
    min-width: 40%
    & h3
      transition: opacity 0.3s ease
    & p
      overflow: auto
      max-height: 300px
      height: 100%
      transition: opacity 0.3s ease
    &__header
      font-size: 25px
      font-weight: 400
      margin: 0
    &__button_wrapper
      margin-top: auto
    @include for-size(tablet)
      margin-right: unset
      margin-top: -10px
      max-width: unset
      width: 100%
      max-height: 150px
      h3
        font-size: 22px
      p
        font-size: 16px
        margin: 0
    
	.carousel
    &__wrapper
      transition: all .5s ease
      max-height: 70vh
      max-width: 60%
      border-radius: 15px
      overflow: hidden
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
      @include for-size(tablet)
        max-width: unset
        width: 100%
        max-height: 35vh
        width: calc(100% + 35px)
</style>
