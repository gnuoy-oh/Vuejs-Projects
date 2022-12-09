<template>
	<div class="checkbox">
		<input type="checkbox" class="checkbox__input" :id="checkboxId" :disabled="disabled" :name="name" :value="value"/>
		<label :for="checkboxId" class="checkbox__label">
			<slot>{{ label }}</slot>
		</label>
	</div>
</template>

<script>

export default {
	name: "atom-checkbox",

	props: {
		label: {
			type: String,
			required: true
		},
		checkboxId: {
			type: String,
			default: 'check-01'
		},
		disabled: {
			type: Boolean,
			default: false
		},
		name: {
			type: String,
			default: null
		},
		value: {
			type: String,
			default: null
		},
	},

};
</script>
