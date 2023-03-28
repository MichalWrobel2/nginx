export const get =
	(ssrFetch: typeof fetch, returnRaw = false) =>
	async (endpoint: string) => {
		const response = await ssrFetch(endpoint);

		if (!response.ok) {
			return null;
		}

		const parsedResponse = await response.json();

		if (returnRaw) {
			return parsedResponse;
		}

		return parsedResponse.data;
	};
