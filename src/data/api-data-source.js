const BASE_URL = `https://api.quotable.io`;

class ApiDataSource {
    static getQuote(keyword) {
        const QUOTABLE_URL = `${BASE_URL}/quotes`;
        return fetch(`${QUOTABLE_URL}?tags=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.count > 0) {
                    return Promise.resolve(responseJson.results);
                } else {
                    return Promise.reject(`${keyword} is not found`);
                }
            });
    }
    static getCategories() {
        const TAGS_URL = `${BASE_URL}/tags`;
        return fetch(TAGS_URL)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson) {
                    return Promise.resolve(responseJson);
                } else {
                    return Promise.reject(`Category Not Found!`);
                }
            });
    }
}

export default ApiDataSource;