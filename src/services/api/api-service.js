import { ApiUrl as apiUrl } from './env/env-development';

class ApiService {
    static apiUrl = apiUrl;
    static apiKey = '26147fe1d860f46ef60c1016e7a85f93';

    post = async (url = '', body=null, headers = {}) => {
        {
            const requestUrl = this.addApiKeyToRequest(ApiService.apiUrl + url);

            try {
                return await fetch(requestUrl, {
                    method: 'POST',
                    body,
                    headers,
                });
            } catch (e) {
                throw new Error(`error in request to post for ${requestUrl}, reason ${e}`);
            }
        }
    };

    get = async (url = '', headers = {}) => {
        {
            const requestUrl = this.addApiKeyToRequest(ApiService.apiUrl + url);

            try {
                return await fetch(requestUrl, {
                    method: 'GET',
                    headers,
                });
            } catch (e) {
                throw new Error(`error in request to get for ${requestUrl}, reason ${e}`);
            }
        }
    };

    put = async (url = '', options, headers = {}) => {
        const requestUrl = this.addApiKeyToRequest(ApiService.apiUrl + url);

        try {
            return await fetch(requestUrl, {
                method: 'PUT',
                body:   JSON.stringify(options),
                headers,
            });
        } catch (e) {
            throw new Error(`error in request to put for ${requestUrl}, reason ${e}`);
        }
    };

    remove = async (url = '', options, headers = {}) => {
        const requestUrl = this.addApiKeyToRequest(ApiService.apiUrl + url);

        try {
            return await fetch(requestUrl, {
                method: 'DELETE',
                body:   JSON.stringify(options),
                headers,
            });
        } catch (e) {
            throw new Error(`error in request to remove for ${requestUrl}, reason ${e}`);
        }
    };


    addApiKeyToRequest (path) {
        const apiKeyParam = `api_key=${ApiService.apiKey}`;

        return !path.includes('?')
            ?`${path}?${apiKeyParam}`
            :`${path}&${apiKeyParam}`;
    }
}

export const apiService = new ApiService();
