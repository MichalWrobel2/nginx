<script lang="ts">
	export let title: string;
</script>

<h2 class="section__title">
	{title}
</h2>

<style lang="sass">
  @use "../styles/mixins" as *

  .section
    &__title
      font-weight: 400
      font-size: 35px
      transition: all .2s ease
      @include for-size(tablet)
        font-size: 27px
      @include for-size(phone)
        font-size: 23px
      

</style>
