export const hideLeft = (target: HTMLElement) => {
	target.style.transform = 'translateX(-100%)';
};
export const hideRight = (target: HTMLElement) => {
	target.style.transform = 'translateX(100%)';
};
export const resetHorizontal = (target: HTMLElement) => {
	target.style.transform = 'unset';
};
