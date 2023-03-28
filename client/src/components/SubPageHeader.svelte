<script lang="ts">
	import type { PageEntity } from '~/models/types';

	export let page: PageEntity;
</script>

{#if page}
	<section class="top__section">
		<div class="top__decoratorsGradient"><div /></div>
		<div class="top__decorator top__firstDecorator"><div /></div>
		<div class="top__decorator top__secondDecorator"><div /></div>
		<h1>
			<span>{page.attributes?.title}</span>
			{#if page.attributes?.subHeader}
				<span class="top__slogan_decorativeText">{page.attributes?.subHeader}</span>
			{/if}
		</h1>
	</section>
{/if}

<style lang="sass">
	@use "../styles/colors" as *
	@use "../styles/mixins" as *

	.top__section
		@include section
		min-height: unset
		height: 50vh
		width: 100%
		background: #fff
		position: relative
		overflow: hidden
	.top__section h1
		display: flex
		flex-direction: column
		justify-content: center
		height: 100%
		font-size: 4rem
		@include for-size(tablet)
			font-size: 3rem
	.top__section h1 span
		line-height: 0.9
		font-weight: 400
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
			margin-right: -100px
	.top__slogan_decorativeText
		color: $primary
		font-size: 2rem
		@include for-size(tablet)
			font-size: 1.5rem
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
		width: 20vw
		height: 20vw
		transform: rotate(45deg)
		top: -10vw
		right: 0
		div
			@include decoratorAnimation
		@include for-size(tablet)
			width: 30vw
			height: 30vw
			left: -25vw
		@include for-size(phone)
			display: none
	.top__secondDecorator
		width: 25vw
		height: 25vw
		bottom: -20vw
		transform: rotate(45deg)
		right: 30%
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
		@include for-size(tablet)
			width: 40vw
			height: 40vw
			right: -25vw

</style>
