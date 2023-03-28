<script lang="ts">
	import type { LocaleMeta } from '~/types/locale';
	import { hrefWithLangQueryParam } from '~/utils/navigation';

	export let href: string = '';
	export let withArrow: boolean = false;
	export let inverted: boolean = false;
	export let disabled: boolean = false;
	export let locale: LocaleMeta;
</script>

<button
	href={hrefWithLangQueryParam(locale.code, href)}
	class:inverted
	class:disabled
	class={$$props.class}
>
	{#if !!href}
		<a href={hrefWithLangQueryParam(locale.code, href)}>
			<slot />
		</a>
	{:else}
		<span>
			<slot />
		</span>
	{/if}

	{#if !inverted}
		<div class="decorator" />
	{/if}
	{#if withArrow}
		<svg
			style="margin-right: 10px"
			width="25"
			height="9"
			viewBox="0 0 25 9"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M23.9284 5.01209C24.1236 4.81683 24.1236 4.50025 23.9284 4.30499L20.7464 1.123C20.5511 0.927743 20.2345 0.927743 20.0393 1.123C19.844 1.31827 19.844 1.63485 20.0393 1.83011L22.8677 4.65854L20.0393 7.48697C19.844 7.68223 19.844 7.99881 20.0393 8.19407C20.2345 8.38933 20.5511 8.38933 20.7464 8.19407L23.9284 5.01209ZM0.850388 5.15854L23.5748 5.15854V4.15854L0.850388 4.15854L0.850388 5.15854Z"
			/>
		</svg>
	{/if}
</button>

<style lang="sass">
  @use "../styles/colors" as *
  @use "../styles/mixins" as *

  button
    display: flex
    justify-content: center
    align-items: center
    background: $primary
    border-radius: 10px
    color: #fff
    border: none
    cursor: pointer
    max-width: 200px
    overflow: hidden
    position: relative
    &:hover:not(.disabled)
      color: $primary
      path
        fill: $primary !important 
      *
        z-index: 1
        color: $primary
      .decorator
        top: 0
        z-index: 0
  button:hover:not(.disabled)
    color: $primary
  button a, button span
    width: 100%
    height: 100%
    padding: 10px 15px
  button *
    color: #fff
    text-decoration: none
    &:hover:not(.disabled)
      color: $primary
      z-index: 1
  button svg
    fill: #fff 
    z-index: 1
  .decorator
    position: absolute
    height: 100%
    width: 100%
    top: -100%
    background: #fff
    transition: top .3s ease
  .disabled
    background: $disabledBg
    cursor: not-allowed
  .inverted
    color: $text-dark
    background: #fff
    svg
      fill: $primary
    *
      color: $text-dark
  .animateBounce
    @keyframes bounce
      0%
        transform: scale(1)
      70%
        transform: scale(1.10)
      100%
        transform: scale(1)
    animation: bounce 2s ease

  .top__cta_button
    margin-top: 20px
    font-size: 25px
    z-index: 1
    @include for-size(phone)
      position: absolute
      bottom: 0
      left: 0
      width: 100%
      border-radius: 0
      max-width: unset
      a
        width: unset
      svg
        display: none
    
  .cards__card_button
    position: absolute
    top: -30px
    right: 20px
    font-size: 20px
    min-width: 125px
    justify-content: space-between
    filter: drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.09))
    text-align: left
  .carousel__item_button
    font-size: 18px
    margin-left: auto
    transition: opacity 0.5s ease
  .form__submit
    width: 100%
    margin-top: 20px
    font-size: 20px
    max-width: unset
    &:hover:not(.disabled)
      border: 1px solid $primary
</style>
