import type { HandleFetch } from '@sveltejs/kit';

export const handleFetch: HandleFetch = async ({ request, fetch, event }) => {
	if (request.url.startsWith(event.url.origin)) {
		// Workaround: https://github.com/sveltejs/kit/issues/6608
		request.headers.set('origin', event.url.origin);
	}

	return fetch(request);
};
