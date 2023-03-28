export const viewportEventHandler =
	(...handlers: Array<(elem: any) => void>) =>
	(e: CustomEvent) => {
		handlers.map((handler) => {
			handler(e.target);
		});
	};
