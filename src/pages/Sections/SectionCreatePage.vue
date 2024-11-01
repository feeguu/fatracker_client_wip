<script setup>
import { RiArrowLeftSLine, RiUpload2Line } from "@remixicon/vue";
import { ref } from "vue";

import Input from "@/components/FormElements/Input.vue";
import Button from "@/components/FormElements/Button.vue";
import AddLink from "@/components/AddLink/AddLink.vue";

const showForm = ref(false);
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Cadastrar uma turma para o curso</h1>
		<a href="/turmas" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="font-semibold flex mb-6 text-xl">Cadastrar Turma</strong>

		<form action="">
			<fieldset class="w-full max-w-lg mb-8" aria-labelledby="turma-identificacao">
				<legend id="turma-identificacao" class="sr-only">Identificação da Turma</legend>
				<div class="flex flex-col gap-4 md:flex-row md:gap-6 py-3">
					<Input labelText="Ano de matrícula" placeholderText="Ano" ariaLabelText="Ano de matrícula"/>
					<Input labelText="Semestre" placeholderText="Selecione" listText="periodo-list" ariaLabelText="Semestre"/>
					<datalist id="periodo-list">
						<option value="Primeiro"></option>
						<option value="Segundo"></option>
						<option value="Terceiro"></option>
						<option value="Quarto"></option>
						<option value="Quinto"></option>
						<option value="Sexto"></option>
					</datalist>
					<Input labelText="Turno" placeholderText="Selecione" listText="shift-list" ariaLabelText="Turno"/>
					<datalist id="shift-list">
						<option value="Diurno"></option>
						<option value="Vespertino"></option>
						<option value="Noturno"></option>
					</datalist>
				</div>
				<div class="font-semibold text-lg mt-2">
					AMS1_2024
				</div>
			</fieldset>
			

			<fieldset class="w-full max-w-lg mb-8" aria-labelledby="professor-atribuir">
				<legend id="professor-atribuir" class="sr-only">Atribuir Professor</legend>
				<Input labelText="Professor de Trabalho de Graduação" placeholderText="Selecione" listText="professor-list" ariaLabelText="Professor de Trabalho de Graduação"/>
				<datalist id="professor-list">
					<option value="Professor 1"></option>
					<option value="Professor 2"></option>
					<option value="Professor 3"></option>
				</datalist>
			</fieldset>


			<fieldset class="mb-8" aria-labelledby="atribuir-alunos">
				<legend id="atribuir-alunos" class="font-semibold block mb-4">Atribuir Alunos</legend>
				<div class="w-full max-w-md px-4 py-2 flex items-center gap-4 mb-4 border border-neutral-400 rounded hover:cursor-pointer hover:bg-neutral-100 high-contrast:hover:bg-contrast-link" 
					role="button" 
					aria-label="Importar arquivo de alunos"
				>
					<RiUpload2Line class="w-5 h-5 fill-black" aria-hidden="true" />
					<span class="text-sm font-medium">Importar arquivo de alunos</span>
				</div>

				<AddLink linkText="Adicionar Aluno" :onClickFun="() => showForm = !showForm"/>

				<form v-if="showForm" action="" id="form-adicionar-aluno" class="w-full max-w-md border border-neutral-400 rounded mt-6 p-4 space-y-4">
					<span class="text-lg font-semibold block mb-4">Cadastrar Aluno</span>

					<section class="flex flex-col gap-4 md:flex-row md:gap-6" aria-label="Informações do aluno">
						<Input labelText="Nome" placeholderText="Nome do aluno" aria-label="Nome do aluno"/>
						<Input labelText="RA" placeholderText="RA do aluno" aria-label="RA do aluno"/>
					</section>

					<div class="flex justify-center pt-2">
						<Button buttonText="Adicionar" ariaLabelText="Adicionar aluno na turma"/>
					</div>
				</form>
			</fieldset>
			<Button buttonText="Cadastrar" ariaLabelText="Cadastrar turma no curso"/>
		</form>
	</main>
</template>