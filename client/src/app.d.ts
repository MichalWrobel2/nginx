// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
// and what to do when importing types
declare namespace App {}

declare namespace svelte.JSX {
	interface HTMLAttributes<T> {
		onenterViewport: (event: CustomEvent) => void;
		onexitViewport: (event: CustomEvent) => void;
	}
}

interface ImportMetaEnv {
	VITE_HOST: string;
}
