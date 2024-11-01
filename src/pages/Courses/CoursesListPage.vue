<script setup>
import { RiArrowLeftSLine } from "@remixicon/vue"
import { RouterLink } from "vue-router";

import Card from "../../components/TwoInfoCard/TwoInfoCard.vue"
import AddLink from "@/components/AddLink/AddLink.vue";
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Listagem dos cursos da faculdade</h1>
		<a href="/" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="font-semibold flex mb-6 text-xl">Cursos Disponíveis</strong>

		<section>
			<RouterLink to="/cursos/curso"><Card title="Logística" subtitle="Noturno | Diurno" /></RouterLink>
			<RouterLink to="/cursos/curso"><Card title="Polímeros" subtitle="Noturno" /></RouterLink>
			<RouterLink to="/cursos/curso"><Card title="Análise e Desenvolvimento de Sistemas" subtitle="Noturno | Diurno" /></RouterLink>
		</section>

		<AddLink linkText="Adicionar Curso" linkPathTo="/cursos/criar-curso"/>
	</main>
</template>