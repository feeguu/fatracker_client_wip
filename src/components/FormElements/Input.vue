<script setup>
defineProps({
	labelText: String,
	placeholderText: String,
	nameText: String,
	idText: String,
	listText: String,
	ariaLabelText: String,
	type: String,
	class: String,
	modelValue: String,
})

const emit = defineEmits({
	"update:modelValue": String,
})
</script>

<template>
	<div class="w-full max-w-lg">
		<label for="{{labelText}}" class="block font-medium text-gray-900">{{ labelText }}</label>
		<div class="mt-2">
			<input
				type="text"
				:name="nameText"
				:id="idText"
				:list="listText"
				:placeholder="placeholderText"
				:aria-label="ariaLabelText"
				class="block rounded-md border-0 py-1.5 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-700 high-contrast:focus:ring-contrast-link"
				:class="class"
				v-bind="$attrs"
				:value="modelValue"
				@input="emit('update:modelValue', $event.target.value)"
				required
			/>
		</div>
	</div>
</template>
