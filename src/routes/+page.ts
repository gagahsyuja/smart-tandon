import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

    let response = await fetch('http://127.0.0.1:4000/api/information');
    let information = await response.json();

    return { information };
};
