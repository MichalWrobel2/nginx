<script lang="ts">
	import { onMount } from 'svelte';
	import type { LogoEntity, PageEntity } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';
	import { getImageUrl } from '~/utils/images';
	import { hrefWithLangQueryParam } from '~/utils/navigation';

	type SelectEntry = { label: string; value: string };

	export let pages: PageEntity[];
	export let logo: LogoEntity;
	export let locales: (LocaleMeta & { isDefault: boolean })[];
	export let locale: LocaleMeta;

	let defaultLocaleSelectItem: SelectEntry;

	let scroll = 71;

	const handleMobileMenuClick = () => {
		mobileMenuOpened = !mobileMenuOpened;
	};

	const hideMobileMenuIfVisible = () => {
		if (!mobileMenuOpened) return;
		mobileMenuOpened = false;
	};

	const localesSelectItems = locales?.map((locale) => ({
		value: locale.code,
		label: locale.name
	}));

	let Select: any;
	onMount(async () => {
		const module = await import('svelte-select');
		Select = module.default;
		if (locale.name && locale.code) {
			defaultLocaleSelectItem = {
				label: locale.name,
				value: locale.code
			};
		}
	});

	const handleSelect = ({ detail }: { detail: { value: string; label: string } }) => {
		const targetUrl = new URL(window.location.origin);
		const defaultLocale = locales.find((locale) => locale.isDefault);
		const langToAppend = detail.value === defaultLocale?.code ? '' : detail.value;
		window.location.replace(targetUrl.toString() + langToAppend);
	};

	onMount(() => {
		document.addEventListener('scroll', () => {
			scroll = window?.scrollY;
		});
		scrolled = window?.scrollY > 70;
	});

	$: scrolled = scroll > 70;
	$: mobileMenuOpened = false;
</script>

<header class:scrolled class:mobileMenuOpened>
	<div class="decorator" class:scrolled class:mobileMenuOpened />
	<div class="logo" class:scrolled>
		<a href={hrefWithLangQueryParam(locale.code, '/')}>
			<img
				src={getImageUrl(logo?.attributes?.Logo.data?.attributes?.url ?? '')}
				alt={logo?.attributes?.Logo.data?.attributes?.alternativeText}
			/>
		</a>
	</div>
	<nav class="nav" class:scrolled class:mobileMenuOpened>
		<ul>
			{#if pages?.length}
				{#each pages as page}
					{#if page.attributes?.slug && page.attributes.isVisibleInNavigation}
						<li>
							<a
								href={hrefWithLangQueryParam(
									page.attributes?.locale ?? 'en',
									page.attributes?.slug ?? '/'
								)}
								on:click={hideMobileMenuIfVisible}>{page.attributes?.label}</a
							>
						</li>
					{/if}
				{/each}
			{/if}
		</ul>
	</nav>
	<div class="invisiblePlaceholder" />

	{#if Select && locale?.code}
		<div class="localeSelectWrapper" class:mobileMenuOpened>
			<svelte:component
				this={Select}
				items={localesSelectItems}
				value={defaultLocaleSelectItem}
				searchable={false}
				clearable={false}
				containerStyles="border:none;"
				listAutoWidth={false}
				on:change={handleSelect}
				--item-color="red"
				--placeholder-color="red"
				--input-color="red"
			/>
		</div>
	{/if}
	{#if !Select}
		<div class="staticLocalesWrapper">
			{#each locales as l, i}
				<a
					class={locale.code === l.code ? 'staticLocalesWrapper__activeLocale' : ''}
					href={`/${l.code}`}>{l.name}</a
				>
				{#if i < locales.length - 1}
					<span class="staticLocalesWrapper__separator">|</span>
				{/if}
			{/each}
		</div>
	{/if}
	<button
		name="navigation"
		class="menuButton"
		class:scrolled
		class:mobileMenuOpened
		on:click={handleMobileMenuClick}
	>
		<div class="menuBar" class:scrolled />
		<div class="menuBar" class:scrolled />
		<div class="menuBar" class:scrolled />
	</button>
</header>

<style lang="sass">
	@use "../styles/mixins" as *
	@use "../styles/colors" as *

	$headerHeight: 85px
	$scolledHeaderHeight: 70px
	$mobileHeaderHeight: 70px

	header 
		height: calc($headerHeight)
		width: 100%
		display: flex
		align-items: center
		padding: 7.5px 150px
		padding-top: 20px
		position: fixed
		z-index: 10
		transition: 300ms
		& > * 
			z-index: 1
	header img 
		flex-shrink: 0
		min-width: 100%
		min-height: 100%
		max-width: 100%
		max-height: 100%
	header.scrolled
		margin: 0
		height: $scolledHeaderHeight
		padding: 7.5px 30px
	header.mobileMenuOpened
		height: 100%
		flex-direction: column
		margin: 0
		.logo
			align-self: flex-start
			height: 35px
			margin: 15px
	.logo 
		height: calc(100% - 22px)
		transition: height .3s
		@include for-size(tablet)
			height: 30px
	.logo a
		display: flex
		height: 100%
	.logo.scrolled
		height: calc(100% - 30px)
		@include for-size(tablet)
			height: 35px
	.nav ul 
		display: flex
		margin: 0
		height: 20px
	.nav li 
		list-style: none
		padding: 0
		margin: 0
		text-decoration: none
		margin-left: 15px
		&:hover
			color: $primary
	.nav a 
		all: unset
		cursor: pointer
		font-weight: 500
		font-size: 17px
	.decorator
		position: absolute
		height: 100%
		width: 100%
		background: #fff
		top: 0
		left: 0
		z-index: 0
		transform: translateY(- $headerHeight)
		transition: 300ms
		&.scrolled
			transform: translateY(0)
		&.mobileMenuOpened
			transform: translateY(0)
	.menuButton
		display: none
		flex-direction: column
		justify-content: space-between
		width: 30px
		height: 20px
		background: unset
		border: unset
		padding: unset
		cursor: pointer
		box-sizing: border-box
	.menuButton.mobileMenuOpened
		position: absolute
		top: 33px
		right: 28px
		height: 30px
		> div
			background: #000
			position: absolute
			transition: 300ms
		div:first-of-type
			transform: rotate(45deg)
			margin-top: 14px
		div:nth-child(2)
			transform: rotate(-45deg)
			margin-top: 14px
		div:last-of-type
			display: none
	.menuBar
		height: 3px
		width: 100%
		background: #000
	.localeSelectWrapper
		margin: 0 5px
		cursor: pointer
		--item-hover-bg: rgba(255, 74, 74, .05)
		--item-is-active-bg: #ff4a4a
		--font-size: 18px
		> div
			display: flex
			justify-content: center
	.localeSelectWrapper.mobileMenuOpened
		margin: unset
		display: flex
		align-self: flex-start
		margin-top: auto
	.invisiblePlaceholder
		width: 1px
		height: 1px
		background: none
		margin-left: auto
	.staticLocalesWrapper
		margin-right: 5px
		&__separator
			margin: 0 5px
		&__activeLocale
			font-weight: 500
	.staticLocalesWrapper a
		text-decoration: unset
		color: #000
	.staticLocalesWrapper a:hover
		color: $primary
	
	@include for-size(desktop)
		header
			padding: 7.5px 100px
			padding-top: 20px
	@include for-size(tablet)
		header
			padding: 7px 25px
	@include for-size(phone)
		header 
			height: $mobileHeaderHeight
			padding: 10px 30px
		header.scrolled
			margin: 0
			padding: 10px 30px
		header.mobileMenuOpened
			.logo
				visibility: hidden
		.logo
			max-width: 90px
			max-height: 70px
		.nav
			display: none
			width: 100%
			top: 0
			left: 0
			z-index: 5
		.nav ul 
			flex-direction: column
			padding-inline-start: unset
		.nav li
			margin-bottom: 15px
		.nav a
			font-size: 27px
		.nav.mobileMenuOpened
			display: flex
		.menuButton
			display: flex
</style>
