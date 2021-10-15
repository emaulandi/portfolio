const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
import path from "path";
import dsv from "@rollup/plugin-dsv";
import adapter from '@sveltejs/adapter-static';

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: adapter({
			// default options are shown
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
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
		paths: {
			base: dev ? '' : '/portfolio',
		},
		trailingSlash: "always",
	}
};

export default config;
