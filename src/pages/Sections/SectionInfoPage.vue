<script setup>
import { RiArrowLeftSLine } from "@remixicon/vue"
import StudantsListItem from "../../components/StudantListItem/StudantListItem.vue"
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Informações da turma</h1>
		<a href="/turmas" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="text-lg font-semibold">Turma ADS1_2023</strong>

		<dl class="w-full max-w-xl mt-4 divide-y divide-gray-300">
			<section class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
				<strong class="font-medium">Ano de matrícula</strong>
				<p class="mb-1 text-gray-700 sm:col-span-1 sm:mt-0">2024</p>

				<strong class="font-medium">Semestre</strong>
				<p class="mb-1 text-gray-700 sm:col-span-1 sm:mt-0">Primeiro</p>

				<strong class="font-medium">Turno</strong>
				<p class="mb-1 text-gray-700 sm:col-span-1 sm:mt-0">Diurno</p>
			</section>

			<section class="px-4 py-6 sm:grid sm:grid-cols-2 sm:gap-4 sm:px-0">
				<strong class="font-medium">Professor de Trabalho de Graduação</strong>
				<p class="mb-1 text-gray-700 sm:col-span-1">Professor 1</p>
			</section>

			<section class="px-4 py-6 sm:grid sm:grid-cols-1 sm:gap-4 sm:px-0">
				<strong class="font-medium">Alunos da turma</strong>
				<div class="border border-neutral-300 rounded-md mt-2">
					<StudantsListItem studantName="Aluno"></StudantsListItem>
					<StudantsListItem studantName="Aluno"></StudantsListItem>
					<StudantsListItem studantName="Aluno"></StudantsListItem>
				</div>
			</section>
		</dl>
	</main>
</template>