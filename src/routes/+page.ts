import type { PageLoad } from './$types';

export const load: PageLoad = async ({ fetch, params }) => {

    let response = await fetch('https://doscom.org/api/information');
    let information = await response.json();

    return { information };
};
