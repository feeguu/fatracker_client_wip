<script setup lang="ts">
import { RiArrowLeftSLine } from "@remixicon/vue"
import Input from "@/components/FormElements/Input.vue"
import Button from "@/components/FormElements/Button.vue"
import { useFetch } from "@/composables/useFetch"
import { reactive } from "vue"
import { useRouter } from "vue-router"

const router = useRouter()

const professorData = reactive({
	name: "",
	email: "",
	roles: ["PROFESSOR"],
})

async function handleSubmit() {
	const { data, error } = await useFetch("/staffs", {
		method: "POST",
		body: professorData,
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
		<strong class="font-semibold flex mb-6 text-xl">Cadastrar Professor(a)</strong>

		<section>
			<form @submit.prevent="handleSubmit">
				<fieldset class="w-full max-w-lg mb-8">
					<Input
						type="text"
						labelText="Nome"
						placeholderText="Nome do(a) professor(a)"
						class="mb-4 w-full max-w-md"
						v-model="professorData.name"
					></Input>
					<Input
						type="email"
						labelText="Email"
						placeholderText="email@email.com"
						class="mb-4 w-full max-w-md"
						v-model="professorData.email"
					></Input>
				</fieldset>
				<Button buttonText="Cadastrar" ariaLabelText="Cadastrar professor(a)" />
			</form>
		</section>
	</main>
</template>
