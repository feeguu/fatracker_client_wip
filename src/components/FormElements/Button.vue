<script setup>
defineProps({
	buttonText: String,
    ariaLabelText: String
})
</script>

<template>
    <button 
     type="submit"
     :aria-label="ariaLabelText" 
     class="rounded-md bg-rose-700 px-12 py-2 text-sm text-center font-semibold text-white shadow-sm hover:bg-rose-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-rose-700 high-contrast:focus-visible:outline-contrast-link high-contrast:hover:bg-contrast-link high-contrast:hover:underline"
     >{{ buttonText }}
    </button>
</template>