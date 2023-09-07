import { useState } from 'react';

const useToggleModal = () => {
    const [showModal, setShowModal] = useState(false);

    const onToggleModal = () => {
        setShowModal(!showModal);
        document.querySelector('body').classList.toggle('hidden');
    };

    return { showModal, onToggleModal };
};

export default useToggleModal;
