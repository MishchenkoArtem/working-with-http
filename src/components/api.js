import { config } from './constans';
console.log(config);

function getResponseData(res) {
    return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
}

// function getTickets() {
//     return fetch(`${config.baseUrl}/tickets`)
//     .then((res) => console.log(res));
// }

export const newPostTicket = (name, description) => {
    return fetch(`${config.baseUrl}`, {
        method: 'POST',
        headers: config.headers,
        body: JSON.stringify({
            name: name,
            description: description,
        }),
    }).then((res) => getResponseData(res));
}
