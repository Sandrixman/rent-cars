import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { useTheme } from '@mui/material/styles';
import * as SC from './Modal.styled';

interface IModalProps {
    children: React.ReactNode;
    onToggleModal: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, onToggleModal }) => {
    const theme = useTheme();

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.code === 'Escape') {
                onToggleModal();
            }
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onToggleModal]);

    const onBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            onToggleModal();
        }
    };

    const modalRoot = document.querySelector('#modal-root');

    if (!modalRoot) {
        return null;
    }

    return createPortal(
        <SC.ModalBackdrop onClick={onBackdropClick}>
            <SC.ModalContent
                sx={{
                    backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                    color: theme.palette.mode === 'dark' ? '#ccc' : '#000',
                }}
            >
                <SC.ModalCloseBtn size={28} onClick={onToggleModal} />
                {children}
            </SC.ModalContent>
        </SC.ModalBackdrop>,
        modalRoot
    );
};
