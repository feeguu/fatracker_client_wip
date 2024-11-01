<script setup lang="ts">
import { RiArrowLeftSLine } from "@remixicon/vue"
import Input from "@/components/FormElements/Input.vue"
import Button from "@/components/FormElements/Button.vue"
import Select from "@/components/FormElements/Select.vue"
import { useFetch } from "@/composables/useFetch"
import { reactive } from "vue"
import { useRouter } from "vue-router"

const courses = ["Curso 1", "Curso 2", "Curso 3", "Curso 4"]

const router = useRouter()

const coordinatorData = reactive({
	name: "",
	email: "",
	roles: ["COORDINATOR"],
})

async function handleSubmit() {
	const { data, error } = await useFetch("/staffs", {
		method: "POST",
		body: coordinatorData,
	})

	if (error) {
		alert(error)
	}

	if (data) {
		router.push({ path: "/equipe-pedagogica" })
	}
}
</script>

<template>
	<header class="mb-10">
		<h1 class="sr-only">Gerenciamento de Equipe Pedagógica</h1>
		<a href="/equipe-pedagogica" class="flex items-center">
			<RiArrowLeftSLine class="w-6 h-6 fill-black" />
			<span>Voltar</span>
		</a>
	</header>
	<main>
		<strong class="font-semibold flex mb-6 text-xl">Cadastrar Coordenador(a)</strong>

		<section>
			<form @submit.prevent="handleSubmit">
				<fieldset class="w-full max-w-sm mb-8">
					<Input
						type="text"
						labelText="Nome"
						placeholderText="Nome do(a) coordenador(a)"
						class="mb-4 w-full max-w-md"
						v-model="coordinatorData.name"
					></Input>
					<Input
						type="email"
						labelText="Email"
						placeholderText="email@email.com"
						class="mb-4 w-full max-w-md"
						v-model="coordinatorData.email"
					></Input>
					<Select
						labelText="Atribuir ao Curso"
						idText="course"
						:options="courses"
						class="mb-4 w-full max-w-md"
					></Select>
				</fieldset>
				<Button buttonText="Cadastrar" ariaLabelText="Cadastrar coordenador(a)" />
			</form>
		</section>
	</main>
</template>
