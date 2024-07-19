import { 
    buttonAddNewTicket,
    modalAddTicket,
    btnCloseModal,
    btnSubmitModal,
    inputDescription,
    inputDetailedDescription,
    formAddTicket
} from './constans.js';

import { createTicket } from './ticket.js';
import { openModal, closeModal } from './utility.js';

buttonAddNewTicket.addEventListener('click', () => {
    openModal(modalAddTicket);
});

btnCloseModal.forEach(element => {
    element.addEventListener('click', () => {
        closeModal(modalAddTicket);
    });
});
