import { Endpoints } from '~/api/endpoints';
import type { UploadFile } from '~/models/types';

type ImageFormat = {
	width: number;
	url: string;
};

export const getImageUrl = (url: string) =>
	url.startsWith('http') ? url : Endpoints.rawHost + url;

export const getSrcset = (image: UploadFile) =>
	Object.values(image.formats as ImageFormat[])
		?.map((format: ImageFormat) => `${getImageUrl(format.url)} ${format.width}w`)
		.join(', ');
