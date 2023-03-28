import * as path from 'path';
import type { UserConfig } from 'vite';
import { sveltekit } from '@sveltejs/kit/vite';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			'~': path.resolve(__dirname, 'src')
		}
	},
	optimizeDeps: {
		include: ['lodash.get', 'lodash.isequal', 'lodash.clonedeep']
	}
};

export default config;
