export const tickets = document.querySelector('.tickets');
export const buttonAddNewTicket = document.querySelector('.tickets__button');

export const modalAddTicket = document.querySelector('#modal-ticket-add');
export const formAddTicket = document.forms['modal-ticket-add'];
export const inputDescription = formAddTicket['short-description'];
export const inputDetailedDescription = formAddTicket['detailed-description'];

export const btnCloseModal = document.querySelectorAll(
    '.modal__wrapper .modal__button[type=button]'
);
export const btnSubmitModal = document.querySelectorAll(
    '.modal__wrapper .modal__button[type=submit]'
);

export const ticketsTempalte =
    document.querySelector('.tickets__tempalte').content;

export const config = {
    baseUrl: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
};
