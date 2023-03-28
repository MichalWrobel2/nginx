<script lang="ts">
	import type { GlobalEntity } from '~/models/types';

	export let globalSettings: GlobalEntity | undefined;
</script>

<section>
	{#if globalSettings?.attributes?.notFound}
		<div>
			<h1>
				{globalSettings.attributes.notFound.text}
			</h1>
			<p>
				{globalSettings.attributes.notFound.subText}
			</p>
		</div>
	{/if}
</section>

<style lang="sass">
  @use "../styles/colors" as *
  @use "../styles/mixins" as *

  section
    @include section
    display: flex
    align-items: center
    min-height: 400px
    @include for-size(tablet)
      min-height: 400px
  h1
    color: $primary
    font-size: 70px
    margin: 0
    font-weight: 400
  p
    font-size: 35px
    margin: 0
    margin-top: -20px
</style>
