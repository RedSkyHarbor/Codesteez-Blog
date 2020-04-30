// Buttercms - headless CMS
// https://buttercms.com/docs/api-client/reactq

import Butter from 'buttercms';

const BUTTER_API_KEY: string = process.env.REACT_APP_BUTTER_API!

const butter = Butter(BUTTER_API_KEY);

butter.post.list({page: 1, page_size: 10}).then(function(response) {
    console.log(response)
})

export default butter;