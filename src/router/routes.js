import MainLayout from "@/layouts/MainLayout.vue"

import HomePage from "@/pages/HomePage.vue"
import CreateCoordinatorPage from "@/pages/PedagogicalTeam/Coordinator/CreateCoordinatorPage.vue"
import CreateDirectorPage from "@/pages/PedagogicalTeam/Director/CreateDirectorPage.vue"
import PedagogicalTeamPage from "@/pages/PedagogicalTeam/PedagogicalTeamPage.vue"
import CreateTeacherPage from "@/pages/PedagogicalTeam/Teacher/CreateTeacherPage.vue"

import SectionsListPage from "@/pages/Sections/SectionsListPage.vue"
import SectionCreatePage from "@/pages/Sections/SectionCreatePage.vue"

import CoursesListPage from "@/pages/Courses/CoursesListPage.vue"
import CourseCreatePage from "@/pages/Courses/CourseCreatePage.vue"

import SectionInfoPage from "@/pages/Sections/SectionInfoPage.vue"
import CourseInfoPage from "@/pages/Courses/CourseInfoPage.vue"
import LoginPage from "@/pages/SignInLogin/LoginPage.vue"
import { useFetch } from "@/composables/useFetch"

/** @type {import('vue-router').RouteRecordRaw[]} */
export const routes = [
	{
		path: "/",
		component: MainLayout,
		children: [
			{
				path: "",
				component: HomePage,
			},
			{
				path: "equipe-pedagogica",
				component: PedagogicalTeamPage,
				props: true,
				beforeEnter: async (to, from, next) => {
					const { data, error } = await useFetch("/staffs")

					if (error) {
						console.error(error)
						return
					}

					if (data) {
						to.params.staffs = data
						return next()
					}
				},
			},
			{
				path: "adicionar-diretor",
				component: CreateDirectorPage,
			},
			{
				path: "adicionar-coordenador",
				component: CreateCoordinatorPage,
			},
			{
				path: "adicionar-professor",
				component: CreateTeacherPage,
			},
			{
				path: "turmas",
				children: [
					{
						path: "",
						component: SectionsListPage,
					},
					{
						path: "turma",
						component: SectionInfoPage,
					},
					{
						path: "criar-turma",
						component: SectionCreatePage,
					},
				],
			},
			{
				path: "cursos",
				children: [
					{
						path: "",
						component: CoursesListPage,
					},
					{
						path: "curso",
						component: CourseInfoPage,
					},
					{
						path: "criar-curso",
						component: CourseCreatePage,
					},
				],
			},
		],
	},
	{
		path: "/login",
		component: LoginPage,
	},
]
