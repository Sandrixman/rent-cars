import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@emotion/react';
import * as SC from './Modal.styled';

export const Modal = ({ children, onToggleModal }) => {
    const theme = useTheme();

    useEffect(() => {
        const handleKeyDown = e => {
            if (e.code === 'Escape') {
                onToggleModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onToggleModal]);

    const onBackdropClick = e => {
        if (e.target === e.currentTarget) {
            onToggleModal();
        }
    };

    return createPortal(
        <SC.ModalBackdrop onClick={onBackdropClick}>
            <SC.ModalContent
                sx={{
                    backgroundColor:
                        theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                    color: theme.palette.mode === 'dark' ? '#ccc' : '#000',
                }}
            >
                <SC.ModalCloseBtn size={28} onClick={onToggleModal} />
                {children}
            </SC.ModalContent>
        </SC.ModalBackdrop>,
        document.querySelector('#modal-root')
    );
};
