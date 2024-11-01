<script setup>
import { ref } from "vue"
import { RiArrowLeftSLine } from "@remixicon/vue"
import AddLink from "@/components/AddLink/AddLink.vue"
import Card from "@/components/TwoInfoCard/TwoInfoCard.vue"

const selectedMember = ref("director")

const props = defineProps({
	staffs: Array,
})

console.log(props.staffs)
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Gerenciamento de Equipe Pedagógica</h1>
		<a href="/" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<fieldset class="flex gap-x-4 mb-8">
			<legend class="sr-only">Selecione o tipo de membro pedagógico que deseja gerenciar.</legend>
			<label class="cursor-pointer">
				<input
					class="sr-only peer"
					type="radio"
					name="pedagogical-member"
					value="director"
					v-model="selectedMember"
					id=""
					checked
				/>
				<span
					class="peer-checked:bg-rose-700 high-contrast:peer-checked:bg-contrast-link peer-checked:text-white high-contrast:peer-checked:text-contrast-primary p-1 px-2.5 rounded"
					>Diretores</span
				>
			</label>

			<label class="cursor-pointer">
				<input
					class="sr-only peer"
					type="radio"
					name="pedagogical-member"
					value="coordinator"
					v-model="selectedMember"
					id=""
				/>
				<span
					class="peer-checked:bg-rose-700 high-contrast:peer-checked:bg-contrast-link peer-checked:text-white high-contrast:peer-checked:text-contrast-primary p-1 px-2.5 rounded"
					>Coordenadores</span
				>
			</label>

			<label class="cursor-pointer">
				<input
					class="sr-only peer"
					type="radio"
					name="pedagogical-member"
					value="teacher"
					v-model="selectedMember"
					id=""
				/>
				<span
					class="peer-checked:bg-rose-700 high-contrast:peer-checked:bg-contrast-link peer-checked:text-white high-contrast:peer-checked:text-contrast-primary p-1 px-2.5 rounded"
					>Professores de TG</span
				>
			</label>
		</fieldset>

		<section>
			<Card
				v-for="staff in staffs.filter((staff) => staff.roles.includes(selectedMember))"
				:title="staff.name"
				:subtitle="staff.email"
			/>

			<!-- <Card v-if="selectedMember === 'coordinator'" title="Coordenador 1" subtitle="Logística" />
			<Card
				v-if="selectedMember === 'coordinator'"
				title="Coordenador 2"
				subtitle="Gestão Empresarial"
			/>
			<Card
				v-if="selectedMember === 'coordinator'"
				title="Coordenador 3"
				subtitle="Análise e Desenvolvimento de Sistemas"
			/>

			<Card v-if="selectedMember === 'teacher'" title="Professor 1" subtitle="" />
			<Card v-if="selectedMember === 'teacher'" title="Professor 2" subtitle="" />
			<Card v-if="selectedMember === 'teacher'" title="Professor 3" subtitle="" /> -->
		</section>

		<AddLink
			v-if="selectedMember === 'director'"
			linkText="Adicionar Diretor"
			linkPathTo="/adicionar-diretor"
		/>
		<AddLink
			v-if="selectedMember === 'coordinator'"
			linkText="Adicionar Coordenador"
			linkPathTo="/adicionar-coordenador"
		/>
		<AddLink
			v-if="selectedMember === 'teacher'"
			linkText="Adicionar Professor"
			linkPathTo="/adicionar-professor"
		/>
	</main>
</template>
