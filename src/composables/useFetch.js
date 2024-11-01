import { APIError } from "@/errors/APIError"
import { useCookies } from "vue3-cookies"

export async function useFetch(url, options) {
	const { cookies } = useCookies()

	let data
	let error

	const defaultErrorMessage = "Algo deu errado. Tente novamente mais tarde."

	try {
		const res = await fetch(`http://localhost:3000${url}`, {
			...options,
			body: options?.body ? JSON.stringify(options.body) : null,
			headers: {
				"Content-Type": "application/json",
				Authorization: cookies.get("fatracker.token"),
				...options?.headers,
			},
		})

		let json

		try {
			json = await res.json()
		} catch (error) {
			throw new Error(defaultErrorMessage)
		}

		if (!res.ok) {
			if (json?.message) {
				throw new APIError(json.message)
			}

			throw new APIError(defaultErrorMessage)
		}

		data = json
	} catch (e) {
		error = e
	}

	return { data, error }
}
