<script setup>
defineProps({
	name: String,
	icon: Object,
	active: Boolean,
})
</script>

<template>
	<li role="menuitem">
		<RouterLink
			:class="[
				'flex items-center gap-x-3 text-white font-semibold px-2 py-2 -mx-2 rounded hover:bg-black/10 hover:opacity-100 high-contrast:ring-1 high-contrast:hover:bg-contrast-link high-contrast:hover:text-contrast-primary',
				active
					? 'bg-black/15 opacity-100 high-contrast:bg-contrast-link high-contrast:text-contrast-primary'
					: 'opacity-85 high-contrast:text-contrast-link',
			]"
			:aria-current="active && 'page'"
			v-bind="$attrs"
		>
			<component :is="icon" class="w-6 h-6" />
			{{ name }}
		</RouterLink>
	</li>
</template>
