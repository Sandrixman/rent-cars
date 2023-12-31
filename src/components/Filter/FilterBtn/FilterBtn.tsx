import * as SC from './FilterBtn.styled';

interface IFilterBtnProps {
    onFilter: () => void;
}

export const FilterBtn: React.FC<IFilterBtnProps> = ({ onFilter }) => {
    return (
        <SC.FilterBtn type="button" variant="contained" onClick={onFilter}>
            Search
        </SC.FilterBtn>
    );
};
