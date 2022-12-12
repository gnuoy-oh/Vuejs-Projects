<template>
	<!-- type="submit" 인 경우, id가 필요 -->
	<button class="button" type="submit" :class="[themeClass, sizeClass]" :id="submitId" v-if="submitId"
					:disabled="disabled" :title="title">
		<slot>{{ label }}</slot>
	</button>
	<!-- 그 외 타입은 id 불필요 -->
	<button class="button" type="button" :class="[themeClass, sizeClass]"
					:disabled="disabled" :title="title"
					@click="handleClick($event)"
					@mousedown="mouseDown($event)"
					v-else>
		<slot>{{ label }}</slot>
	</button>
</template>

<script>
export default {
	name: "AtomButton",
	props: {
		submitId: {
			type: String,
			default: null
		},
		label: {
			type: String,
			default: "Button"
		},
		disabled: {
			type: Boolean,
			default: false
		},
		title: {
			type: String,
			default: "button"
		},
		theme: {
			type: String,
			theme: ""
		},
		size: {
			type: String,
			default: ""
		}

	},
	computed: {
		themeClass() {
			return !_.isEmpty(this.theme) ? `button--${this.theme}` : "";
		},
		sizeClass() {
			return !_.isEmpty(this.size) ? `button--${this.size}` : "";
		}
	},
	methods: {
		handleClick($event) {
			console.log('Clicked');
			this.$emit("click", $event);
		},
		mouseDown($event) {
			this.$emit("mousedown", $event);
		}
	}
};
</script>

<style lang="scss">
</style>
