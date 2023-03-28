<script lang="ts">
	import Footer from '~/components/Footer.svelte';
	import Navbar from '~/components/Navbar.svelte';
	import type { GlobalEntity, LogoEntity, PageEntity, SloganEntity } from '~/models/types';
	import './styles.css';

	export let data: {
		page: PageEntity;
		pages: PageEntity[];
		logo: LogoEntity;
		locale: { name: string; code: string };
		locales: { code: string; name: string; isDefault: boolean }[];
		globalSettings: GlobalEntity;
		slogan: SloganEntity;
	};

	$: ({ pages, logo, page, locales, slogan, locale, globalSettings } = data);
</script>

<div class="app">
	<Navbar {pages} {logo} {locales} {locale} />
	<main>
		<slot {page} {locale} {slogan} {globalSettings} />
	</main>
	<Footer {pages} {logo} {globalSettings} {locale} />
</div>

<style lang="sass">
	@use "../styles/mixins" as *

	.app 
		display: flex
		flex-direction: column
		min-height: 100vh
	
	main 
		flex: 1
		display: flex
		flex-direction: column
		width: 100%
		margin: 0 auto
		box-sizing: border-box
</style>
