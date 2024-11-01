<script setup>
import { RiContrastLine } from "@remixicon/vue"
import Sidebar from "../components/Sidebar/Sidebar.vue"

function toggleHighContrast() {
	document.documentElement.classList.toggle("high-contrast")
}
</script>

<template>
	<div class="min-h-screen w-full flex bg-neutral-50">
		<div class="sr-only">
			<a href="#sidebar" accesskey="2">Ir para o menu de navegação [2]</a>
		</div>

		<Sidebar />

		<div class="flex-1 p-10 flex flex-col">
			<RouterView />
		</div>

		<button
			accesskey="h"
			class="bg-blue-600 fixed bottom-4 right-4 p-2 rounded text-white"
			title="Alto Contraste"
			aria-label="Ativar ou desativar alto constraste"
			@click="toggleHighContrast"
		>
			<RiContrastLine class="h-6 w-6" />
		</button>
	</div>
</template>
