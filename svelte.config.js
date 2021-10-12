/** @type {import('@sveltejs/kit').Config} */
import path from "path";
import dsv from "@rollup/plugin-dsv";

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		vite: {
			resolve: {
				alias: {
					"$data": path.resolve("./src/data"),
				}
			},
			plugins: [
				dsv()
			]
		},
		ssr: false,
	}
};

export default config;
