<script lang="ts">
	import lottie from 'lottie-web';
	import emailjs from '@emailjs/browser';
	import checkmarkAnimation from '~/lib/animations/checkmark.json';
	import arrowRightAnimation from '~/lib/animations/arrowRight.json';
	import Button from '~/components/Button.svelte';
	import SectionHeader from '~/components/SectionHeader.svelte';
	import Spinner from '~/components/Spinner.svelte';
	import { emailConfiguration } from '~/config/email';
	import type { ComponentSectionsContactSection, ComponentSharedFormField } from '~/models/types';
	import { hideRight, resetHorizontal } from '~/utils/animations';
	import { viewportEventHandler } from '~/utils/handlers';
	import viewport from '~/utils/viewport';
	import { onMount } from 'svelte';
	import type { LocaleMeta } from '~/types/locale';

	export let section: ComponentSectionsContactSection;
	export let locale: LocaleMeta;

	let form: Record<string, { value: string; error?: string }> | undefined;
	let decoratorAndFormDiff: number;
	let successAnimationContainer: HTMLDivElement;
	let animation: any;
	const formFields = section.forms as ComponentSharedFormField[];

	$: decoratorAndFormDiff = 0;
	$: animation = null;
	$: loading = false;
	$: submitted = false;
	$: successAnimationContainer;
	$: form = section.forms?.reduce(
		// @ts-ignore
		(acc, { id }) => ({
			...acc,
			[id]: {
				value: null
			}
		}),
		{}
	);

	onMount(() => {
		const decoratorY = document
			.getElementsByClassName('form__decorator')[0]
			.getBoundingClientRect().y;
		const firstFormInputY = document
			.getElementsByClassName('form__input')[0]
			.getBoundingClientRect().y;
		let moveDecoratorBy = 0;

		if (decoratorY > firstFormInputY) {
			moveDecoratorBy = firstFormInputY - decoratorY;
		}

		if (decoratorY <= firstFormInputY) {
			moveDecoratorBy = decoratorY - firstFormInputY;
		}

		decoratorAndFormDiff = moveDecoratorBy;
	});

	const isFormValid = () => {
		const reuqiredFields: Array<ComponentSharedFormField> | undefined = section.forms?.filter(
			(formField) => formField?.isRequired
		) as Array<ComponentSharedFormField> | undefined;

		reuqiredFields?.map(
			({
				id,
				maxLength,
				maxLengthError,
				minLength,
				minTextError,
				regex,
				regexError,
				isRequired
			}) => {
				delete form?.[id]?.error;
				if (isRequired && !form?.[id]?.value) {
					form![id].error = section.requiredFieldText ?? 'This field is required';
				}
				if (maxLength && (form?.[id]?.value?.length ?? 0) > maxLength) {
					form![id].error = maxLengthError ?? 'Error';
				}
				if (minLength && (form?.[id]?.value?.length ?? 999) <= minLength) {
					form![id].error = minTextError ?? 'Error';
				}
				if (regex && !new RegExp(regex, 'i').test(form?.[id]?.value ?? '')) {
					form![id].error = regexError ?? 'Error';
				}
			}
		);
		// @ts-ignore
		const hasError = !!Object.values(form).find((formEntry) => formEntry.error);

		return !hasError;
	};

	const showAnimation = () => {
		lottie.loadAnimation({
			container: successAnimationContainer,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: checkmarkAnimation
		});
	};

	const animateDecorator = (container: HTMLDivElement) => {
		if (animation) {
			animation.wrapper.innerHTML = '';
		}
		animation = lottie.loadAnimation({
			container,
			renderer: 'svg',
			loop: false,
			autoplay: true,
			animationData: arrowRightAnimation
		});
	};

	const sendMail = async ({ target }: SubmitEvent) => {
		const formValid = isFormValid();
		if (!formValid) {
			return;
		}
		loading = true;
		const result = await emailjs.sendForm(
			emailConfiguration.serviceId,
			emailConfiguration.templateId,
			target as HTMLFormElement,
			emailConfiguration.publicKey
		);
		if (result) {
			loading = false;
			submitted = true;
			showAnimation();
		}
	};

	const onSubmit = (e: SubmitEvent) => {
		sendMail(e);
	};

	const onInputChange = (formId: string) => (e: Event) => {
		form![formId] = { value: (e as any)?.target?.value };
	};
</script>

<section>
	<SectionHeader title={section.sectionTitle || ''} />
	<div class="form__wrapper">
		<div
			class="form__decorator"
			class:hidden={submitted}
			style={`transform:translateY(${decoratorAndFormDiff}px);`}
			use:viewport
			on:enterViewport={viewportEventHandler(animateDecorator)}
		/>
		<div
			class="form__success_message_container"
			class:form__success_message_container--visible={submitted}
		>
			<div class="form__success_animation_container" bind:this={successAnimationContainer} />
			<h3>
				{section.submittedFormHeader}
			</h3>
			<p>
				{section.submittedFormDisclaimer}
			</p>
		</div>
		{#if !submitted}
			<form class="form__form" on:submit|preventDefault={onSubmit}>
				{#each formFields as field}
					<div class="form__entry">
						<div>
							<label for={field.id}>{field.label}</label>
							{#if field.isRequired}<span class="form__mandatory_field">*</span>{/if}
						</div>
						{#if field.isLong}
							<textarea
								use:viewport
								on:enterViewport={viewportEventHandler(resetHorizontal)}
								on:exitViewport={viewportEventHandler(hideRight)}
								on:change={onInputChange(field.id)}
								class="form__textarea"
								class:form__error={!!form?.[field.id]?.error}
								id={field.id}
								name={field.label?.toLowerCase().split(' ').join('_')}
								rows="4"
							/>
						{:else}
							<input
								use:viewport
								on:enterViewport={viewportEventHandler(resetHorizontal)}
								on:exitViewport={viewportEventHandler(hideRight)}
								on:change={onInputChange(field.id)}
								class="form__input"
								class:form__error={!!form?.[field.id]?.error}
								type="text"
								id={field.id}
								name={field.label?.toLowerCase().split(' ').join('_')}
							/>
						{/if}
						<div class="form__error_message">
							{#if form?.[field.id]?.error}
								{form[field.id].error}
							{/if}
						</div>
					</div>
				{/each}
				{#if section.submitButton}
					<Button class="form__submit" disabled={loading} {locale}>
						{#if loading}
							<Spinner />
						{:else}
							{section.submitButton.label}
						{/if}
					</Button>
				{/if}
			</form>
		{/if}
	</div>
</section>

<style lang="sass">
  @use "../../styles/mixins" as *
  @use "../../styles/colors" as *

  section
    @include section
    min-height: unset
  .hidden
    display: none
  .form
    &__form
      width: 60%
      @include for-size(phone)
        width: 100%
    &__wrapper
      display: flex
      align-items: center
    &__decorator
      width: 40%
      padding-right: 40px
      @include for-size(phone)
        display: none
    &__entry
      display: flex
      flex-direction: column
    &__input
      box-shadow: none
      border: none
      background: #fff
      border-radius: 10px
      height: 50px
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
      border: 1px solid rgba(0,0,0,0.15)
      padding: 10px 20px
      font-size: 18px
      transition: transform .5s ease
    &__textarea
      box-shadow: none
      border: none
      background: #fff
      border-radius: 10px
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05))
      border: 1px solid rgba(0,0,0,0.15)
      padding: 10px 20px
      font-size: 18px
      resize: none
      transition: transform .5s ease
    &__error
      border-color: $primary
    &__error_message
      color: $primary
      min-height: 25px
      margin-left: 10px
    &__mandatory_field
      color: $primary
    &__success_message_container
      justify-content: center
      align-items: center
      flex-direction: column
      width: 100%
      height: 100%
      display: none
    &__success_message_container--visible
      display: flex
    &__success_message_container h3
      margin: 0
      font-weight: 500
      font-size: 40px
    &__success_message_container p
      margin: 0      
      font-size: 22px
    &__success_animation_container
      display: flex
      justify-content: center
      align-items: center
      max-width: 300px
</style>
