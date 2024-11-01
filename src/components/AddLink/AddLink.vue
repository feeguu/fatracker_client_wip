<script setup>
import { defineProps } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps({
	linkText: String,
	linkPathTo: String,
	onClickFun: Function,
});
</script>

<template>
	<template v-if="linkPathTo">
		<RouterLink 
			:to="linkPathTo" 
			@click="onClickFun"
			class="flex items-center font-semibold mt-6 hover:underline high-contrast:hover:text-contrast-link">
			<span class="high-contrast:hover:text-contrast-link">+ {{ linkText }}</span>
		</RouterLink>
	</template>
	<template v-else>
		<button 
			@click="onClickFun"
			type="button"
			class="flex items-center font-semibold mt-6 hover:underline high-contrast:hover:text-contrast-link">
			<span class="high-contrast:hover:text-contrast-link">+ {{ linkText }}</span>
		</button>
	</template>
</template>
