<script lang="ts">
	import type { SloganEntity } from '~/models/types';
	import raisedFloorWokrer from '~/lib/images/raised_foor_worker.png';
	import workerMobile from '~/lib/images/worker.png';
	import Button from '~/components/Button.svelte';
	import type { LocaleMeta } from '~/types/locale';

	export let slogan: SloganEntity;
	export let locale: LocaleMeta;

	const scrollToFirstSection = (e: Event) => {
		e.preventDefault();
		const firstSection = document?.getElementsByTagName('section')?.[1];
		firstSection?.scrollIntoView({
			behavior: 'smooth',
			block: 'end'
		});
	};
</script>

<section class="top__section">
	<div class="top__decoratorsGradient"><div /></div>
	<div class="top__decorator top__firstDecorator"><div /></div>
	<div class="top__decorator top__secondDecorator"><div /></div>
	<div class="top__decorator top__thirdDecorator"><div /></div>
	<div class="top__imageContainer">
		<img class="top__imageFloorWorker" src={raisedFloorWokrer} alt="worker" />
		<img class="top__imageWorkerMobile" src={workerMobile} alt="worker" />
	</div>
	<h1>
		<span>{slogan?.attributes?.topText}</span>
		<span class="top__slogan_decorativeText">{slogan?.attributes?.middleText}</span>
		<span>{slogan?.attributes?.bottomText}</span>
		<div on:click={scrollToFirstSection}>
			<Button
				class="top__cta_button"
				href={slogan?.attributes?.CTASloganButton?.[0]?.href ?? '/'}
				withArrow
				{locale}
			>
				<span>{slogan?.attributes?.CTASloganButton?.[0]?.label ?? ''}</span>
			</Button>
		</div>
	</h1>
</section>

<style lang="sass">
	@use "../styles/colors" as *
	@use "../styles/mixins" as *

	.top__section
		@include section
		height: 100vh
		min-height: 400px
		width: 100%
		background: #fff
		position: relative
		overflow: hidden
	.top__section h1
		display: flex
		flex-direction: column
		justify-content: center
		height: 100%
		font-size: 5rem
		@include for-size(desktop)
			font-size: 4rem
		@include for-size(tablet)
			font-size: 3rem
		@include for-size(phone)
			font-size: 2.5rem
		
	.top__section h1 span
		line-height: 0.9
		font-weight: 400
		text-transform: uppercase
		z-index: 1
	.top__imageContainer
		position: absolute
		display: flex
		height: 90%
		margin-top: auto	
		width: 100%
		bottom: 0
		right: 0
		z-index: 1
		img 
			width: auto
			height: auto
			margin-left: auto
			object-fit: cover
	.top__imageFloorWorker
		width: auto
		height: auto
		margin-left: auto
		object-fit: cover
		@include for-size(tablet)
			display: none
	.top__imageWorkerMobile
		display: none
		max-height: 70%
		margin-top: auto
		@include for-size(tablet)
			display: unset
		@include for-size(phone)
			margin-right: -150px
			transform: scale(0.8)
	.top__slogan_decorativeText
		color: $primary
		font-size: 150%
	.top__decoratorsGradient
		background: linear-gradient(0deg, #fff, transparent)
		height: 65%
		width: 100%
		position: absolute
		left: 0
		bottom: 0
		z-index: 1
	.top__decorator
		position: absolute
		background: $decoratorColor
		border-radius: 7.5%
		div 
			position: absolute
			left: -10%
			top: -10%
			width: 120%
			height: 120%
			border-radius: inherit
			background: inherit
			opacity: 0.5
	.top__firstDecorator
		width: 25vw
		height: 25vw
		top: 60vh
		transform: rotate(60deg)
		left: -17vw
		div
			@include decoratorAnimation
		@include for-size(tablet)
			width: 40vw
			height: 40vw
			left: -25vw
		@include for-size(phone)
			display: none
	.top__secondDecorator
		width: 40vw
		height: 40vw
		bottom: -20vw
		transform: rotate(60deg)
		right: 0
		div
			@include decoratorAnimation
		@include for-size(tablet)
			width: 40vw
			height: 40vw
			right: -25vw
		@include for-size(phone)
			right: -35vw
			top: 30%
			width: 80vw
			height: 80vw
	.top__thirdDecorator
		width: 20vw
		height: 20vw
		top: -15vw
		transform: rotate(60deg)
		right: 50%
		div
			@include decoratorAnimation
		@include for-size(tablet)
			width: 40vw
			height: 40vw
			right: -25vw
		@include for-size(phone)
			display: none
</style>
