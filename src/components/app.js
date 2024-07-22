import {
    buttonAddNewTicket,
    modalAddTicket,
    btnCloseModal,
    btnSubmitModal,
} from './constans.js';

import { openModal, closeModal } from './utility.js';

buttonAddNewTicket.addEventListener('click', () => {
    openModal(modalAddTicket);
});

btnCloseModal.forEach((element) => {
    element.addEventListener('click', () => {
        closeModal(modalAddTicket);
    });
});

btnSubmitModal.forEach((element) => {
    element.addEventListener('click', () => {
        closeModal(modalAddTicket);
    });
});
