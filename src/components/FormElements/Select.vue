<script setup>
defineProps({
    labelText: String,
    idText: String,
    class: String,
    options: {
        type: Array,
        required: true
    }
});
</script>

<template>
    <div class="w-full max-w-lg">
        <label :for="idText" class="block font-medium font-bold text-gray-900">{{ labelText }}</label>
        <div class="mt-2">
            <select 
                :id="idText"
                :class="class"
                class="block rounded-md border-0 py-1.5 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-700 high-contrast:focus:ring-contrast-link"
            >
                <option v-for="option in options" :key="option" :value="option">{{ option }}</option>
            </select>
        </div>
    </div>
</template>