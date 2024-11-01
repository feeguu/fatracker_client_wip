<script setup lang="ts">
import { useFetch } from "@/composables/useFetch"
import { RiGoogleFill } from "@remixicon/vue"
import { reactive, watch } from "vue"
import { onBeforeRouteUpdate, useRouter } from "vue-router"

import { useCookies } from "vue3-cookies"

const { cookies } = useCookies()
const router = useRouter()

const loginData = reactive({
	email: "",
	password: "",
})

async function handleSubmit() {
	const { data, error } = await useFetch("/auth/login", {
		method: "POST",
		body: loginData,
	})

	if (error) {
		alert(error)
	}

	if (data) {
		cookies.set("fatracker.token", data.token, 60 * 60 * 24, "/")
		router.push({ path: "/" })
	}
}
</script>
<template>
	<div class="flex items-center justify-center min-h-screen bg-gray-100">
		<div class="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
			<h2 class="text-3xl font-bold text-center text-rose-700">FATracker</h2>
			<p class="text-center text-gray-600 mt-2">Entre com a sua conta</p>

			<form class="mt-6" @submit.prevent="handleSubmit">
				<div class="mb-4">
					<div>
						<label for="email" class="block font-medium text-gray-900">Email</label>
						<input
							type="email"
							id="email"
							placeholder="email@exemplo.com"
							class="block w-full rounded-md border-0 mt-1 py-2 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-700 high-contrast:focus:ring-contrast-link"
							v-model="loginData.email"
						/>
					</div>

					<div class="mt-4">
						<label for="senha" class="block font-medium text-gray-900">Senha</label>
						<input
							type="password"
							id="senha"
							class="block w-full rounded-md border-0 mt-1 py-2 text-gray-900 text-sm shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-rose-700 high-contrast:focus:ring-contrast-link"
							v-model="loginData.password"
						/>
					</div>
				</div>

				<div class="flex items-center justify-between mb-4">
					<div class="flex items-center gap-2">
						<input
							type="checkbox"
							class="h-5 w-5 rounded border-gray-300 focus:ring-rose-700 checked:bg-rose-700 hover:checked:bg-gray-400 focus:checked:bg-rose-700 high-contrast:focus:ring-contrast-link high-contrast:checked:bg-contrast-link"
						/>
						<label class="font-medium">Lembre a senha</label>
					</div>

					<a href="#" class="text-rose-700 font-medium hover:underline">Esqueci minha senha</a>
				</div>

				<button
					type="submit"
					class="w-full py-2 bg-rose-700 text-white font-semibold rounded-lg hover:bg-rose-600 focus:outline-none"
				>
					Entrar
				</button>
			</form>

			<!-- <div class="flex items-center justify-center mt-6">
				<span class="text-gray-400">Ou continue com</span>
			</div>
			<div class="flex items-center justify-center space-x-4 mt-4">
				<button
					class="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100"
				>
					<RiGoogleFill class="h-5 w-5 fill-rose-700" />
					<span class="ml-2 font-medium">Google</span>
				</button>
			</div> -->
		</div>
	</div>
</template>
