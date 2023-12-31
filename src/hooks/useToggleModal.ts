import { useState } from 'react';

export const useToggleModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => {
        setShowModal(!showModal);
        const bodyElement = document.querySelector('body');
            if (bodyElement) {
            bodyElement.classList.toggle('overflow');
        }
    };

    return { showModal, onToggleModal };
};
