import Api from  '../RestClient/Api';
export const searchTweetsApi = async ({ keyword }) => {
    return await Api.get('/api/tweets/search', { q: keyword, lang: 'en' }).then(response => response);
};
