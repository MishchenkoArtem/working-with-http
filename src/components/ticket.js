import { newPostTicket } from './api.js';
import { 
    inputDescription,
    inputDetailedDescription,
    formAddTicket,
    tickets,
    ticketsTempalte
} from './constans.js';

formAddTicket.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log('101');
    
    newPostTicket(inputDescription.value, inputDetailedDescription.value)
      .then((res) => {
        console.log(res);
        createTicket(res);
      })
      .catch((err) => {
        console.log(err);
      });
});

export const createTicket = (res) => {
    console.log(res);
    const ticketElement = ticketsTempalte.cloneNode(true);
    const checkboxElement = ticketElement.querySelector('.tickets__checkbox');
    const textElement = ticketElement.querySelector('.tickets__text');
    const dateElement = ticketElement.querySelector('.tickets__date');

    textElement.textContent = res.value;

    tickets.append(ticketElement);
}
