import { Link } from 'react-router-dom';
import * as SC from './ErrorPage.styled';

const ErrorPage = () => {
    return (
        <SC.ErrorWrapper>
            <SC.ErrorTitle>404</SC.ErrorTitle>
            <SC.ErrorText>Page not found</SC.ErrorText>
            <Link to="/">
                <SC.ErrorBtn variant="contained">Home page</SC.ErrorBtn>
            </Link>
        </SC.ErrorWrapper>
    );
};

export default ErrorPage;
