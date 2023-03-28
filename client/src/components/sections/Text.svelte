<script lang="ts">
	import SvelteMarkdown from 'svelte-markdown';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import type { ComponentSectionsTextSection } from '~/models/types';

	export let section: ComponentSectionsTextSection;
</script>

<section>
	<SectionHeader title={section.title || ''} />
	<p class="text__wrapper">
		<SvelteMarkdown source={section.text} />
	</p>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *
  @use "../../styles/colors" as *

  section
    @include section
    min-height: unset
  .text
    &__wrapper
      padding: 0 10px
      font-size: 18px
</style>
