import { useState } from 'react';

const useToggleModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => {
        setShowModal(!showModal);
        const bodyElement = document.querySelector('body');
        if (bodyElement) {
            bodyElement.classList.toggle('hidden');
        }
    };

    return { showModal, onToggleModal };
};

export default useToggleModal;
