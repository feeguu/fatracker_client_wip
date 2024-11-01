<script setup>
import { RiArrowLeftSLine } from "@remixicon/vue"
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Informações do curso</h1>
		<a href="/turmas" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="text-lg font-semibold">Logística</strong>

		<dl class="w-full max-w-xl mt-4 divide-y divide-gray-300">
			<section class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
				<strong class="font-medium">Nome do curso</strong>
				<p class="mt-1 text-gray-700 sm:col-span-1 sm:mt-0">Logística</p>

				<strong class="font-medium">Código do curso</strong>
				<p class="mt-1 text-gray-700 sm:col-span-1 sm:mt-0">LOG</p>

				<strong class="font-medium">Período</strong>
				<p class="mt-1 text-gray-700 sm:col-span-1 sm:mt-0">Semestral</p>

				<strong class="font-medium">Turnos</strong>
				<p class="mt-1 text-gray-700 sm:col-span-1 sm:mt-0">Diurno | Noturno</p>
			</section>

			<section class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
				<strong class="font-medium">Coordenador do curso</strong>
				<p class="mt-1 text-gray-700 sm:col-span-1 sm:mt-0">Coordenador 1</p>
			</section>
		</dl>
	</main>
</template>