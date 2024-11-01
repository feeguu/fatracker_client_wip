<script setup>
import { RiBuildingLine, RiGraduationCapLine, RiHome2Line, RiTeamLine, RiUserLine } from "@remixicon/vue"
import SidebarNavItem from "./SidebarNavItem.vue"
import { useCookies } from "vue3-cookies"
import { useRouter } from "vue-router"

function handleSignOut() {
	const { cookies } = useCookies()

	cookies.remove("fatracker.token")
	window.location.href = "/login"
}
</script>

<template>
	<aside
		id="sidebar"
		class="hidden min-h-screen w-full max-w-80 bg-rose-700 top-0 left-0 rounded-r-md flex-col py-6 px-6 gap-y-6 text-white z-50 high-contrast:ring-1 sm:flex"
	>
		<header>
			<h1 class="text-white font-medium text-xl"><span class="text-rose-100">FA</span>Tracker</h1>
		</header>
		<nav class="flex-1" aria-label="Menu de navegação principal">
			<ul class="flex flex-col gap-y-1" role="menubar">
				<SidebarNavItem to="/" name="Início" :icon="RiHome2Line" active />
				<SidebarNavItem
					to="/equipe-pedagogica"
					name="Equipe Pedagógica"
					aria-label="Gerenciar membros da equipe pedagógica"
					:icon="RiBuildingLine"
				/>
				<SidebarNavItem
					to="/turmas"
					name="Turmas"
					aria-label="Gerenciar turmas da faculdade"
					:icon="RiTeamLine"
				/>
				<SidebarNavItem
					to="/cursos"
					name="Cursos"
					aria-label="Gerenciar cursos da faculdade"
					:icon="RiGraduationCapLine"
				/>
			</ul>
		</nav>
		<footer>
			<div class="flex items-center gap-x-3">
				<RiUserLine class="w-8 h-8" />
				<div class="flex flex-col items-start">
					<strong class="font-semibold text-sm">Administrador</strong>
					<!-- <span class="text-sm opacity-85">user@user.com</span> -->
					<button @click="handleSignOut" class="text-sm opacity-85">Sair</button>
				</div>
			</div>
		</footer>
	</aside>
</template>
