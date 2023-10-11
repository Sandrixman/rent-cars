import { Link } from 'react-router-dom';
import * as SC from './ErrorPage.styled';

const ErrorPage = () => {
    return (
        <>
            <SC.ErrorImage
                src="https://images.unsplash.com/photo-1602984338060-bfddce132ebc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80"
                alt="happy driver"
            />
            <SC.ErrorWrapper>
                <SC.ErrorTitle>404</SC.ErrorTitle>
                <SC.ErrorText>Page not found</SC.ErrorText>
                <Link to="/">
                    <SC.ErrorBtn variant="contained">Home page</SC.ErrorBtn>
                </Link>
            </SC.ErrorWrapper>
        </>
    );
};

export default ErrorPage;
