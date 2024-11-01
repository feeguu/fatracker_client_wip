<script setup>
import { RiArrowLeftSLine } from "@remixicon/vue"

import Card from "../../components/TwoInfoCard/TwoInfoCard.vue"
import AddLink from "../../components/AddLink/AddLink.vue"
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Listagem das turmas do curso</h1>
		<a href="/" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="font-semibold flex mb-6 text-xl">Análise e Desenvolvimento de Sistemas</strong>

		<section>
			<RouterLink to="/turmas/turma"><Card title="ADS1_2023" subtitle="Diurno | Professor 2"/></RouterLink>
			<RouterLink to="/turmas/turma"><Card title="ADS2_2023" subtitle="Noturno | Professor 1"/></RouterLink>
			<RouterLink to="/turmas/turma"><Card title="ADS1_2024" subtitle="Noturno | Professor 1"/></RouterLink>
		</section>

		<AddLink linkText="Adicionar Turma" linkPathTo="/turmas/criar-turma"/>
	</main>
</template>