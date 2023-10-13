import * as SC from './FilterBtn.styled';

interface IFilterBtnProps {
    onFilter: () => void;
}

const FilterBtn = ({ onFilter }: IFilterBtnProps) => {
    return (
        <SC.FilterBtn type="button" variant="contained" onClick={onFilter}>
            Search
        </SC.FilterBtn>
    );
};

export default FilterBtn;
