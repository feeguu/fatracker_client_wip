<script setup>
defineProps({
     studantName: String
})
import { RiDeleteBinLine, RiPencilLine } from "@remixicon/vue"
</script>
<template>
     <div class="flex items-center p-4">
		<p class="flex-1"> {{ studantName }} </p>
		<button aria-label="Editar curso" title="Editar">
			<RiPencilLine class="w-6 h-6 mx-4" />
		</button>
		<button aria-label="Excluir curso" title="Excluir">
			<RiDeleteBinLine class="w-6 h-6" />
		</button>
	</div>

	<div class="divide-y divide-gray-200 rounded-md border border-gray-200" />
</template>