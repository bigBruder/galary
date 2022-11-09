export const baseUrl = 'https://picsum.photos/v2/list';

export const fetchImagesList = () => fetch(baseUrl).then(res => res.json());
