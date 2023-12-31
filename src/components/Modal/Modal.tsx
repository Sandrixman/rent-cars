import { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { animated, useSpring } from 'react-spring';
import { useTheme } from '@mui/material/styles';
import * as SC from './Modal.styled';

interface IModalProps {
    children: React.ReactNode;
    onToggleModal: () => void;
}

export const Modal: React.FC<IModalProps> = ({ children, onToggleModal }) => {
    const theme = useTheme();
    const [modalVisible, setModalVisible] = useState(true);

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

    //
    const modalAnimation = useSpring({
        opacity: modalVisible ? 1 : 0,
        from: { opacity: 0 },
        config: { duration: 100 },
        onRest: () => {
            if (!modalVisible) {
                onToggleModal();
            }
        },
    });

    const onBackdropClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            setModalVisible(false);
        }
    };

    const modalRoot = document.querySelector('#modal-root');

    if (!modalRoot) {
        return null;
    }

    return createPortal(
        <animated.div style={modalAnimation}>
            <SC.ModalBackdrop onClick={onBackdropClick}>
                <SC.ModalContent
                    sx={{
                        backgroundColor: theme.palette.mode === 'dark' ? '#1e1e1e' : '#fff',
                        color: theme.palette.mode === 'dark' ? '#ccc' : '#000',
                    }}
                >
                    <SC.ModalCloseBtn size={28} onClick={() => setModalVisible(false)} />
                    {children}
                </SC.ModalContent>
            </SC.ModalBackdrop>
        </animated.div>,
        modalRoot
    );
};
