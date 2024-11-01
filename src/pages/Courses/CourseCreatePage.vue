<script setup>
import { RiArrowLeftSLine } from "@remixicon/vue"

import Input from "@/components/FormElements/Input.vue";
import Button from "@/components/FormElements/Button.vue";
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Cadastrar um curso para a faculdade</h1>
		<a href="/cursos" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="font-semibold flex mb-6 text-xl">Cadastrar Curso</strong>

		<form action="" class="space-y-6 w-full max-w-md">
			<fieldset class="w-full max-w-md">
				<div class="flex flex-col gap-4 sm:flex-row sm:gap-6">
					<Input labelText="Nome do Curso" placeholderText="Logística"/>
					<Input labelText="Código do Curso" placeholderText="LOG"/>
				</div>
			</fieldset>

			<fieldset class="mt-4 mb-6">
				<label class="font-medium block" for="period">Período</label>
				<div class="mt-2 space-y-4">
					<div class="flex items-center gap-3">
						<input id="period-semestral" name="period" type="radio" class="h-4 w-4 border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:focus:checked:bg-contrast-link high-contrast:checked:bg-contrast-link" />
						<label for="period-semestral" class="block font-medium text-sm">Semestral</label>
					</div>
					<div class="flex items-center gap-3">
						<input id="period-anual" name="period" type="radio" class="h-4 w-4 border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:focus:checked:bg-contrast-link high-contrast:checked:bg-contrast-link" />
						<label for="period-anual" class="block font-medium text-sm">Anual</label>
					</div>
				</div>
			</fieldset>

			<fieldset class="w-full max-w-md flex flex-col mt-4 mb-6">
				<Input labelText="Atribuir Coordenador" placeholderText="Selecione" listText="coordinator-list"/>
				<datalist id="coordinator-list">
					<option value="Coordenador 1"></option>
					<option value="Coordenador 2"></option>
					<option value="Coordenador 3"></option>
				</datalist>
			</fieldset>
			
			<fieldset class="mb-8">
				<label class="font-medium block mb-2" for="turnos">Turnos do Curso</label>
				<div class="border border-neutral-400 rounded px-4 py-3 mt-1">
					<div class="space-y-4 text-sm">
						<div class="flex items-center gap-3">
							<input id="turno-diurno" name="turno-diurno" type="checkbox" class="h-5 w-5 rounded border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:focus:checked:bg-contrast-link high-contrast:checked:bg-contrast-link" />
							<label for="turno-diurno" class="font-medium text-gray-900">Diurno</label>
						</div>

						<div class="flex items-center gap-3">
							<input id="turno-vespertino" name="turno-vespertino" type="checkbox" class="h-5 w-5 rounded border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:focus:checked:bg-contrast-link high-contrast:checked:bg-contrast-link" />
							<label for="turno-vespertino" class="font-medium text-gray-900">Vespertino</label>
						</div>

						<div class="flex items-center gap-3">
							<input id="turno-noturno" name="turno-noturno" type="checkbox" class="h-5 w-5 rounded border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:focus:checked:bg-contrast-link high-contrast:checked:bg-contrast-link" />
							<label for="turno-noturno" class="font-medium text-gray-900">Noturno</label>
						</div>
					</div>
				</div>
			</fieldset>
			<Button buttonText="Cadastrar" ariaLabelText="Cadastrar curso"/>
		</form>
	</main>
</template>