import { config } from './constans';

function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

export const newPostTicket = (name, description) => {
    return fetch(`${config.baseUrl}`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            description: description,
        }),
    }).then((res) => getResponseData(res));
};
