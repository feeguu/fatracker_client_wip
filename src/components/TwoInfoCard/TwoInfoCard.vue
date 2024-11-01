<script setup>
defineProps({
    title: String,
    subtitle: String
})
import { RiDeleteBinLine, RiPencilLine } from "@remixicon/vue"
</script>

<template>
    <div
        class="border shadow px-4 py-3 rounded w-full max-w-2xl flex items-center gap-x-4 mb-4 hover:cursor-pointer hover:bg-neutral-100 high-contrast:hover:bg-contrast-link">
        <div class="flex-1 space-y-1 my-1">
            <strong class="font-semibold"> {{ title }} </strong>
            <p class="text-sm"> {{ subtitle }} </p>
        </div>
        <button aria-label="Editar curso" title="Editar">
            <RiPencilLine class="w-6 h-6" />
        </button>
        <button aria-label="Excluir curso" title="Excluir">
            <RiDeleteBinLine class="w-6 h-6" />
        </button>
    </div>
</template>