<script lang="ts">
	import lottie from 'lottie-web';
	import SvelteMarkdown from 'svelte-markdown';
	import locationPin from '~/lib/animations/locationPin.json';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsAddressSection } from '~/models/types';
	import { onMount } from 'svelte';

	export let section: ComponentSectionsAddressSection;

	let animationContainer: HTMLDivElement;
	$: animationContainer;

	const showAnimation = () => {
		lottie.loadAnimation({
			container: animationContainer,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: locationPin
		});
	};

	onMount(() => {
		showAnimation();
	});
</script>

<section>
	<SectionHeader title={section.title || ''} />
	<div class="wrapper">
		<div class="animation__wrapper" bind:this={animationContainer} />
		<p class="text__wrapper">
			<SvelteMarkdown source={section.address} />
		</p>
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *

  section
    @include section
    min-height: unset
  .wrapper
    display: flex
    justify-content: center
    @include for-size(phone)
      flex-direction: column
      align-items: center
  .animation
    &__wrapper
      max-width: 300px
      overflow: hidden
      z-index: 1
      border-radius: 15px
      margin-top: -70px
  .text
    &__wrapper
      max-width: calc(50% + 50px)
      padding: 25px
      margin-left: 50px
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
