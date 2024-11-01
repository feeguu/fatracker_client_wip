import forms from "@tailwindcss/forms"

/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.vue"],
	darkMode: "selector",
	theme: {
		extend: {
			colors: {
				contrast: {
					primary: "#000000",
					secondary: "#ffffff",
					link: "#ffff00",
					button: "#ff00ff",
				},
			},
		},
	},
	plugins: [forms, highContrast],
}

function highContrast({ addVariant, e }) {
	addVariant("high-contrast", ({ modifySelectors, separator }) => {
		modifySelectors(({ className }) => {
			return `.${e(`high-contrast${separator}${className}`)}:where(.high-contrast, .high-contrast *)`
		})
	})
}
