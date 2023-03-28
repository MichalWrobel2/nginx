<script lang="ts">
	import Button from '~/components/Button.svelte';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsCardsSection, ComponentSharedCard } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';
	import { viewportEventHandler } from '~/utils/handlers';
	import { getImageUrl, getSrcset } from '~/utils/images';
	import { hrefWithLangQueryParam } from '~/utils/navigation';
	import viewport from '~/utils/viewport';

	export let section: ComponentSectionsCardsSection;
	export let locale: LocaleMeta;
	const cards: ComponentSharedCard[] = (section.cards as ComponentSharedCard[]) ?? [];

	let animateBounce = false;

	const toggle = (value: boolean) => () => {
		animateBounce = value;
	};
</script>

<section>
	<SectionHeader title={section.sectionTitle ?? ''} />
	<div class="cards__wrapper">
		{#each cards as card, i}
			<div class="cards__card" class:cards__card_first_card={i === 0}>
				<picture class="cards__card_image">
					{#if card.image?.data?.attributes}
						<source srcset={getSrcset(card.image?.data?.attributes)} sizes="100vw" />
						<img
							src={getImageUrl(card.image?.data?.attributes?.url ?? '')}
							alt={card.image?.data?.attributes?.alternativeText}
							loading="lazy"
						/>
					{/if}
				</picture>
				<div class="cards__card_body">
					<h3>
						<a href={hrefWithLangQueryParam(locale.code, card.button?.href ?? '')}>
							{card.title}
						</a>
					</h3>
					<p>{card.body}</p>
					{#if card.button?.label}
						<div
							class="cards__card_button_wrapper"
							use:viewport
							on:enterViewport={viewportEventHandler(toggle(true))}
							on:exitViewport={viewportEventHandler(toggle(false))}
						>
							<Button
								class={`cards__card_button ${animateBounce ? 'animateBounce' : ''}`}
								href={card.button?.href ?? '/'}
								withArrow
								inverted
								{locale}
							>
								<span>
									{card.button?.label}
								</span>
							</Button>
						</div>
					{/if}
				</div>
			</div>
		{/each}
	</div>
</section>

<style lang="sass">
  @use "../../styles/colors" as *
  @use "../../styles/mixins" as *

  section 
    @include section
    display: flex
    flex-direction: column
    justify-content: center
    height: 100vh
    min-height: 400px
    @include for-size(tablet)
      height: 100%
  .visible
    button
      transform: scale(3) !important
      background: red
  .cards
    &__wrapper
      display: flex
      justify-content: center
      align-items: center
      height: 70%
      @include for-size(tablet)
        flex-direction: column
    &__card
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
      background: #fff
      border-radius: 15px
      overflow: hidden
      display: flex
      flex-direction: column
      max-width: 50%
      height: 100%
      margin-left: 50px
      flex: 1
      max-height: 500px
      @include for-size(tablet)
        margin-left: unset
        margin-bottom: 25px
        width: 100%
        max-width: unset
      @include for-size(phone)
        max-width: unset
    &__card_first_card
      margin-left: 0
    &__card_image
      height: 50%
      overflow: hidden
    &__card_image img
      width: 100%
      height: 100%
      object-fit: cover
    &__card_body
      height: 50%
      position: relative
      padding: 30px
      display: flex
      flex-direction: column
      @include for-size(tablet)
        padding: 20px
    &__card_body p
      overflow-y: auto
      margin-top: 5px
      height: 100%
      line-height: 1.5em
      max-height: 9em
      @include for-size(tablet)
        margin: 0
        max-height: unset
    &__card_body h3
      font-weight: 400
      margin: 0
      font-size: 26px
      @include for-size(tablet)
        font-size: 21px
    &__card_body a
      text-decoration: unset
      color: unset
    &__card_button_wrapper
      position: absolute
      top: 0
      left: 0
      height: 100%
      width: 100%

</style>
