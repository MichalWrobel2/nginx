<script lang="ts">
	import type { GlobalEntity, LogoEntity, PageEntity } from '~/models/types';
	import type { LocaleMeta } from '~/types/locale';
	import { getImageUrl } from '~/utils/images';
	import { hrefWithLangQueryParam } from '~/utils/navigation';

	export let logo: LogoEntity;
	export let locale: LocaleMeta;
	export let pages: PageEntity[];
	export let globalSettings: GlobalEntity | undefined;

	$: mainLogo = logo?.attributes?.Logo.data?.attributes;
	$: footerLogo = globalSettings?.attributes?.footer?.logo?.data?.attributes;

	$: targetLogo = footerLogo || mainLogo;

	$: sections = globalSettings?.attributes?.footer?.sections ?? [];

	const resetScroll = (e: Event) => {
		e.preventDefault();
		window?.scroll({
			top: 0,
			behavior: 'smooth'
		});
	};
</script>

<footer>
	{#if targetLogo}
		<div class="footer__logo">
			<a href={hrefWithLangQueryParam(locale.code, '/')} on:click={resetScroll}>
				<img src={getImageUrl(targetLogo.url)} alt={targetLogo.alternativeText} />
			</a>
		</div>
	{/if}
	<div class="footer__content">
		<div class="footer__content_item">
			{#if globalSettings?.attributes?.footer?.navigationTitle}
				<h2>{globalSettings?.attributes?.footer?.navigationTitle}</h2>
			{/if}
			<nav class="footer__nav">
				<ul>
					{#each pages as page}
						{#if page.attributes?.slug && page.attributes.isVisibleInNavigation}
							<li>
								<a
									href={hrefWithLangQueryParam(
										page.attributes?.locale ?? 'en',
										page.attributes?.slug ?? '/'
									)}>{page.attributes?.label}</a
								>
							</li>
						{/if}
					{/each}
				</ul>
			</nav>
		</div>
		{#each sections as section}
			{#if section && section.links}
				<div class="footer__content_item">
					<h2>{section.header}</h2>
					<nav class="footer__nav">
						<ul>
							{#each section.links as link}
								{#if link}
									<li>
										<a href={hrefWithLangQueryParam(locale.code, link.href || '')}>{link.label}</a>
									</li>
								{/if}
							{/each}
						</ul>
					</nav>
				</div>
			{/if}
		{/each}
	</div>
	<div class="footer__copyright_info">Copyright 2022 ©, All rights reserved</div>
</footer>

<style lang="sass">
  @use "../styles/mixins" as *
  @use "../styles/colors" as *

  footer
    @include section
    min-height: 50vh
    background: $darkBg
    color: #fff
    display: flex
    flex-direction: column
    margin-top: 25px
    @include for-size(tablet)
      padding: 30px
    @include for-size(phone)
      padding: 15px
  .footer
    &__content
      display: flex
      padding: 30px 0
      flex-wrap: wrap
      @include for-size(phone)
        justify-content: space-between
    &__content_item
      @include for-size(phone)
        margin: 15px
    &__content_item h2
      margin-right: 100px
      font-weight: 500
      @include for-size(tablet)
        font-size: 20px
        margin: 0
        margin-right: 35px
      @include for-size(phone)
        margin: 0
    &__nav
      margin-top: 15px
    &__nav ul
      padding-left: 5px
    &__nav li
      list-style: none
		  text-decoration: none
    &__nav a
      color: #fff
      text-decoration: none
      font-size: 19px
      @include for-size(tablet)
        font-size: 15px
    &__copyright_info
      margin-top: auto
      align-self: flex-end
      @include for-size(tablet)
        font-size: 10px
    &__logo 
      height: 35px
      margin-top: 15px
      filter: invert(100%) sepia(2%) saturate(7%) hue-rotate(358deg) brightness(104%) contrast(104%)
      @include for-size(tablet)
        height: 25px
    &__logo a
      display: flex
      height: 100%
</style>
